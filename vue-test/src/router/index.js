import Vue from 'vue'
import VueRouter from 'vue-router'
import indexWrap from '../components/indexWrap'
import detailWrap from '../components/detailWrap'
import createWrap from '../components/createWrap'

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
  },{
    path: '/createWrap',
    name: '/createWrap',
    component: createWrap
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
