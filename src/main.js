import Vue from 'vue'
import App from './App.vue'
import './assets/css/global.styl'


import './utils/rem'
import router from './router'
import store from './store'
import Fw from './freamwork'
Vue.use(Fw)
import {
  homeFilter
} from './filters/index'
import {
  Button
} from 'mint-ui'

Vue.use(Button)

for (var key in homeFilter) {
  Vue.filter(key, homeFilter[key])
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')