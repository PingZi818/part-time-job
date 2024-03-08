// eslint-disable-next-line
import { UserLayout, CommonLayout, BlankLayout } from '@/layouts'

const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: CommonLayout,
    meta: { title: '首页' },
    redirect: '/home',
    children: [
      // 首页
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/Index'),
        meta: { title: '首页', keepAlive: true }
      },
      // 企业入驻
      {
        path: '/company',
        name: 'company',
        component: () => import('@/views/company/Index.vue'),
        meta: { title: '企业入驻', keepAlive: true }
      },
      {
        path: '/solution',
        name: 'solution',
        component: () => import('@/views/solution/Index'),
        meta: { title: '解决方案', keepAlive: true }
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about/Index'),
        meta: { title: '关于我们', keepAlive: true }
      },
      {
        path: '/news/',
        name: 'news',
        meta: { title: '新闻列表' },
        redirect: '/news/list',
        component: RouteView,
        children: [
          {
            meta: { title: '新闻列表', keepAlive: true },
            path: '/news/list',
            name: 'list',
            component: () => import('@/views/news/List.vue')
          },
          {
            meta: { title: '新闻详情', keepAlive: true },
            path: '/news/detail/:id(\\d+)',
            name: 'detail',
            component: () => import('@/views/news/Detail.vue')
          }
        ]
      },
      {
        path: '/accountList/',
        name: 'accountList',
        meta: { title: '公告列表' },
        redirect: '/accountList/list',
        component: RouteView,
        children: [
          {
            meta: { title: '公告列表', keepAlive: true },
            path: '/accountList/list',
            name: 'list',
            component: () => import('@/views/accountList/List.vue')
          },
          {
            meta: { title: '公告详情', keepAlive: true },
            path: '/accountList/detail/:id(\\d+)',
            name: 'detail',
            component: () => import('@/views/accountList/Detail.vue')
          }
        ]
      },
      {
        path: '/doc',
        name: 'doc',
        component: () => import('@/views/doc/List'),
        meta: { title: '文件列表', keepAlive: true }
      },
      {
        path: '/product/',
        name: 'product',
        meta: { title: '产品列表' },
        redirect: '/product/list',
        component: RouteView,
        children: [
          {
            meta: { title: '产品列表', keepAlive: true },
            path: '/product/list',
            name: 'list',
            component: () => import('@/views/product/List.vue')
          },
          {
            meta: { title: '产品详情', keepAlive: true },
            path: '/product/detail/:id(\\d+)',
            name: 'detail',
            component: () => import('@/views/product/Detail.vue')
          }
        ]
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }
]
