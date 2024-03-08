<template>
  <div class="carousel-box">
    <a-carousel autoplay>
      <!-- <div> -->
      <img
        v-for="item in list"
        :key="item.id"
        height="320px"
        width="100%"
        :src="item.bannerImgUrl"
        :alt="item.title"
      />
      <!-- </div> -->
    </a-carousel>
  </div>
</template>

<script>
import { getNewsList } from '@/api/home'
import { Carousel } from 'ant-design-vue'
export default {
  name: 'Banner',
  components: {
    'a-carousel': Carousel
  },
  data() {
    return {
      list: []
    }
  },
  created() {},
  mounted() {
    this.getBanners()
  },
  methods: {
    getBanners() {
      const req = { newsType: '3', pageSize: 6 }
      getNewsList(req)
        .then((res) => {
          this.list = res.rows
        })
        .catch((err) => this.requestFailed(err))
    },
    requestFailed(err) {
      this.isLoginError = true
      this.$notification['error']({
        message: '错误',
        description: ((err.response || {}).data || {}).message || '请求出现错误，请稍后再试',
        duration: 4
      })
    }
  }
}
</script>
<style scoped>
@import './styles/banner.css';
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 320px;
  line-height: 320px;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
.ant-carousel >>> .slick-dots-bottom {
  bottom: 84px;
}
.ant-carousel >>> .slick-dots {
  height: fit-content;
}
.ant-carousel >>> .slick-dots li {
  width: fit-content;
  height: fit-content;
}
.ant-carousel >>> .slick-dots li button {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  opacity: 1;
}
.ant-carousel >>> .slick-dots li.slick-active button {
  width: 55px;
  height: 16px;
  background: #386bcc;
  border-radius: 8px;
}
.ant-carousel >>> .slick-dots li.slick-active {
  width: 55px;
  height: 16px;
  background: #386bcc;
  border-radius: 8px;
}
</style>
