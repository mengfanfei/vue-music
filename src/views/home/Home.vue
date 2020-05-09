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
    <home-swiper ref="homeSwiper" v-if="banners.length" :banners="banners"></home-swiper>  <!-- 增加v-if：：： 解决Vue中Swiper循环轮播后默认显示最后一张的问题, 以及解决获取不到swiper对象的问题-->
    <div class="options">
      <div class="options-item" v-for="(item, index) in options" :key="index">
        <svg-icon :icon-class="item.icon" class-name="item-img"></svg-icon>
        <span>{{item.title}}</span>
      </div>
    </div>
    <home-playlist :playList="playList" title="为你精挑细选" btn-name="查看更多"></home-playlist>
    <home-songlist :songList="songList" title="好听的华语歌曲精选" btn-name="播放全部"></home-songlist>
    <home-playlist :playList="playList2" title="累了 就在音乐里放空" btn-name="查看更多"></home-playlist>
  </div>
</template>

<script>
// import { Swipe, SwipeItem } from 'vant'
import NavBar from 'components/navbar'
import HomeSwiper from 'views/home/components/HomeSwiper'
import HomePlaylist from 'views/home/components/HomePlaylist'
import HomeSonglist from 'views/home/components/HomeSonglist'
import { getBanner, getPlayList } from 'api'
export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    HomePlaylist,
    HomeSonglist
  },
  data() {
    return {
      banners: [],
      options: [
        { title: '每日推荐', icon: 'mrtj' },
        { title: '歌单', icon: 'playlist' },
        { title: '排行榜', icon: 'leaderboard' },
        { title: '电台', icon: 'radiostation' },
        { title: '直播', icon: 'live' }
      ],
      playList: [],
      playList2: [],
      songList: []
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
    getPlayList(6, '华语').then(res => {
      this.playList2 = res.playlists
    })
  },
  mounted() {

  },
  activated() {
    this.setScrollTop()
  },
  beforeRouteLeave (to, from, next) {
    from.meta.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    next()
  },
  deactivated() {

  },
  methods: {
    // 设置位置不变
    setScrollTop() {
      document.documentElement.scrollTop = this.$route.meta.scrollTop
      document.body.scrollTop = this.$route.meta.scrollTop
    }
  }
}
</script>

<style lang="scss" scoped>
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
}
</style>
