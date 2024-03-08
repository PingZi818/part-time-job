<template>
  <div class="account-page">
    <a-breadcrumb>
      <a-breadcrumb-item><a href="/">首页</a></a-breadcrumb-item>
      <a-breadcrumb-item>公告列表</a-breadcrumb-item>
    </a-breadcrumb>
    <a-input-search
      placeholder="请输入关键词搜索公告"
      style="width: 425px; height: 35px; margin-top: 20px;"
      v-model="filterKey"
      @search="onSearch"
    />
    <a-card
      class="account-box"
      :loading="loading"
      :bordered="false"
    >
      <div class="account-box-list">
        <div
          class="account-item"
          v-for="account in accountList"
          :key="account.id"
          @click="handleViewDetail(account.id)"
        >
          <p class="dot-inner-box"></p>
          <div class="account-content-box">
            <div class="account-title-inner">{{ account.title }}</div>
            <p
              class="account-content-inner"
              v-html="account.description"
            >
            </p>
          </div>
        </div>
        <div
          class="pagination-box"
          v-show="accountList.length > 0"
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
    </a-card>
  </div>
</template>

<script>
import { Pagination } from 'ant-design-vue'
import { getNewsList } from '@/api/home'
export default {
  name: 'AccountList',
  components: {
    'a-pagination': Pagination
  },
  data() {
    return {
      loading: false,
      accountList: [],
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
      const req = { newsType: '2', filterKey: this.filterKey, pageSize: this.pageSize, current: this.current }
      getNewsList(req).then((res) => {
        this.loading = false
        this.accountList = res.rows
        this.total = res.total
      })
    },
    handleViewDetail(id) {
      this.$router.push('/accountList/detail/' + id)
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
.account-page {
  margin: auto;
  padding-top: 50px;
  width: 1200px;
  min-height: calc(100vh - 259px);
  .account-box {
    width: 100%;
    margin-top: 15px;
    background: #f2f3f5;
    box-shadow: 0px 4px 15px 1px rgba(0, 0, 0, 0.06);
    border: 1px solid #e3e3e3;
  }
  .account-box .account-box-list {
    display: flex;
    flex-direction: column;
    gap: 24px;
    .pagination-box {
      padding-top: 20px;
      text-align: right;
    }
  }
  .account-box .account-box-list .account-item {
    display: flex;
    flex-wrap: nowrap;
    min-height: 64px;
    gap: 15px;
    cursor: pointer;
    &:hover {
      .account-title-inner {
        color: #0772ed;
      }
      .time-inner-box {
        border-right: solid 1px #0772ed;
      }
      .account-content-inner {
        color: #060a10;
      }
    }
  }
  .account-box .account-box-list .account-item .account-content-box {
    flex: 1;
    font-weight: 400;
    font-size: 11px;
    color: #747474;
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .account-box .account-box-list .account-item .account-title-inner {
    font-weight: 500;
    font-size: 14px;
    color: #060a10;
    line-height: 30px;
  }
  .account-box .account-box-list .account-item .account-content-inner {
    height: 40px;
    font-weight: 400;
    font-size: 12px;
    color: #747474;
    line-height: 20px;
  }

  .account-box .account-box-list .account-item .dot-inner-box {
    margin-top: 10px;
    display: inline-block;
    position: relative;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    border: 1px solid #0772ed;
    background: rgba(7, 114, 237, 0);
  }
  .account-box .account-box-list .account-item .dot-inner-box::after {
    display: block;
    position: absolute;
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #0772ed;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
