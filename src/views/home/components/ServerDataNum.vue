<template>
  <a-card
    class="serverData-num-box"
    :loading="loading"
    :bordered="false"
  >
    <div class="nav-item-list">
      <div
        v-for="server in serverDataList"
        class="nav-item"
        :key="server.id"
      >
        <p class="serverData-name">{{ server.typeName }}</p>
        <span class="serverData-firstRemark">{{ server.typeValue }}</span>
        <span class="serverData-secondRemark">{{ server.typeName==='新能源汽车'?'量':(server.typeName==='日均充电量'?'kw':'个') }}</span>
      </div>
    </div>
  </a-card>
</template>

<script>
import { getServerDataList } from '@/api/home'
export default {
  name: 'ServerDataNum',
  data() {
    return {
      loading: false,
      serverDataList: []
    }
  },
  mounted() {
    this.getServerData()
  },
  methods: {
    getServerData() {
      const req = { codes: ['CarCount', 'StationCount', 'PileCount', 'GunCount', 'AvgOrder', 'AvgChargeVolume'] }
      this.loading = true
      getServerDataList(req).then((res) => {
        this.loading = false
        this.serverDataList = res.data
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import './styles/server-num.css';
</style>
