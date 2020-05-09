<template>
  <div>
    <div class="module-title">
      <div v-if="title">{{title}}</div>
      <slot v-else name="title"></slot>
      <div class="module-btn">{{btnName}}</div>
    </div>
    <swiper class="playlist" :options="playlistOption">
      <swiper-slide v-for="item in playList" :key="item.id">
        <img :src="item.coverImgUrl" alt="" class="playlist-img">
        <div class="name">{{item.name}}</div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'HomePlaylist',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    btnName: {
      type: String,
      default: ''
    },
    playList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      playlistOption: {
        freeMode: true,
        spaceBetween: 10,
        slidesPerView: 'auto' // 'auto'则自动根据slides的宽度来设定数量
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.module-title {
  padding: 0 30px 0 34px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #323234;
  font-size: 34px;
  margin: 58px 0 24px 0;
  font-weight: bold;
  .module-btn {
    height: 52px;
    line-height: 52px;
    text-align: center;
    padding: 0 22px;
    box-sizing: border-box;
    font-size: 24px;
    font-weight: normal;
    border: 2px solid #e6e6e6;
    border-radius: 26px;
  }
}
.playlist {
  padding: 0 30px 0 32px;
  .swiper-slide {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 210px !important;
    .playlist-img {
      height: 210px;
      border-radius: 10px;
    }
    .name {
      margin: 12px 0;
      font-size: 24px;
      line-height: 1.5;
      color: #474747;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      overflow:hidden;
      /*! autoprefixer: off */
      -webkit-box-orient: vertical;
    }
  }
}
</style>