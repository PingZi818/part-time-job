import Mock from 'mockjs2'
import { builder, getQueryParameters } from '../util'

const homeList = (options) => {
  const query = getQueryParameters(options)
  const bannerList = [
    {
      id: 1,
      title: '标题',
      bannerImgUrl: 'https://www.suzhou.gov.cn/szsrmzf/xhtml/static/2023/images/public/index_header_bg.png',
      url: 'https://www.suzhou.gov.cn/szsrmzf/xhtml/static/2023/images/public/index_header_bg.png'
    },
    {
      id: 2,
      title: '标题',
      bannerImgUrl: 'https://www.suzhou.gov.cn/szsrmzf/xhtml/static/2023/images/public/index_header_bg.png',
      url: 'https://www.suzhou.gov.cn/szsrmzf/xhtml/static/2023/images/public/index_header_bg.png'
    },
    {
      id: 3,
      title: '标题',
      bannerImgUrl: 'https://www.suzhou.gov.cn/szsrmzf/xhtml/static/2023/images/public/index_header_bg.png',
      url: 'https://www.suzhou.gov.cn/szsrmzf/xhtml/static/2023/images/public/index_header_bg.png'
    },
    {
      id: 4,
      title: '标题',
      bannerImgUrl: 'https://www.suzhou.gov.cn/szsrmzf/xhtml/static/2023/images/public/index_header_bg.png',
      url: 'https://www.suzhou.gov.cn/szsrmzf/xhtml/static/2023/images/public/index_header_bg.png'
    }
  ]
  const accountList = [
    {
      id: '1',
      title: '一次不用跑就能跨省办理业务',
      description:
        '优秀的员工，先进的技术，精良的设备，严格的管理是公司得以不断发展养大、产品能够赢得用户依靠的根本所在。“可靠、专业”是我们生产精神和服务信念。实现了公司业务的良性发展。我们用心参与推广以及行业交流活动',
      url: '',
      publishDate: '',
      year: '',
      month: '',
      day: ''
    },
    {
      id: '2',
      title: '一次不用跑就能跨省办理业务',
      description:
        '优秀的员工，先进的技术，精良的设备，严格的管理是公司得以不断发展养大、产品能够赢得用户依靠的根本所在。“可靠、专业”是我们生产精神和服务信念。实现了公司业务的良性发展。我们用心参与推广以及行业交流活动',
      url: '',
      publishDate: '',
      year: '',
      month: '',
      day: ''
    },
    {
      id: '3',
      title: '一次不用跑就能跨省办理业务',
      description:
        '优秀的员工，先进的技术，精良的设备，严格的管理是公司得以不断发展养大、产品能够赢得用户依靠的根本所在。“可靠、专业”是我们生产精神和服务信念。实现了公司业务的良性发展。我们用心参与推广以及行业交流活动',
      url: '',
      publishDate: '',
      year: '',
      month: '',
      day: ''
    }
  ]
  const newsList = [
    {
      id: '1',
      title: '一次不用跑就能跨省办理业务',
      description:
        '优秀的员工，先进的技术，精良的设备，严格的管理是公司得以不断发展养大、产品能够赢得用户依靠的根本所在。“可靠、专业”是我们生产精神和服务信念。实现了公司业务的良性发展。我们用心参与推广以及行业交流活动',
      url: '',
      publishDate: '',
      year: '2024',
      month: '02',
      day: '28'
    },
    {
      id: '2',
      title: '一次不用跑就能跨省办理业务',
      description:
        '优秀的员工，先进的技术，精良的设备，严格的管理是公司得以不断发展养大、产品能够赢得用户依靠的根本所在。“可靠、专业”是我们生产精神和服务信念。实现了公司业务的良性发展。我们用心参与推广以及行业交流活动',
      url: '',
      publishDate: '',
      year: '2024',
      month: '02',
      day: '29'
    },
    {
      id: '3',
      title: '一次不用跑就能跨省办理业务',
      description:
        '优秀的员工，先进的技术，精良的设备，严格的管理是公司得以不断发展养大、产品能够赢得用户依靠的根本所在。“可靠、专业”是我们生产精神和服务信念。实现了公司业务的良性发展。我们用心参与推广以及行业交流活动',
      url: '',
      publishDate: '',
      year: '2024',
      month: '03',
      day: '01'
    }
  ]
  let mockHomeList = []
  if (query.newsType === '1') {
    mockHomeList = newsList
  } else if (query.newsType === '2') {
    mockHomeList = accountList
  } else {
    mockHomeList = bannerList
  }
  return builder(mockHomeList)
}
const newsDetail = () => {
  const newsDetail = {
    id: '1',
    title: '一次不用跑就能跨省办理业务',
    content:
      '优秀的员工，先进的技术，精良的设备，严格的管理是公司得以不断发展养大、产品能够赢得用户依靠的根本所在。“可靠、专业”是我们生产精神和服务信念。实现了公司业务的良性发展。我们用心参与推广以及行业交流活动',
    url: '',
    releaseDate: '2014 02 01 20:00:20',
    publishDate: '',
    year: '2024',
    month: '02',
    day: '28'
  }
  return builder(newsDetail)
}
const serverDataList = () => {
  return builder([
    {
      id: '1',
      typeValue: '69',
      typeName: '新能源汽车'
    },
    {
      id: '2',
      typeValue: '2385',
      typeName: '充电站'
    },
    {
      id: '3',
      typeValue: '1963',
      typeName: '充电桩'
    },
    {
      id: '4',
      typeValue: '2',
      typeName: '充电枪'
    },
    {
      id: '5',
      typeValue: '3',
      typeName: '日均充电订单量'
    },
    {
      id: '6',
      typeValue: '3',
      typeName: '日均充电量'
    }
  ])
}

const policyList = () => {
  return builder([
    {
      policyType: '1',
      content:
        '近日，北京春雨听雷网络科技有限公司被北京市房山区市场监督管理局行政处罚及没收金额共计3.6万元。据多家媒体报道，春雨听雷即“网红鼻祖”papi酱一手创立的公司，旗下拥有MCN机构papitube。据北京市市场监督管理局官网显示，近日，北京春雨听雷网络科技有限公司（以下简称“春雨听雷网络公司”）因广告违法，被北京市房山区市场监督管理局罚款1.8万元、没收违法所得1.8万元。近日，北京春雨听雷网络科技有限公司被北京市房山区市场监督管理局行政处罚及没收金额共计3.6万元。据多家媒体报道，春雨听雷即“网红鼻祖”papi酱一手创立的公司，旗下拥有MCN机构papitube。据北京市市场监督管理局官网显示，近日，北京春雨听雷网络科技有限公司（以下简称“春雨听雷网络公司”）因广告违法，被北京市房山区市场监督管理局罚款1.8万元、没收违法所得1.8万元。近日，北京春雨听雷网络科技有限公司被北京市房山区市场监督管理局行政处罚及没收金额共计3.6万元。据多家媒体报道，春雨听雷即“网红鼻祖”papi酱一手创立的公司，旗下拥有MCN机构papitube。据北京市市场监督管理局官网显示，近日，北京春雨听雷网络科技有限公司（以下简称“春雨听雷网络公司”）因广告违法，被北京市房山区市场监督管理局罚款1.8万元、没收违法所得1.8万元。'
    },
    {
      policyType: '2',
      content:
        '近日，北京春雨听雷网络科技有限公司被北京市房山区市场监督管理局行政处罚及没收金额共计3.6万元。据多家媒体报道，春雨听雷即“网红鼻祖”papi酱一手创立的公司，旗下拥有MCN机构papitube。据北京市市场监督管理局官网显示，近日，北京春雨听雷网络科技有限公司（以下简称“春雨听雷网络公司”）因广告违法，被北京市房山区市场监督管理局罚款1.8万元、没收违法所得1.8万元。近日，北京春雨听雷网络科技有限公司被北京市房山区市场监督管理局行政处罚及没收金额共计3.6万元。据多家媒体报道，春雨听雷即“网红鼻祖”papi酱一手创立的公司，旗下拥有MCN机构papitube。据北京市市场监督管理局官网显示，近日，北京春雨听雷网络科技有限公司（以下简称“春雨听雷网络公司”）因广告违法，被北京市房山区市场监督管理局罚款1.8万元、没收违法所得1.8万元。近日，北京春雨听雷网络科技有限公司被北京市房山区市场监督管理局行政处罚及没收金额共计3.6万元。据多家媒体报道，春雨听雷即“网红鼻祖”papi酱一手创立的公司，旗下拥有MCN机构papitube。据北京市市场监督管理局官网显示，近日，北京春雨听雷网络科技有限公司（以下简称“春雨听雷网络公司”）因广告违法，被北京市房山区市场监督管理局罚款1.8万元、没收违法所得1.8万元。'
    },
    {
      policyType: '3',
      content:
        '近日，北京春雨听雷网络科技有限公司被北京市房山区市场监督管理局行政处罚及没收金额共计3.6万元。据多家媒体报道，春雨听雷即“网红鼻祖”papi酱一手创立的公司，旗下拥有MCN机构papitube。据北京市市场监督管理局官网显示，近日，北京春雨听雷网络科技有限公司（以下简称“春雨听雷网络公司”）因广告违法，被北京市房山区市场监督管理局罚款1.8万元、没收违法所得1.8万元。近日，北京春雨听雷网络科技有限公司被北京市房山区市场监督管理局行政处罚及没收金额共计3.6万元。据多家媒体报道，春雨听雷即“网红鼻祖”papi酱一手创立的公司，旗下拥有MCN机构papitube。据北京市市场监督管理局官网显示，近日，北京春雨听雷网络科技有限公司（以下简称“春雨听雷网络公司”）因广告违法，被北京市房山区市场监督管理局罚款1.8万元、没收违法所得1.8万元。近日，北京春雨听雷网络科技有限公司被北京市房山区市场监督管理局行政处罚及没收金额共计3.6万元。据多家媒体报道，春雨听雷即“网红鼻祖”papi酱一手创立的公司，旗下拥有MCN机构papitube。据北京市市场监督管理局官网显示，近日，北京春雨听雷网络科技有限公司（以下简称“春雨听雷网络公司”）因广告违法，被北京市房山区市场监督管理局罚款1.8万元、没收违法所得1.8万元。'
    },
    {
      policyType: '4',
      content:
        '近日，北京春雨听雷网络科技有限公司被北京市房山区市场监督管理局行政处罚及没收金额共计3.6万元。据多家媒体报道，春雨听雷即“网红鼻祖”papi酱一手创立的公司，旗下拥有MCN机构papitube。据北京市市场监督管理局官网显示，近日，北京春雨听雷网络科技有限公司（以下简称“春雨听雷网络公司”）因广告违法，被北京市房山区市场监督管理局罚款1.8万元、没收违法所得1.8万元。近日，北京春雨听雷网络科技有限公司被北京市房山区市场监督管理局行政处罚及没收金额共计3.6万元。据多家媒体报道，春雨听雷即“网红鼻祖”papi酱一手创立的公司，旗下拥有MCN机构papitube。据北京市市场监督管理局官网显示，近日，北京春雨听雷网络科技有限公司（以下简称“春雨听雷网络公司”）因广告违法，被北京市房山区市场监督管理局罚款1.8万元、没收违法所得1.8万元。近日，北京春雨听雷网络科技有限公司被北京市房山区市场监督管理局行政处罚及没收金额共计3.6万元。据多家媒体报道，春雨听雷即“网红鼻祖”papi酱一手创立的公司，旗下拥有MCN机构papitube。据北京市市场监督管理局官网显示，近日，北京春雨听雷网络科技有限公司（以下简称“春雨听雷网络公司”）因广告违法，被北京市房山区市场监督管理局罚款1.8万元、没收违法所得1.8万元。'
    },
    {
      policyType: '5',
      content:
        '近日，北京春雨听雷网络科技有限公司被北京市房山区市场监督管理局行政处罚及没收金额共计3.6万元。据多家媒体报道，春雨听雷即“网红鼻祖”papi酱一手创立的公司，旗下拥有MCN机构papitube。据北京市市场监督管理局官网显示，近日，北京春雨听雷网络科技有限公司（以下简称“春雨听雷网络公司”）因广告违法，被北京市房山区市场监督管理局罚款1.8万元、没收违法所得1.8万元。近日，北京春雨听雷网络科技有限公司被北京市房山区市场监督管理局行政处罚及没收金额共计3.6万元。据多家媒体报道，春雨听雷即“网红鼻祖”papi酱一手创立的公司，旗下拥有MCN机构papitube。据北京市市场监督管理局官网显示，近日，北京春雨听雷网络科技有限公司（以下简称“春雨听雷网络公司”）因广告违法，被北京市房山区市场监督管理局罚款1.8万元、没收违法所得1.8万元。近日，北京春雨听雷网络科技有限公司被北京市房山区市场监督管理局行政处罚及没收金额共计3.6万元。据多家媒体报道，春雨听雷即“网红鼻祖”papi酱一手创立的公司，旗下拥有MCN机构papitube。据北京市市场监督管理局官网显示，近日，北京春雨听雷网络科技有限公司（以下简称“春雨听雷网络公司”）因广告违法，被北京市房山区市场监督管理局罚款1.8万元、没收违法所得1.8万元。'
    }
  ])
}

const productList = () => {
  return builder([
    {
      id: '1',
      title: '新春走基层',
      description: '新春走基层',
      imgUrl:
        'https://www.suzhou.gov.cn/szsrmzf/syztzl/202211/85c5da5ae44b490a93c7254651c5e24c/images/8660d2b9ba4145b88241df2e1ac3e6d2.png'
    },
    {
      id: '2',
      title: 'title2',
      description: '新春走基层',
      imgUrl:
        'https://www.suzhou.gov.cn/szsrmzf/syztzl/202312/72a8153666c44c658223433b1919d007/images/b67b947e09fd46d19f171dde6cdf6acf.png'
    },
    {
      id: '3',
      title: 'title3',
      description: '新春走基层',
      imgUrl:
        'https://www.suzhou.gov.cn/szsrmzf/syztzl/202206/bd0738c210f1485ba3d58bac8a595c58/images/19af9ae021104aac81098ddd5154e1f3.png'
    },
    {
      id: '4',
      title: 'title4',
      description: '新春走基层',
      imgUrl:
        'https://www.suzhou.gov.cn/szsrmzf/syztzl/202211/85c5da5ae44b490a93c7254651c5e24c/images/8660d2b9ba4145b88241df2e1ac3e6d2.png'
    }
  ])
}

Mock.mock(/\/Sys_Parameter\/getParameterList/, 'get', serverDataList)
Mock.mock(/\/App_News\/getNewsPaging/, 'get', homeList)
Mock.mock(/\/App_News\/getNewsInfo/, 'get', newsDetail)
Mock.mock(/\/App_Product\/getProductPaging/, 'get', productList)
Mock.mock(/\/App_Product\/getProductInfo/, 'get', productList)
Mock.mock(/\/App_Policy\/getPolicyList/, 'get', policyList)
