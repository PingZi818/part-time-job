import { useHttp } from "utils/http"
import { useQuery } from "react-query"
import { DIOTakeNoSave, DROTakeNo } from "types/task"

export const useGetTakeNo = (param: DIOTakeNoSave) => {
  const client = useHttp()
  return useQuery<DROTakeNo>(["getTakeNo", param], async () =>
    client("getTakeNo", { data: param, method: "POST" })
  )
}
export const useGetPhoneNumByIdCard = (param: { identityCardNum: string }) => {
  const client = useHttp()
  return useQuery<{ phoneNumber: string; residentName: string }>(
    ["getResident", param],
    async () => client("getResident", { data: param, method: "POST" })
  )
}
export const useSetPrintStatus = (param: {
  isPrinted: boolean
  takeNoId: string
}) => {
  const client = useHttp()
  return useQuery<any>(["setPrintStatus", param], async () =>
    client("setPrintStatus", { data: param, method: "POST" })
  )
}
