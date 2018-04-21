import Vue from 'vue'
import Router from 'vue-router'
import Foo from '@/views/Foo.vue'
import Bar from '@/views/Bar.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]
})

export default router
