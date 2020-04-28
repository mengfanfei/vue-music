<template>
  <div id="home">
    <nav-bar :fixed="true">
      <div slot="left">
        <svg-icon icon-class="microphone" class-name="icon-left" />
      </div>
      <div slot="center">
        <input type="text" class="input">
      </div>
    </nav-bar>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="item in banners" :key="item.bannerId">
        <img :src="item.pic" alt="" class="banner-img">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
// import { Swipe, SwipeItem } from 'vant'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import NavBar from 'components/navbar'
import { getBanner } from 'api'
export default {
  name: 'Home',
  components: {
    NavBar,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      banners: [],
      swiperOption: {
        initialSlide: 1, // 因为loop所以第一个应该为1
        loop: true,
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  created() {
    getBanner().then(res => {
      this.banners = res.banners
    }).catch(err => {
      alert(JSON.stringify(err))
    })
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/css/index.scss';
#home {
  font-size: 32px;
  height: 2000px;
  .icon-left {
    font-size: 46px;
    color: #000000;
  }
  .input {
    height: 72px;
    width: 100%;
    background: #f7f7f7;
    border: none;
    padding: 0 20px;
    box-sizing: border-box;
    border-radius: 36px;
  }
  .banner-img {
    height: 268px;
    width: 686px;
    border-radius: 10px;
  }
  .swiper {
    margin: 32px 0;
    .swiper-slide {
      text-align: center;
    }
    /deep/.swiper-pagination-bullet {
      width: 12px;
      height: 12px;
    }
    /deep/.swiper-pagination-bullet-active {
      background: $theme-color;
    }
  }
}

</style>
