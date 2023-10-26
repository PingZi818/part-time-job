// 2、调用取号机设备硬件接口
//获取设备ID
export const getUid = () => {
  // @ts-ignore
  const androidJSBridge = window?.androidJSBridge || null;
  if (androidJSBridge) return androidJSBridge.getUid();
  return null;
};

//获取设备MAC
export const getMac = () => {
  // @ts-ignore
  const androidJSBridge = window?.androidJSBridge || null;
  if (androidJSBridge) return androidJSBridge.getMac();
  return null;
};

//获取身份证信息
export const getUserCardId = () => {
  // @ts-ignore
  const androidJSBridge = window?.androidJSBridge || null;
  if (androidJSBridge) return androidJSBridge.getUserCardId();
  return null;
};

//设置打印信息
export const setPrint = () => {
  // @ts-ignore
  const androidJSBridge = window?.androidJSBridge || null;
  if (androidJSBridge) return androidJSBridge.setPrint();
  return null;
};
