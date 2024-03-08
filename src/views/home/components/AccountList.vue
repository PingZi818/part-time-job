<template>
  <a-card
    class="account-box"
    :loading="loading"
    :bordered="false"
  >
    <div slot="title">公告</div>
    <a
      slot="extra"
      href="/accountList/list"
    >更多</a>
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
      accountList: [],
      loading: false
    }
  },
  mounted() {
    this.getAccounts()
  },
  methods: {
    getAccounts() {
      this.loading = true
      const req = { newsType: '2', pageSize: 3 }
      getNewsList(req).then((res) => {
        this.loading = false
        this.accountList = res.rows
      })
    },
    handleViewDetail(id) {
      this.$router.push('/accountList/detail/' + id)
    }
  }
}
</script>

<style scoped>
@import './styles/account-list.less';
.account-content-inner {
  max-height: calc(18 * 2); /* 根据行数计算最大高度 */
  overflow: hidden;
}
</style>
