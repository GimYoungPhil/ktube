import Vue from 'vue'
import Router from 'vue-router'
import TheVideo from '@/views/TheVideo.vue'
import TheFanCam from '@/views/TheFanCam.vue'
import TheKaraoke from '@/views/TheKaraoke.vue'
import IdolView from '@/views/IdolView.vue'
import WatchView from '@/views/WatchView.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/',                name: 'video',   component: TheVideo },
    { path: '/fancam',          name: 'fancam',  component: TheFanCam },
    { path: '/karaoke',         name: 'karaoke', component: TheKaraoke },
    { path: '/idol:idolKey',    name: 'idol',    component: IdolView },
    { path: '/watch/:videoKey', name: 'watch',   component: WatchView },
  ]
})

export default router
