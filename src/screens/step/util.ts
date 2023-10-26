import { useEffect, useRef, useState } from "react";
import { useMatch } from "react-router-dom";
import { useChildTask } from "utils/task";
export const useParamInUrl = () => {
  const match = useMatch("tasks/:taskId/step/:businessId/*");
  return (
    match?.params || {
      taskId: "",
      businessId: "",
    }
  );
};
export const useChildTaskInUrl = () =>
  useChildTask(useParamInUrl().taskId || "", useParamInUrl().businessId || "");

export const validateIdCard = (IDNumber: string) => {
  const idCardReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  const isValid = idCardReg.test(IDNumber);
  return isValid;
};

export const validatePhone = (phoneNumber: string) => {
  const phoneReg = /^1[3456789]\d{9}$/;
  const isValid = phoneReg.test(phoneNumber);
  return isValid;
};

export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<any>();
  // 保存新回调
  useEffect(() => {
    savedCallback.current = callback;
  });

  // 建立 interval
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
