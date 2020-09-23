import Vue from 'vue'
import App from './App.vue'
import router from './routers/router'

// Import Axios
import api from './utils/api.js'

// Import ElementUI
import './plugins/element.js'
import './theme/index.css'

Vue.prototype.$axios = api;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
