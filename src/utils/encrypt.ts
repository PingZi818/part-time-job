import { JSEncrypt } from "jsencrypt"
const key = process.env.REACT_APP_PUBLIC_KEY
export function setEncrypt(data: any) {
  const crypt = new JSEncrypt()
  crypt.setPublicKey(key || "")
  return crypt.encrypt(data)
}
