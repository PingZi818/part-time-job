import request from '@/utils/request'

const api = {
  fileList: '/App_Doc/getDocPaging'
}

export default api

export function getFileList(parameter) {
  return request({
    url: api.fileList,
    method: 'get',
    params: parameter
  })
}
