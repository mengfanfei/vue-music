<template>
  <swiper ref="mySwiper" class="swiper" :options="swiperOption">
    <swiper-slide v-for="item in banners" :key="item.bannerId">
      <img :src="item.pic" alt="" class="banner-img">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      swiperOption: {
        initialSlide: 0,
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
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  activated() {
    if (this.swiper) {
      this.swiper.autoplay.start()
    }
  },
  deactivated() {
    if (this.swiper) {
      this.swiper.autoplay.stop()
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import 'assets/css/index.scss';
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
</style>