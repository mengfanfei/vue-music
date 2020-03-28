<template>
  <div id="app">
    <router-view />
    <tabbar v-model="active" active-color="#fe3e31" inactive-color="#969696" route safe-area-inset-bottom>
      <tabbar-item replace to="/home" icon="music-o">发现</tabbar-item>
      <tabbar-item replace to="/video" icon="video-o">视频</tabbar-item>
      <tabbar-item replace to="/personal" icon="contact">我的</tabbar-item>
      <tabbar-item replace to="/square" icon="friends-o">云村</tabbar-item>
      <tabbar-item replace to="/settings" icon="setting-o">账号</tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
  name: 'App',
  components: {
    Tabbar,
    TabbarItem
  },
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/base.scss";
</style>
