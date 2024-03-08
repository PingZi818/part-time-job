<template>
  <div class="news-page">
    <a-breadcrumb>
      <a-breadcrumb-item><a href="/">首页</a></a-breadcrumb-item>
      <a-breadcrumb-item><a href="/news/list">新闻列表</a></a-breadcrumb-item>
    </a-breadcrumb>
    <a-input-search
      placeholder="请输入关键词搜索新闻"
      style="width: 425px; height: 35px; margin-top: 20px;"
      v-model="filterKey"
      @search="onSearch"
    />
    <a-card
      class="news-box"
      :loading="loading"
      :bordered="false"
    >
      <div class="news-box-list">
        <div
          class="news-item"
          v-for="news in newsList"
          :key="news.id"
          @click="handleViewDetail(news.id)"
        >
          <div class="time-inner-box">
            <p>
              {{ news.month }}/{{ news.day }}
            </p>
            <div class="year-value">{{ news.year }}</div>
          </div>
          <div class="news-content-box">
            <div class="news-title-inner">{{ news.title }}</div>
            <p
              class="news-content-inner"
              v-html="news.description"
            >
            </p>
          </div>
        </div>
        <div
          class="pagination-box"
          v-show="newsList.length > 0"
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
  name: 'News',
  components: {
    'a-pagination': Pagination
  },
  data() {
    return {
      loading: false,
      newsList: [],
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
      const req = { newsType: '1', filterKey: this.filterKey, pageSize: this.pageSize, current: this.current }
      getNewsList(req).then((res) => {
        this.loading = false
        this.newsList = res.rows
        this.total = res.total
      })
    },
    handleViewDetail(id) {
      this.$router.push('/news/detail/' + id)
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
.news-page {
  margin: auto;
  padding-top: 50px;
  width: 1200px;
  min-height: calc(100vh - 259px);
  .news-box {
    width: 100%;
    margin-top: 15px;
    box-shadow: 0px 4px 15px 1px rgba(0, 0, 0, 0.06);
    border: 1px solid #e3e3e3;
    background: #f2f3f5;
  }
  .news-box .news-box-list {
    display: flex;
    flex-direction: column;
    gap: 24px;
    .pagination-box {
      padding-top: 20px;
      text-align: right;
    }
  }
  .news-box .news-box-list .news-item {
    display: flex;
    flex-wrap: nowrap;
    min-height: 64px;
    gap: 15px;
    cursor: pointer;
    &:hover {
      .news-title-inner {
        color: #0772ed;
      }
      .time-inner-box {
        border-right: solid 1px #0772ed;
      }
      .news-content-inner {
        color: #060a10;
      }
    }
  }
  .news-box .news-box-list .news-item .time-inner-box {
    padding: 10px 20px 10px 0;
    border-right: solid 1px #e3e3e3;
  }
  .news-box .news-box-list .news-item .time-inner-box p {
    font-weight: bold;
    font-size: 23px;
    color: #0772ed;
    line-height: 18px;
  }
  .news-box .news-box-list .news-item .time-inner-box .year-value {
    font-weight: bold;
    font-size: 14px;
    color: #747474;
    line-height: 18px;
    text-align: right;
    margin-top: 4px;
  }
  .news-box .news-box-list .news-item .news-content-box {
    flex: 1;
    font-weight: 400;
    font-size: 11px;
    color: #747474;
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .news-box .news-box-list .news-item .news-title-inner {
    font-weight: 500;
    font-size: 14px;
    color: #060a10;
    line-height: 30px;
  }
  .news-box .news-box-list .news-item .news-content-inner {
    height: 40px;
    font-weight: 400;
    font-size: 12px;
    color: #747474;
    line-height: 20px;
  }
}
</style>
