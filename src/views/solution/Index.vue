<template>
  <div class="solution-page">
    <div class="part-one">
      <div class="part-one-content">
        <div class="common-title-box">
          <span class="common-title-text">充电地图</span>
        </div>
        <iframe
          class="other-sys-map"
          src="https://map.baidu.com/@13441352,3657162,13z"
        >
        </iframe>
      </div>
    </div>
    <div class="part-two">
      <div class="content-box">
        <a-tabs
          size="large"
          :default-active-key="activeKey"
          @change="callback"
        >
          <a-tab-pane
            key="1"
            tab="管理方案指引"
          >
            <p
              class="text-content-inner"
              v-html="manage"
            ></p>
          </a-tab-pane>
          <a-tab-pane
            key="2"
            tab="系统接入指引"
            force-render
          >
            <p
              class="text-content-inner"
              v-html="join"
            > </p>
          </a-tab-pane>
          <a-tab-pane
            key="3"
            tab="协议说明"
          >
            <p
              class="text-content-inner"
              v-html="agreement"
            ></p>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
    <div class="part-three">
      <div class="content-box">
        <a-input-search
          placeholder="请输入关键词搜索文档"
          style="width: 425px; height: 35px;"
          v-model="filterKey"
          @search="onSearch"
        />
        <a-list
          class="file-list-box"
          :loading="loading"
          item-layout="horizontal"
          :data-source="data||[]"
        >
          <a-list-item
            slot="renderItem"
            slot-scope="item"
          >
            <a
              slot="actions"
              :href="item.url"
              target="blank"
            >下载</a>
            <a-list-item-meta :description="item.time">
              <a
                slot="title"
                style="cursor: default;"
              >{{ item.title }}</a>
              <a-avatar
                slot="avatar"
                shape="square"
                :src="item.icon"
              />
            </a-list-item-meta>
          </a-list-item>
        </a-list>
        <a-button
          class="vew-more-btn"
          type="primary"
          @click="toDocList"
        >查看更多</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getServerDataList, getPolicyList } from '@/api/home'
import { getFileList } from '@/api/solution'
export default {
  name: 'Solution',
  data() {
    return {
      activeKey: '1',
      loading: true,
      filterKey: '', // 文档过滤条件
      mapUrl: '', // 地图页面地址
      manage: '', // 管理方案指引
      join: '', // 系统接入指引
      agreement: '', // 协议说明
      data: [],
      excelIcon: require('@/assets/icons/excel.png'),
      pdfIcon: require('@/assets/icons/pdf.png'),
      pptIcon: require('@/assets/icons/ppt.png'),
      wordIcon: require('@/assets/icons/word.png')
    }
  },
  created() {},
  methods: {
    callback(key) {
      this.activeKey = key
    },
    onSearch() {
      this.getFileData()
    },
    getFileData() {
      this.loading = true
      const req = { filterKey: this.filterKey, pageSize: 6 }
      getFileList(req).then((res) => {
        this.loading = false
        res.rows.forEach((item, index) => {
          switch (item.fileType) {
            case 'docx':
            case 'doc':
              item.icon = this.wordIcon
              break
            case 'xlsx':
            case 'xls':
              item.icon = this.excelIcon
              break
            case 'pptx':
            case 'ppt':
              item.icon = this.pptIcon
              break
            case 'pdf':
              item.icon = this.pdfIcon
              break
          }
        })
        this.data = res.rows
      })
    },
    getServerData() {
      const req = { codes: ['MapUrl'] }
      getServerDataList(req).then((res) => {
        // 给注册地址、登录地址、app下载地址赋值
        if (res.data !== undefined && res.data !== null) {
          res.data.forEach((item, index) => {
            switch (item.typeCode) {
              case 'MapUrl':
                this.mapUrl = item.typeValue
                break
            }
          })
        }
      })
    },
    getPolicyData() {
      const req = { policyTypes: ['3', '4', '5'] }
      getPolicyList(req).then((res) => {
        // 给入驻须知、入驻政策赋值
        if (res.data !== undefined && res.data !== null) {
          res.data?.forEach((item, index) => {
            switch (item.policyType) {
              case '3': // 管理方案指引
                this.manage = item.content
                break
              case '4': // 系统接入指引
                this.join = item.content
                break
              case '5': // 协议说明
                this.agreement = item.content
                break
            }
          })
        }
      })
    },
    toDocList() {
      this.$router.push({ path: '/doc' })
    }
  },
  mounted() {
    this.getServerData()
    this.getPolicyData()
    this.getFileData()
  }
}
</script>

<style lang="less" scoped>
.solution-page {
  .part-one {
    width: 100%;
    height: 574px;
    background: url('@/assets/solution-bg1.png') no-repeat center;
    background-size: cover;
    .part-one-content {
      margin: auto;
      padding: 40px 0;
      width: 1200px;
      margin-bottom: 40px;
      .map-container {
        width: 100%;
        height: 100%;
      }
    }
  }
  .part-two {
    width: 100%;
    min-height: 369px;
    background: #fff;
    .content-box {
      margin: auto;
      padding: 40px 0;
      width: 1200px;
      margin-bottom: 40px;
      .text-content-inner {
        text-indent: 4ch;
        margin-top: 14px;
        font-weight: 400;
        font-size: 14px;
        color: #060a10;
        line-height: 28px;
      }
    }
  }
  .part-three {
    width: 100%;
    min-height: 686px;
    background: #f2f3f5;
    .content-box {
      margin: auto;
      padding: 40px 0;
      width: 1200px;
      margin-bottom: 40px;
      .file-list-box {
        margin-top: 16px;
        .ant-list-item-meta-title > a {
          font-weight: 400;
          color: #060a10;
        }
        .ant-list-item-meta-description {
          font-weight: 400;
          color: #747474;
        }
      }
      .file-list-box.ant-list-split .ant-list-item {
        padding: 13px 15px;
        background: #fff;
        margin-bottom: 15px;
      }
      .vew-more-btn {
        width: 161px;
        height: 41px;
        background: #386bcc;
        margin: auto;
        margin-top: 75px;
        display: block;
      }
    }
  }
}
.other-sys-map {
  width: 100%;
  height: 439px;
  border: 0px;
}
</style>
