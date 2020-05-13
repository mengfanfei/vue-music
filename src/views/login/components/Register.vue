<template>
  <div class="content">
    <input v-model="phone" type="tel" class="input" placeholder="手机号" />
    <input v-model="password" type="password" class="input" placeholder="密码" />
    <input v-model="nickname" type="text" class="input" placeholder="昵称" />
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      phone: '',
      password: '',
      nickname: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/form.scss';
</style>