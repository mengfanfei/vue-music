<template>
  <div id="loginDetail">
    <navbar>
      <div slot="left" class="loginDetail-left">
        <icon name="arrow-left" @click="goBack" />
      </div>
      <div slot="center" class="center">
        <span>{{title}}</span>
      </div>
    </navbar>
    <component v-bind:is="currentComponent"></component>
  </div>
</template>

<script>
import navbar from 'components/navbar'
import { Icon } from 'vant'
import Register from './Register'
import EmailLogin from './EmailLogin'
import PhoneLogin from './PhoneLogin'
export default {
  name: 'LoginDetail',
  components: {
    navbar,
    Icon,
    Register,
    EmailLogin,
    PhoneLogin
  },
  props: {
    title: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    currentComponent() {
      return this.title.includes('注册') ? 'register' : this.title.includes('手机') ? 'phone-login' : 'email-login'
    }
  },
  methods: {
    goBack() {
      this.$emit('goBack')
    }
  }
}
</script>

<style lang="scss" scoped>
#loginDetail {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  z-index: 1;
  .loginDetail-left {
    display: flex;
    align-items: center;
    padding-left: 20px;
  }
  .center {
    font-size: 36px;
    font-weight: bold;
  }
}
</style>