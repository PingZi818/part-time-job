import qs from "qs";
import * as auth from "auth-provider";
import { useAuth } from "context/auth-context";
import { useCallback } from "react";
import { getMac } from "./androidJSBridge";

const apiUrl = process.env.REACT_APP_API_URL;
interface Config extends RequestInit {
  userToken?: string;
  data?: object;
}
export const http = async (
  endpoint: string,
  { data, userToken, headers, ...customConfig }: Config = {}
) => {
  const res = getMac();
  const dataRes = {
    ...data,
    machineMac: res?.status
      ? res?.data?.mac || "FF:00:00:00:00:FF"
      : "FF:00:00:00:00:FF",
  };
  // @ts-ignore
  const newHeaders = new Headers({
    "Content-Type": dataRes ? "application/json;charset=utf-8" : "",
    userToken: userToken,
  });
  const config = {
    method: "GET",
    headers: newHeaders,
    ...customConfig,
  };

  if (config.method.toUpperCase() === "GET") {
    endpoint += `?${qs.stringify(dataRes)}`;
  } else {
    config.body = JSON.stringify(dataRes || {});
  }
  // axios 和 fetch 的表现不一样，axios可以直接在返回状态不为2xx的时候抛出异常
  return window
    .fetch(`${apiUrl}/takeCall/external/${endpoint}`, config)
    .then(async (response) => {
      const res = await response.json();
      if (res.code === 401) {
        await auth.logout();
        window.location.reload();
        return Promise.reject({ message: "请重新登录" });
      }
      if (response.ok && res.code === 200) {
        return res.data;
      } else {
        return Promise.reject(res);
      }
    });
};

export const useHttp = () => {
  const { user } = useAuth();
  return useCallback(
    (...[endpoint, config]: Parameters<typeof http>) =>
      http(endpoint, { ...config, userToken: user?.userToken }),
    [user?.userToken]
  );
};
