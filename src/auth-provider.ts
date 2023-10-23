// 在真实环境中，如果使用firebase这种第三方auth服务的话，本文件不需要开发者开发

import { User } from "types/user";
import { setEncrypt } from "utils/encrypt";

const apiUrl = process.env.REACT_APP_API_URL;
const localStorageUserKey = "__auth_provider_user__";
const localStorageKey = "__auth_provider_token__";

export const getToken = () => window.localStorage.getItem(localStorageKey);
export const getUser = () => {
  const user =
    JSON.parse(window.localStorage.getItem(localStorageUserKey) || "") ||
    ({} as User);
  return user;
};

export const handleUserResponse = (data: User) => {
  const userStr = JSON.stringify(data);
  window.localStorage.setItem(localStorageUserKey, userStr || "");
  window.localStorage.setItem(localStorageKey, data.userToken || "");
  return data;
};

export const login = (data: { userName: string; userPassword: string }) => {
  // const text = "JueJin2022";
  // const enc = setEncrypt(text);
  // console.log(enc);
  const loginFormParam = {
    ...data,
    userType: "DEVICE",
  };
  return fetch(`${apiUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginFormParam),
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
  window.localStorage.removeItem(localStorageKey);
