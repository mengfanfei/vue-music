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
    component: Home
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import('views/video/Video.vue')
  },
  {
    path: '/personal',
    name: 'Personal',
    component: () => import('views/personal/Personal.vue')
  },
  {
    path: '/square',
    name: 'Square',
    component: () => import('../views/square/Square.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('views/settings/Settings.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
