import Vue from 'vue'
import router from './router'
import store from './store'

import App from './App.vue'

Vue.config.productionTip = false
// import "@assets/petstyle.css"
// import './assets/petstyle.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
