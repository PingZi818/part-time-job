// 在真实环境中，如果使用firebase这种第三方auth服务的话，本文件不需要开发者开发

import { User } from "types/user";
import { setEncrypt } from "utils/encrypt";

const apiUrl = process.env.REACT_APP_API_URL;

const localStorageKey = "__auth_provider_token__";

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = (data: { user: User }) => {
  window.localStorage.setItem(localStorageKey, data.user.token || "");
  return data.user;
};

export const login = (data: { username: string; password: string }) => {
  const text = "JueJin2022";
  const enc = setEncrypt(text);
  console.log(enc);
  return fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    const res = await response.json();
    if (response.ok) {
      return handleUserResponse(res.data);
    } else {
      return Promise.reject(res);
    }
  });
};

export const register = (data: { username: string; password: string }) => {
  return fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      return handleUserResponse(await response.json());
    } else {
      return Promise.reject(await response.json());
    }
  });
};

export const logout = async () =>
  window.localStorage.removeItem(localStorageKey);
