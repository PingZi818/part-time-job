<template>
  <div class="product-page">
    <a-breadcrumb>
      <a-breadcrumb-item><a href="/">首页</a></a-breadcrumb-item>
      <a-breadcrumb-item><a href="/product/list">产品列表</a></a-breadcrumb-item>
    </a-breadcrumb>
    <a-input-search
      placeholder="请输入关键词搜索产品"
      style="width: 425px; height: 35px; margin-top: 20px;"
      v-model="filterKey"
      @search="onSearch"
    />
    <div class="product-list-container">
      <div class="product-box-list">
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
          :data-source="productList"
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
        <div
          class="pagination-box"
          v-show="productList.length > 0"
        >
          <a-pagination
            :defaultPageSize="pageSize"
            :total="total"
            :default-current="current"
            :show-total="total => `共 ${total} 条`"
            @change="onChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
import { Pagination } from 'ant-design-vue'
import { getProductList } from '@/api/home'
export default {
  name: 'Product',
  components: {
    'a-pagination': Pagination
  },
  data() {
    return {
      loading: false,
      productList: [],
      pageSize: 10,
      current: 1,
      filterKey: '',
      total: 0
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    onSearch() {
      this.getList()
    },
    getList() {
      this.loading = true
      const req = { filterKey: this.filterKey, pageSize: this.pageSize, current: this.current }
      getProductList(req).then((res) => {
        this.loading = false
        this.productList = res.rows
        this.total = res.total
      })
    },
    handleViewDetail(id) {
      this.$router.push('/product/detail/' + id)
    },
    onChange(page, pageSize) {
      this.current = page
      this.pageSize = pageSize
      this.getList()
    }
  }
}
</script>
  <style lang="less" scoped>
.product-page {
  margin: auto;
  padding-top: 50px;
  width: 1200px;
  min-height: calc(100vh - 259px);
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
    margin-top: 20px;
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
  .product-list .product-item .product-item-box {
    border: 1px solid #e3e3e3;
    background: #f2f3f5;
    box-shadow: 0px 3px 11px 1px rgba(0, 0, 0, 0.06);
  }
  .product-list .product-item .product-item-box .img-box {
    height: 185px;
  }
  .product-list .product-item .product-item-box .title-text {
    width: 100%;
    padding: 10px;
    text-align: center;
    background: #f2f3f5;
    font-weight: 500;
    font-size: 14px;
    color: #060a10;
  }
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
  .product-box-list {
    display: flex;
    flex-direction: column;
    .pagination-box {
      padding-top: 20px;
      text-align: right;
    }
  }
}
</style>
