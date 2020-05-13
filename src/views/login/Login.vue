<template>
  <div id="login">
    <button class="btn" @click="register('手机号登录')">手机号登录</button>
    <button class="btn" @click="register('邮箱登录')">邮箱登录</button>
    <button class="btn" @click="register('手机号注册')">手机号注册</button>
    <transition name="login">
      <login-detail v-if="detailShow" :title="detailTitle" @goBack="goBack"></login-detail>
    </transition>
  </div>
</template>

<script>
import LoginDetail from 'views/login/components/LoginDetail'
export default {
  name: 'Login',
  components: {
    LoginDetail
  },
  data() {
    return {
      detailShow: false,
      detailTitle: ''
    }
  },
  methods: {
    register(val) {
      this.detailShow = true
      this.detailTitle = val
    },
    goBack() {
      this.detailShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/css/index.scss';
.login-enter-active, .login-leave-active {
  transition: all .4s ease;
}
.login-enter, .login-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translate(100%, 0);
}
#login {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 100;
  width: 100vw;
  background: $theme-color;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .btn {
    height: 90px;
    width: 558px;
    line-height: 90px;
    border-radius: 45px;
    color: $theme-color;
    background: #ffffff;
    box-sizing: border-box;
    margin-bottom: 36px;
    font-size: 36px;
    font-weight: bold;
    border: 0;
  }
}
</style>