import Vue from 'vue'
import router from './router/'
import store from './store/'
import './registerServiceWorker'
import './plugins/vuetify'
import './theme/default.sass'

import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import { Model } from 'vue-api-query'
Model.$http = axios
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
})
Vue.prototype.__ = (key, ...parrams) => {
  return app.$vuetify.lang.translator(key, ...parrams)
}

app.$mount('#app')
