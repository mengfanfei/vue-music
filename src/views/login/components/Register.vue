<template>
  <div class="content">
    <input v-model="phone" type="tel" class="input" placeholder="手机号" maxlength="11" @blur="inputBlur" />
    <input v-model="password" type="password" class="input" placeholder="密码" />
    <div class="captcha">
      <input v-model="captcha" type="text" class="input input-captcha" placeholder="验证码" />
      <button class="btn-captcha" @click="getCaptcha">获取验证码</button>
    </div>
    <input class="input-btn" :class="{opacity1: opacity1}" type="button" value="注册" @click="register"/>
  </div>
</template>

<script>
import { Dialog } from 'vant'
import { checkPhone, sendCaptcha, verifyCaptcha, registerPhone } from 'api/index.js'
import { phone11 } from 'utils/validate.js'
export default {
  name: 'Register',
  components: {

  },
  data() {
    return {
      phone: '',
      password: '',
      captcha: ''
    }
  },
  computed: {
    opacity1() {
      return this.phone && this.password && this.nickname && this.captcha
    },
    nickname() {
      return `p_${this.phone}`
    }
  },
  methods: {
    async inputBlur() {
      const flag = await phone11(this.phone)
      if (flag) {
        const res = await checkPhone(this.phone)
        if (res.exist !== -1) {
          Dialog.alert({
            message: '手机号已注册，可直接登录'
          }).then(() => {
            // on close
          })
        }
      }
    },
    async getCaptcha() {
      const flag = await phone11(this.phone)
      if (flag) {
        const res = await sendCaptcha(this.phone)
        console.log(res)
      }
    },
    async register() {
      try {
        const res = await verifyCaptcha(this.phone, this.captcha)
        const data = await registerPhone(this.phone, this.password, this.nickname, this.captcha)
        console.log(res, data)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/form.scss';
.content {
  .captcha{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .input-captcha {
      width: 50%;
    }
    .btn-captcha {
      color: #fff;
      background-color: #07c160;
      border: 1px solid #07c160;
      min-width: 120px;
      height: 60px;
      padding: 0 20px;
      font-size: 24px;
      margin-bottom: 40px;
    }
  }
}
</style>