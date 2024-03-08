<template>
  <div class="entry-process-container">
    <div class="entry-process-content">
      <div class="common-title-box">
        <span class="common-title-text">入驻流程</span>
      </div>
      <div class="process-list">
        <div
          class="process-item-container"
          v-for="(process, i) in list"
          :key="process.id"
        >
          <div class="process-item">
            <div :class="i === list.length - 1 ?'process-dot no-line' : 'process-dot'">
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
  </div>
</template>

<script>
export default {
  name: 'EntryProcess',
  data() {
    return {
      list: [
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
    }
  },
  mounted() {},
  methods: {
    numberToChinese: (num) => {
      const units = ['', '十', '百', '千', '万', '十万', '百万', '千万', '亿']
      const digits = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九']
      const result = String(num).replace(/./g, function (digit, index, array) {
        return digits[Number(digit)] + units[array.length - index - 1]
      })
      return result
    }
  }
}
</script>

<style>
@import './styles/entry-process.css';
.entry-process-container {
  margin: auto;
  width: 100%;
  background: #fff;
  margin-bottom: 40px;
}
.entry-process-content {
  padding: 40px 0;
  margin: auto;
  width: 1200px;
}
</style>
