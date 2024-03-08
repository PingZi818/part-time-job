import Mock from 'mockjs2'
import { builder } from '../util'

const fileList = () => {
  return builder([
    {
      title: '一次不用跑就能跨省办理业务 拷贝',
      time: 1497160610259
    },
    {
      title: '一次不用跑就能跨省办理业务 拷贝',
      time: 1497160610259
    },
    {
      title: '一次不用跑就能跨省办理业务 拷贝 3',
      time: 1497160610259
    },
    {
      title: '一次不用跑就能跨省办理业务 拷贝 4',
      time: 1497160610259
    },
    {
      title: '一次不用跑就能跨省办理业务 拷贝 3',
      time: 1497160610259
    },
    {
      title: '一次不用跑就能跨省办理业务 拷贝 4',
      time: 1497160610259
    }
  ])
}
Mock.mock(/\/App_Doc\/getDocPaging/, 'get', fileList)
