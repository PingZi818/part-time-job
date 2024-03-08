<template>
  <div class="home-page">
    <div class="home-header-nav-box">
      <BannerPart />
      <ServerDataNumPart />
    </div>
    <div class="notice-container">
      <AccountListPart />
      <NewsListPart />
    </div>
    <EntryProcessPart />
    <ProductListPart />
  </div>
</template>
<script>
import {
  BannerPart,
  ServerDataNumPart,
  AccountListPart,
  NewsListPart,
  EntryProcessPart,
  ProductListPart
} from '@/views/home/components'
export default {
  name: 'Home',
  components: {
    BannerPart,
    ServerDataNumPart,
    AccountListPart,
    NewsListPart,
    EntryProcessPart,
    ProductListPart
  }
}
</script>
<style lang="less" scoped>
.home-header-nav-box {
  position: relative;
  width: 100%;
  text-align: center;
  height: 320px;
  color: #fff;
  margin-bottom: 124px;
}
.notice-container {
  width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
  gap: 10px;
}
</style>
