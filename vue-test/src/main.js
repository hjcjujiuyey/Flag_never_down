import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Button,Cell, CellGroup,Tag,Tabbar, TabbarItem  } from 'vant';
Vue.use(Button).use(Cell).use(CellGroup).use(Tag).use(Tabbar).use(TabbarItem);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
