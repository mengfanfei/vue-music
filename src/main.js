import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import 'normalize.css' // 样式重置
// 1px 边框 使用vant内置样式 van-hairline-XX
// 文字省略，动画使用vant内置样式
import '@/icons' // icon

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
