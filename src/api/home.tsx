import { useHttp } from "utils/http"
import { useQuery } from "react-query"
import { Banner, ServerData, Account, News, Process, Product } from "types/home"
export const useBanners = () => {
  const client = useHttp()
  return useQuery<Banner[]>(["banners", {}], () =>
    client("banners", { method: "GET" })
  )
}
export const useServerData = () => {
  const client = useHttp()
  return useQuery<ServerData[]>(["serverData", {}], () =>
    client("serverData", { method: "GET" })
  )
}
export const useAccountList = () => {
  const client = useHttp()
  return useQuery<Account[]>(["accountList", {}], () =>
    client("accountList", { method: "GET" })
  )
}
export const useNewsList = () => {
  const client = useHttp()
  return useQuery<News[]>(["newsList", {}], () =>
    client("newsList", { method: "GET" })
  )
}
export const useProcessList = () => {
  const client = useHttp()
  return useQuery<Process[]>(["process", {}], () =>
    client("process", { method: "GET" })
  )
}
export const useProductList = () => {
  const client = useHttp()
  return useQuery<Product[]>(["products", {}], () =>
    client("products", { method: "GET" })
  )
}
