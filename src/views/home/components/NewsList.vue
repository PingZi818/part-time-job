<template>
  <a-card
    class="news-box"
    :loading="loading"
    :bordered="false"
  >
    <div slot="title">新闻</div>
    <a
      slot="extra"
      href="/news/list"
    >更多</a>
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
    </div>
  </a-card>
</template>

<script>
import { Ellipsis } from '@/components'
import { getNewsList } from '@/api/home'
export default {
  components: { Ellipsis },
  data() {
    return {
      loading: false,
      newsList: []
    }
  },
  mounted() {
    this.getNews()
  },
  methods: {
    getNews() {
      this.loading = true
      const req = { newsType: '1', pageSize: 3 }
      getNewsList(req).then((res) => {
        this.loading = false
        this.newsList = res.rows
      })
    },
    handleViewDetail(id) {
      this.$router.push('/news/detail/' + id)
    }
  }
}
</script>

<style>
@import './styles/news-list.less';
.news-content-inner {
  max-height: calc(18 * 2); /* 根据行数计算最大高度 */
  overflow: hidden;
}
</style>
