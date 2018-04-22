import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/views/AppHome.vue'
import AppBest from '@/views/AppBest.vue'
import AppFanCam from '@/views/AppFanCam.vue'
import AppIdols from '@/views/AppIdols.vue'
import Bar from '@/views/Bar.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', component: AppHome },
    { path: '/best', component: AppBest },
    { path: '/fanCam', component: AppFanCam },
    { path: '/idols', component: AppIdols },
    { path: '/bar', component: Bar }
  ]
})

export default router
