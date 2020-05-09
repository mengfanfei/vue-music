<template>
  <div>
    <div class="navbar" :class="[className, {fixedClass: fixed}]" :style="{backgroundColor: bgColor}">
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
  name: 'NavBar',
  props: {
    className: {
      type: String,
      default: ''
    },
    fixed: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: '#ffffff'
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/css/navbar.scss';
.navbar {
  height: $navbarHeight;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  text-align: center;
  .left, .right {
    width: $navbarSideWidth;
    // display: flex;
    // justify-content: center;
    // align-items: center;
  }
  .center {
    flex: 1;
  }
}
.no-fixed {
  height: $navbarHeight;
  width: 100vw;
  background: transparent;
}
.fixedClass {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5001;
}
</style>