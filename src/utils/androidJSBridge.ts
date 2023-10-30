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
//请放入身份证
export const playCardReady = () => {
  // @ts-ignore
  const androidJSBridge = window?.androidJSBridge || null;
  if (androidJSBridge) return androidJSBridge.playCardReady();
  return null;
};
//读取身份证成功
export const playCardSuccess = () => {
  // @ts-ignore
  const androidJSBridge = window?.androidJSBridge || null;
  if (androidJSBridge) return androidJSBridge.playCardSuccess();
  return null;
};
//请输入身份证号
export const playCardInput = () => {
  // @ts-ignore
  const androidJSBridge = window?.androidJSBridge || null;
  if (androidJSBridge) return androidJSBridge.playCardInput();
  return null;
};
//输入身份证号无效
export const playCardInputInvalid = () => {
  // @ts-ignore
  const androidJSBridge = window?.androidJSBridge || null;
  if (androidJSBridge) return androidJSBridge.playCardInputInvalid();
  return null;
};
//请输入手机号
export const playPhoneInput = () => {
  // @ts-ignore
  const androidJSBridge = window?.androidJSBridge || null;
  if (androidJSBridge) return androidJSBridge.playPhoneInput();
  return null;
};
//输入手机号无效
export const playPhoneInputInvalid = () => {
  // @ts-ignore
  const androidJSBridge = window?.androidJSBridge || null;
  if (androidJSBridge) return androidJSBridge.playPhoneInputInvalid();
  return null;
};
//取号成功
export const playTakeSuccess = () => {
  // @ts-ignore
  const androidJSBridge = window?.androidJSBridge || null;
  if (androidJSBridge) return androidJSBridge.playTakeSuccess();
  return null;
};
//取号失败（返回信息内容包含（无法取号））
export const playTakeFail = () => {
  // @ts-ignore
  const androidJSBridge = window?.androidJSBridge || null;
  if (androidJSBridge) return JSON.parse(androidJSBridge.playTakeFail());
  return null;
};
