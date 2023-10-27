// 2、调用取号机设备硬件接口
//获取设备ID
export const getUid = () => {
  // @ts-ignore
  const androidJSBridge = window?.androidJSBridge || null;
  if (androidJSBridge) return JSON.parse(androidJSBridge.getUid());
  return null;
};

//获取设备MAC
export const getMac = () => {
  // @ts-ignore
  const androidJSBridge = window?.androidJSBridge || null;
  if (androidJSBridge) return JSON.parse(androidJSBridge.getMac());
  return null;
};

//获取身份证信息
export const getUserCardId = () => {
  // @ts-ignore
  const androidJSBridge = window?.androidJSBridge || null;
  if (androidJSBridge) return JSON.parse(androidJSBridge.getUserCardId());
  return null;
};

//设置打印信息
export const setPrint = (data: any) => {
  // @ts-ignore
  const androidJSBridge = window?.androidJSBridge || null;
  if (androidJSBridge)
    return JSON.parse(androidJSBridge.setPrint(JSON.stringify(data)));
  return null;
};
