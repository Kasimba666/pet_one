import Vue from 'vue'
import router from './router'
import store from './store'

import App from './App.vue'

Vue.config.productionTip = false
import "@/assets/css/petstyle.scss"
// import './assets/petstyle.scss'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
