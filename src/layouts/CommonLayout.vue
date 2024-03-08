<template>
  <a-layout>
    <div class="layout-header-top">
      <div class="demo-logo-content">
        <p class="logo-text">苏州市新能源汽车充电设施门户</p>
        <p class="date-text">{{ new Date()| getDay }} {{ new Date()|getWeek }}</p>
      </div>
    </div>
    <a-layout-header>
      <a-menu
        class="menu-box-container"
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['/home']"
        :default-open-keys="['/']"
        :selected-keys="[current]"
        @click="handleClick"
      >
        <a-menu-item
          v-for="nav in navItems"
          :key="nav.key"
        >{{ nav.label }} </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content class="layout-content-box"><router-view /></a-layout-content>
    <a-layout-footer>
      <p>
        版权所有:苏州市工业和信息化局 主办单位:苏州市工业和信息化局
        承办单位:苏州吴都能源发展有限公司
      </p>
      <p>苏ICP备00000000号 苏公网安备000000000000号 网站标识码:00000000000</p>
    </a-layout-footer>
  </a-layout>
</template>

<script>
import moment from 'moment'
export default {
  name: 'CommonLayout',
  data() {
    return {
      current: '/home',
      navItems: [
        { key: '/home', label: '首页' },
        { key: '/company', label: '企业入驻' },
        { key: '/solution', label: '解决方案' },
        { key: '/about', label: '关于我们' }
      ]
    }
  },
  filters: {
    getWeek(date) {
      const week = moment(date).day()
      switch (week) {
        case 1:
          return '周一'
        case 2:
          return '周二'
        case 3:
          return '周三'
        case 4:
          return '周四'
        case 5:
          return '周五'
        case 6:
          return '周六'
        case 0:
          return '周日'
      }
    },
    getDay(date) {
      return moment(date).format('YYYY年MM月DD日')
    }
  },
  mounted() {
    this.$router.onReady(() => {
      if (this.current === this.$route.path) return
      this.current = this.$route.path
    })
  },
  methods: {
    handleClick(e) {
      this.current = e.key
      this.$router.push(
        { path: e.key },
        () => {},
        () => {}
      )
    }
  }
}
</script>

<style lang="less" scoped>
.layout-content-box {
  overflow: auto;
  background: #f2f3f5;
}
.layout-header-top {
  width: 100%;
  background: #f2f3f5;
  .demo-logo-content {
    width: 1200px;
    margin: auto;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    line-height: 64px;
    p {
      margin-bottom: 0;
    }
  }
  .demo-logo-content .logo-text {
    font-weight: 400;
    font-size: 23px;
    color: #141111;
  }
  .demo-logo-content .date-text {
    font-weight: 400;
    font-size: 15px;
    color: #060a10;
    line-height: 30px;
  }
}
.ant-layout {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.ant-layout-header {
  width: 100%;
  display: flex;
  align-items: center;
  background: #386bcc;
}
.ant-layout-footer {
  text-align: center;
  height: 120px;
  padding: 40px;
  font-weight: 400;
  font-size: 14px;
  color: #eaeaea;
  line-height: 23px;
  background: #242a37;
}
.ant-menu {
  margin: auto;
  width: 1200px;
  min-width: 0px;
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  background: #386bcc;
}
.ant-menu-item {
  width: 162px;
  padding: 22px 0;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
}
.ant-menu.ant-menu-dark .ant-menu-item-selected,
.ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
  background-color: #386bcc;
}
.ant-menu-item.ant-menu-item-selected {
  border-bottom: 3px solid #fff;
}
</style>
