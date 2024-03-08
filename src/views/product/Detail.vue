<template>
  <div class="product-detail-page">
    <a-breadcrumb>
      <a-breadcrumb-item><a href="/">首页</a></a-breadcrumb-item>
      <a-breadcrumb-item><a href="/product/List">产品列表</a></a-breadcrumb-item>
    </a-breadcrumb>
    <a-card
      class="product-box"
      :loading="loading"
      :bordered="false"
    >
      <div class="product-detail-content">
        <p class="title">{{ info.title }}</p>
        <span class="time">{{ info.releaseDate }}</span>
        <div class="line"></div>
        <div
          class="content"
          v-html="info.content"
        >
        </div>
        <div class="img"><img :src="info.imageUrl" /></div>
      </div>
    </a-card>
  </div>
</template>
    <script>
import { getProductInfo } from '@/api/home'
export default {
  name: 'ProductDetail',
  data() {
    return {
      loading: false,
      id: -1,
      info: {}
    }
  },
  mounted() {
    this.id = this.$route.params.id
    this.getDetail()
  },
  methods: {
    getDetail() {
      const req = { id: this.id }
      getProductInfo(req).then((res) => {
        this.loading = false
        this.info = res.data
        console.log(this.info)
      })
    }
  }
}
</script>
   <style lang="less" scoped>
.product-detail-page {
  margin: auto;
  padding-top: 50px;
  width: 1200px;
  min-height: calc(100vh - 259px);
  .product-box {
    width: 100%;
    padding: 15px;
    margin-top: 15px;
    margin-bottom: 120px;
    box-shadow: 0px 4px 15px 1px rgba(0, 0, 0, 0.06);
    border: 1px solid #e3e3e3;
    background: #f2f3f5;
  }
  .product-box .product-detail-content {
    display: flex;
    flex-direction: column;
    .title {
      font-weight: bold;
      font-size: 28px;
      color: #060a10;
      line-height: 36px;
    }
    .time {
      font-weight: 400;
      font-size: 14px;
      color: #858585;
      line-height: 36px;
    }
    .img {
      text-align: left;
      img {
        width: 25%;
      }
    }
    .line {
      width: 100%;
      height: 1px;
      background: #c5c5c5;
      margin-bottom: 25px;
    }
    .content {
      p {
        font-weight: 400;
        font-size: 16px;
        color: #060a10;
        line-height: 40px;
      }
      img {
        display: block;
        margin: auto;
        padding: 20px;
      }
    }
  }
}
</style>
