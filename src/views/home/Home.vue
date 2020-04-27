<template>
  <div class="home">
    <Header :fixed="true">
      <div slot="left">
        <svg-icon icon-class="microphone" class-name="icon-left" />
      </div>
      <div slot="center">
        <input type="text" class="input">
      </div>
    </Header>
  </div>
</template>

<script>
import Header from 'components/header'
export default {
  name: 'Home',
  components: {
    Header
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  font-size: 32px;
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
}
</style>
