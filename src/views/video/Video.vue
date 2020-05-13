<template>
  <div id="video">
    <nav-bar :fixed="true">
      <div slot="left">
        <svg-icon icon-class="video" class-name="icon-left" />
      </div>
      <div slot="center">
        <input type="text" class="input">
      </div>
    </nav-bar>
    <swiper :options="tabOptions">
      <swiper-slide></swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import NavBar from 'components/navbar'
import { mapState } from 'vuex'
export default {
  name: 'Video',
  components: {
    NavBar,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      tabOptions: {
        freeMode: true,
        slidesPerView: 'auto' // 'auto'则自动根据slides的宽度来设定数量
      }
    }
  },
  computed: {
    ...mapState({
      account: 'account'
    })
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (!vm.account) {
        vm.$router.replace(`/login?redirect=${to.path}`)
      }
    })
  }
}
</script>

<style lang="scss" scoped>
#video {
  .icon-left {
    font-size: 60px;
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
}
</style>