import Vue from 'vue'
import App from './views/App.vue'
import router from './router'
import 'bootswatch/dist/superhero/bootstrap.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
