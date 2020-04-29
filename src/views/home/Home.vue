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
    <div class="options">
      <div class="options-item" v-for="(item, index) in options" :key="index">
        <svg-icon :icon-class="item.icon" class-name="item-img"></svg-icon>
        <span>{{item.title}}</span>
      </div>
    </div>
    <div class="module-title">
      <div>为你精挑细选</div>
      <div class="module-btn">查看更多</div>
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
// import { Swipe, SwipeItem } from 'vant'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import NavBar from 'components/navbar'
import { getBanner, getPlayList } from 'api'
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
      },
      options: [
        { title: '每日推荐', icon: 'mrtj' },
        { title: '歌单', icon: 'playlist' },
        { title: '排行榜', icon: 'leaderboard' },
        { title: '电台', icon: 'radiostation' },
        { title: '直播', icon: 'live' }
      ],
      playlistOption: {
        freeMode: true,
        spaceBetween: 10,
        slidesPerView: 'auto' // 'auto'则自动根据slides的宽度来设定数量
      },
      playList: []
    }
  },
  created() {
    getBanner().then(res => {
      this.banners = res.banners
    }).catch(err => {
      alert(JSON.stringify(err))
    })
    getPlayList(6).then(res => {
      this.playList = res.playlists
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
  .options {
    display: flex;
    justify-content: space-between;
    padding: 0 32px;
    box-sizing: border-box;
    .options-item {
      color: #656565;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 22px;
      .item-img {
        height: 92px;
        width: 92px;
        // background: $theme-color;
        border-radius: 50%;
        margin-bottom: 20px;
      }
    }
  }
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
}

</style>
