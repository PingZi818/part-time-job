import request from '@/utils/request'
import qs from 'qs'
const api = {
  serverDataList: '/Sys_Parameter/getParameterList',
  newsList: '/App_News/getNewsPaging',
  newsInfo: '/App_News/getNewsInfo',
  productList: '/App_Product/getProductPaging',
  productInfo: '/App_Product/getProductInfo',
  policyList: '/App_Policy/getPolicyList'
}

export default api

export function getServerDataList(parameter) {
  return request({
    url: api.serverDataList,
    method: 'get',
    params: parameter,
    paramsSerializer: (params) => {
      return qs.stringify(params, { indices: false })
    }
  })
}
export function getNewsList(parameter) {
  return request({
    url: api.newsList,
    method: 'get',
    params: parameter
  })
}
export function getNewsInfo(parameter) {
  return request({
    url: api.newsInfo,
    method: 'get',
    params: parameter
  })
}
export function getProductList(parameter) {
  return request({
    url: api.productList,
    method: 'get',
    params: parameter
  })
}
export function getProductInfo(parameter) {
  return request({
    url: api.productInfo,
    method: 'get',
    params: parameter
  })
}
export function getPolicyList(parameter) {
  return request({
    url: api.policyList,
    method: 'get',
    params: parameter,
    paramsSerializer: (params) => {
      return qs.stringify(params, { indices: false })
    }
  })
}
