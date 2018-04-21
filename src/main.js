import Vue from 'vue'
import App from './views/App.vue'
import 'bootswatch/dist/superhero/bootstrap.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
