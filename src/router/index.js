import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      keepAlive: true,
      scrollTop: 0
    }
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import('views/video/Video.vue'),
    meta: {
      keepAlive: true,
      scrollTop: 0
    }
  },
  {
    path: '/personal',
    name: 'Personal',
    component: () => import('views/personal/Personal.vue'),
    meta: {
      keepAlive: true,
      scrollTop: 0
    }
  },
  {
    path: '/square',
    name: 'Square',
    component: () => import('views/square/Square.vue'),
    meta: {
      keepAlive: true,
      scrollTop: 0
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('views/settings/Settings.vue'),
    meta: {
      keepAlive: true,
      scrollTop: 0
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('views/login/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
