// 在真实环境中，如果使用firebase这种第三方auth服务的话，本文件不需要开发者开发

import { User } from "types/user";
import { getMac } from "utils/androidJSBridge";
import { setEncrypt } from "utils/encrypt";

const apiUrl = process.env.REACT_APP_API_URL;
const localStorageUserKey = "__auth_provider_user__";

export const getUser = () => {
  const user: User | null = localStorage.getItem(localStorageUserKey)
    ? JSON.parse(localStorage.getItem(localStorageUserKey) || "")
    : null;
  return user;
};

export const handleUserResponse = (data: User) => {
  const userStr = JSON.stringify(data);
  localStorage.setItem(localStorageUserKey, userStr || "");
  return data;
};

export const login = (data: { userName: string; userPassword: string }) => {
  const res = getMac();
  const loginFormParam = {
    autoLogin: "",
    userAccount: data.userName,
    userPassword: data.userPassword,
    userType: "DEVICE",
    machineMac: res?.status
      ? res?.data?.mac || "FF:00:00:00:00:FF"
      : "FF:00:00:00:00:FF",
  };
  return fetch(`${apiUrl}/takeCall/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: setEncrypt(JSON.stringify(loginFormParam)) || null,
  }).then(async (response) => {
    const res = await response.json();
    if (res.code === 200) {
      return handleUserResponse(res.data);
    } else {
      return Promise.reject(res);
    }
  });
};

export const logout = async () =>
  window.localStorage.removeItem(localStorageUserKey);
