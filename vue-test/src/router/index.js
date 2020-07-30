import Vue from 'vue'
import VueRouter from 'vue-router'
import indexWrap from '../components/indexWrap'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: '/',
    component: indexWrap
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
