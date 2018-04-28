import Vue from 'vue'
import store from './store'
import router from './router'
import App from './views/App.vue'
import 'bootswatch/dist/superhero/bootstrap.css'
import './main.css'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
