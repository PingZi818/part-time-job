<template>
  <div>
    <div class="platform-introduce-container">
      <div class="common-entry-title-box">
        <span class="common-entry-title-text">平台介绍</span>
      </div>
      <div class="platform-introduce-content-container">
        <div class="content-inner">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;苏州吴都能源发展有限公司于2016年11月，由苏州市政府国资委以苏国资改〔2016〕144号文批准成立。由苏州市能源发展集团有限公司和苏州燃气集团有限责任公司共同出资成立，注册资本1.7亿元，是苏州市属国资独资商业一类新能源企业。</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公司业务涵盖分布式清洁能源（光伏、天然气）、电动汽车充电桩、合同能源管理等项目的投资、建设和运营管理，并布局配售电业务、清洁能源运维管理等产业链延伸业务。 公司拥有丰富的融资渠道和雄厚的资金实力。母公司具有3A信用评级，可以获得四大行及其他各大商业银行充足的信贷支持，集团公司资金、集团内保理业务和融资租赁业务等叠加助力，共同构筑起吴都能源持续稳步健康发展的坚实保障。</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;吴都能源公司按照战略发展规划的总体部署，坚持以市场为导向，以客户为根本，以技术为支撑，以创新为手段，围绕城市能源的综合开发和清洁利用，进行稳健的布局和高质量的发展，努力打造在城市能源保障、供应和服务领域拥有核心竞争力的现代化企业。</p>
        </div>
      </div>
      <img
        width="741"
        height="417"
        src="@/assets/introduce-video.png"
        alt=""
      />
    </div>
    <div class="contract-us-container">
      <div class="common-entry-title-box">
        <span class="common-entry-title-text">联系方式</span>
      </div>
      <div class="contract-us-content-container">
        <div class="contract-item">
          <img
            src="@/assets/address.png"
            alt=""
          />
          <p class="label-name">地址</p>
          <span class="description">苏州市杨枝塘路116号城投大厦2F</span>
        </div>
        <div class="contract-item">
          <img
            src="@/assets/email.png"
            alt=""
          />
          <p class="label-name">邮箱</p>
          <span class="description">szwdny@163.com</span>
        </div>
        <div class="contract-item">
          <img
            src="@/assets/phone.png"
            alt=""
          />
          <p class="label-name">联系电话</p>
          <div class="description">
            <p> 电话：0512-65238372</p>
            <p> 传真：(0512)65232095</p>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
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
.platform-introduce-container {
  text-align: center;
  padding: 40px 0;
  width: 100%;
  min-height: 320px;
  background: url('@/assets/intro-bg.png') no-repeat center;
  background-size: cover;
}
.platform-introduce-content-container {
  text-align: left;
  margin: auto;
  width: 1200px;
  margin-bottom: 40px;
  .content-inner {
    font-weight: 400;
    font-size: 14px;
    color: #060a10;
    line-height: 27px;
  }
}
.contract-us-container {
  padding: 40px 0;
  width: 100%;
  min-height: 320px;
  background: #fff;
}
.contract-us-content-container {
  text-align: center;
  display: flex;
  justify-content: center;
  margin: auto;
  width: 1200px;
  gap: 53px;
  .contract-item {
    padding: 30px;
    width: 272px;
    min-height: 155px;
    background: #ffffff;
    border: 1px solid #e3e3e3;
    .label-name {
      font-weight: 500;
      font-size: 15px;
      color: #060a10;
      line-height: 30px;
    }
    .description {
      font-weight: 500;
      font-size: 12px;
      color: #747474;
      line-height: 14px;
    }
  }
}
</style>
