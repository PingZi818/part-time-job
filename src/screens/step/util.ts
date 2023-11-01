import { useEffect, useRef, useState } from "react"
import { useMatch } from "react-router-dom"
import { useChildTask } from "utils/task"
export const useParamInUrl = () => {
  const match = useMatch("tasks/:taskId/step/:businessId/*")
  return (
    match?.params || {
      taskId: "",
      businessId: "",
    }
  )
}
export const useChildTaskInUrl = () =>
  useChildTask(useParamInUrl().taskId || "", useParamInUrl().businessId || "")

export const validateIdCard = (IDNumber: string) => {
  const idCardReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  const isValid = idCardReg.test(IDNumber)
  return isValid
}

export const validatePhone = (phoneNumber: string) => {
  const phoneReg = /^1[3456789]\d{9}$/
  const isValid = phoneReg.test(phoneNumber)
  return isValid
}

export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<any>()
  // 保存新回调
  useEffect(() => {
    savedCallback.current = callback
  })

  // 建立 interval
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

//轮询校验
export function checkID(value: string) {
  let flag = false
  if (value == null) {
    flag = false
  }
  //不用分顺序--截取位数校验
  if (checkCode(value)) {
    const date = value.substring(6, 14)
    if (checkDate(date)) {
      if (checkProv(value.substring(0, 2))) {
        flag = true
      }
    }
  }
  return flag
}
//1、省级地址码的方法--固定
function checkProv(val: any) {
  var pattern = /^[1-9][0-9]/
  var province: any = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门",
  }
  if (pattern.test(val)) {
    if (province[val]) {
      return true
    }
  }
  return false
}
//2、验证出生年月日-时间校验
function checkDate(val: string) {
  const pattern =
    /^(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/
  if (pattern.test(val)) {
    let year = val.substring(0, 4)
    let month = val.substring(4, 6)
    let date = val.substring(6, 8)
    let date2 = new Date(year + "-" + month + "-" + date)
    if (date2 && date2.getMonth() == parseInt(month) - 1) {
      return true
    }
  }
  return false
}
//3、校验码--最后一位的校验
function checkCode(val: any) {
  const p =
    /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  const parity = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2]
  const code = val.substring(17)
  if (p.test(val)) {
    let sum = 0
    for (let i = 0; i < 17; i++) {
      sum += val[i] * factor[i]
    }
    if (parity[sum % 11] == code.toUpperCase()) {
      return true
    }
  }
  return false
}
