import Vue from 'vue'
import VueRouter from 'vue-router'
import indexWrap from '../components/indexWrap'
import detailWrap from '../components/detailWrap'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: '/',
    component: indexWrap
  },{
    path: '/detailWrap',
    name: '/detailWrap',
    component: detailWrap
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
