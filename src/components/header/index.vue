<template>
  <div>
    <div class="header" :class="[className, {fixedClass: fixed}]">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="center">
        <slot name="center"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
    <div v-if="fixed" class="no-fixed"></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    className: {
      type: String,
      default: ''
    },
    fixed: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 88px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background: #fff;
  font-size: 32px;
  .left, .right {
    width: 115px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .center {
    width: 520px;
  }
}
.no-fixed {
  height: 88px;
  width: 100vw;
}
.fixedClass {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5001;
}
</style>