<template>
  <div>
    <div class="company-entry-container">
      <div class="entry-container">
        <div class="process-list-box">
          <div class="common-entry-title-box">
            <span class="common-entry-title-text">入驻流程</span>
          </div>
          <div class="process-list">
            <div
              class="process-item-container"
              v-for="(process, i) in processList"
              :key="process.id"
            >
              <div class="process-item">
                <div :class="i === processList.length - 1 ?'process-dot no-line' : 'process-dot'">
                  第{{ numberToChinese(i + 1) }}步
                </div>
                <div class="process-description">
                  <p class="step-name">
                    {{ process.stepTitle }}
                  </p>
                  <p class="time-coverage">{{ process.description }}</p>
                  <span>{{ process.secondDescription }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right-operation">
          <a-button
            class="operation-btn"
            type="primary"
            @click="onclick(regUrl)"
          >企业注册</a-button>
          <a-button
            class="operation-btn"
            type="primary"
            @click="onclick(loginUrl)"
          >系统登录</a-button>
          <a-button
            class="operation-btn"
            type="primary"
            @click="onclick(downAppUrl)"
          >APP下载</a-button>
          <div class="qr-code">

          </div>
        </div>
      </div>
    </div>
    <div class="company-entry-notice-container">
      <div class="common-entry-title-box">
        <span class="common-entry-title-text">入驻须知</span>
      </div>
      <div class="content-container">
        <p
          class="content-inner"
          v-html="needKnow"
        >
        </p>
      </div>
    </div>
    <div class="company-entry-rule-container">
      <div class="common-entry-title-box">
        <span class="common-entry-title-text">入驻政策</span>
      </div>
      <div class="content-container">
        <p
          class="content-inner"
          v-html="needPolicy"
        >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { getServerDataList, getPolicyList } from '@/api/home'
export default {
  name: 'Company',
  data() {
    return {
      regUrl: '', // 注册地址
      loginUrl: '', // 登录地址
      downAppUrl: '', // app下载地址
      needKnow: '', // 入驻须知
      needPolicy: '', // 入驻政策
      processList: []
    }
  },
  mounted() {
    this.getServerData()
    this.getPolicyData()
    this.getProcessData()
  },
  methods: {
    numberToChinese: (num) => {
      const units = ['', '十', '百', '千', '万', '十万', '百万', '千万', '亿']
      const digits = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九']
      const result = String(num).replace(/./g, function (digit, index, array) {
        return digits[Number(digit)] + units[array.length - index - 1]
      })
      return result
    },
    getServerData() {
      const req = { codes: ['RegUrl', 'LoginUrl', 'DownAppUrl'] }
      getServerDataList(req).then((res) => {
        // 给注册地址、登录地址、app下载地址赋值
        if (res.data !== undefined && res.data !== null) {
          res.data.forEach((item, index) => {
            switch (item.typeCode) {
              case 'RegUrl':
                this.regUrl = item.typeValue
                break
              case 'LoginUrl':
                this.loginUrl = item.typeValue
                break
              case 'DownAppUrl':
                this.downAppUrl = item.typeValue
                break
            }
          })
        }
      })
    },
    getPolicyData() {
      const req = { policyTypes: ['1', '2'] }
      getPolicyList(req).then((res) => {
        // 给入驻须知、入驻政策赋值
        if (res.data !== undefined && res.data !== null) {
          res.data.forEach((item, index) => {
            switch (item.policyType) {
              case '1':
                this.needKnow = item.content
                break
              case '2':
                this.needPolicy = item.content
                break
            }
          })
        }
      })
    },
    getProcessData() {
      this.processList = [
        {
          id: 'process-1',
          stepTitle: '线下建联',
          description: '运营商线下提交资料',
          secondDescription: '平台运营方审核纸质材料'
        },
        {
          id: 'process-2',
          stepTitle: '开通账户',
          description: '为运营商开通账户',
          secondDescription: '为运营商在一码通平台开通账户'
        },
        {
          id: 'process-3',
          stepTitle: '运营商资料填报',
          description: '运营商登录系统填报资料',
          secondDescription: '运营商登录一码通平台填写资料'
        },
        {
          id: 'process-4',
          stepTitle: '平台审核',
          description: '对运营商资料审核',
          secondDescription: '经运管、区块、市工信审核后完成入驻'
        }
      ]
    },
    onclick(url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/views/home/components/styles/entry-process.css';
.common-entry-title-box {
  position: relative;
  margin-bottom: 40px;
  height: 30px;
  overflow: hidden;
  text-align: center;
}
.common-entry-title-text {
  padding: 0 0 10px 0px;
  font-weight: 500;
  font-size: 23px;
  color: #060a10;
  line-height: 18px;
  :after {
    position: absolute;
    display: block;
    content: '';
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: 20px;
    height: 2px;
    background: #000000;
  }
}
.company-entry-container {
  width: 100%;
  color: #fff;
  background: url(@/assets/company-bg1.png) no-repeat center;
  background-size: cover;
}
.entry-container {
  display: flex;
  padding: 40px 0;
  margin: auto;
  width: 1200px;
  .process-list-box {
    flex: 1;
  }
}
.company-entry-notice-container {
  padding: 40px 0;
  width: 100%;
  min-height: 320px;
  color: #fff;
  background: url(@/assets/company-bg2.png) no-repeat center;
  background-size: cover;
}
.company-entry-rule-container {
  padding: 40px 0;
  width: 100%;
  min-height: 320px;
  color: #fff;
  background: url(@/assets/company-bg3.png) no-repeat center;
  background-size: cover;
}
.right-operation {
  width: 195px;
  .operation-btn {
    width: 100%;
    height: 38px;
    background: #386bcc;
    margin: auto;
    margin-bottom: 15px;
    display: block;
  }
}
.qr-code {
  width: 195px;
  height: 195px;
  background: url(@/assets/qrcode.png) no-repeat center;
  background-size: cover;
}
.content-container {
  margin: auto;
  width: 1200px;
  .content-inner {
    text-indent: 4ch;
    font-weight: 400;
    font-size: 14px;
    color: #060a10;
    line-height: 28px;
  }
}
</style>
