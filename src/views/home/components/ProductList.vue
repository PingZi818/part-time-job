<template>
  <div class="product-list-container">
    <div class="common-title-box">
      <span class="common-title-text">产品展示</span>
    </div>
    <a-list
      class="product-list"
      :grid="{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 4,
        xxl: 4,
      }"
      :data-source="productListData"
    >
      <a-list-item
        class="product-item"
        slot="renderItem"
        slot-scope="item"
      >
        <div
          class="product-item-box"
          @click="handleViewDetail(item.id)"
        >
          <div class="img-box">
            <a
              class="skipAutoFix"
              :title="item.title"
            >
              <img
                class="skipAutoFix"
                :src="item.imgUrl"
                :alt="item.title"
              >
            </a>
            <img />
          </div>
          <p class="title-text">{{ item.title }}</p>
        </div>
      </a-list-item>
    </a-list>
    <a-button
      class="vew-more-btn"
      type="primary"
      @click="toProductList"
    >查看更多</a-button>
  </div>
</template>

<script>
import { getProductList } from '@/api/home'
export default {
  name: 'ProductList',
  data() {
    return {
      productListData: []
    }
  },
  mounted() {
    this.getProducts()
  },
  methods: {
    getProducts() {
      const req = { pageSize: 8 }
      getProductList(req).then((res) => {
        this.productListData = res.rows
      })
    },
    toProductList() {
      this.$router.push({ path: '/product/list' })
    },
    handleViewDetail(id) {
      this.$router.push('/product/detail/' + id)
    }
  }
}
</script>

<style lang="less" scoped>
@import './styles/product-list.css';
.common-title-box {
  margin-bottom: 20px;
  overflow: hidden;
}
.common-title-text {
  padding: 0 0 10px 0px;
  font-weight: 500;
  font-size: 23px;
  color: #060a10;
  line-height: 18px;
}
.product-list-container {
  margin: auto;
  width: 1200px;
  margin-bottom: 40px;
  .product-item-box .img-box {
    .skipAutoFix {
      display: block;
      overflow: hidden;
      height: 100%;
      width: 100%;
    }
    img {
      margin: auto;
      transition: all 0.3s ease-in-out 0s;
      &:hover {
        transform: scale(1.05);
      }
    }
  }
}
.vew-more-btn {
  width: 161px;
  height: 41px;
  background: #386bcc;
  margin: auto;
  margin-top: 20px;
  display: block;
}
</style>
