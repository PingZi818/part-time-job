<template>
  <div class="doc-page">
    <a-breadcrumb>
      <a-breadcrumb-item><a href="/">首页</a></a-breadcrumb-item>
      <a-breadcrumb-item><a href="/doc">文档列表</a></a-breadcrumb-item>
    </a-breadcrumb>
    <a-input-search
      placeholder="请输入关键词搜索文档"
      style="width: 425px; height: 35px; margin-top: 20px;"
      v-model="filterKey"
      @search="onSearch"
    />
    <div class="content-box">
      <div class="doc-box-list">
        <a-list
          class="file-list-box"
          :loading="loading"
          item-layout="horizontal"
          :data-source="fileList||[]"
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
        <div
          class="pagination-box"
          v-show="fileList.length > 0"
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
import { getFileList } from '@/api/solution'
export default {
  name: 'DocList',
  components: {
    'a-pagination': Pagination
  },
  data() {
    return {
      loading: false,
      fileList: [],
      pageSize: 10,
      current: 1,
      filterKey: '',
      total: 0,
      excelIcon: require('@/assets/icons/excel.png'),
      pdfIcon: require('@/assets/icons/pdf.png'),
      pptIcon: require('@/assets/icons/ppt.png'),
      wordIcon: require('@/assets/icons/word.png')
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
        this.fileList = res.rows
        this.total = res.total
      })
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
.doc-page {
  margin: auto;
  padding-top: 50px;
  width: 1200px;
  min-height: calc(100vh - 259px);
  background: #f2f3f5;
  .doc-box-list {
    display: flex;
    flex-direction: column;
    .pagination-box {
      padding-top: 20px;
      text-align: right;
    }
  }
  .content-box {
    margin: auto;
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
  }
}
</style>
