import Vue from 'vue'
import Router from 'vue-router'
import TheVideo from '@/views/TheVideo.vue'
import TheFanCam from '@/views/TheFanCam.vue'
import TheKaraoke from '@/views/TheKaraoke.vue'
import TheIdolRank from '@/views/TheIdolRank.vue'
import TheIdolVideo from '@/views/TheIdolVideo.vue'
import TheWatch from '@/views/TheWatch.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/',                name: 'video',     component: TheVideo },
    { path: '/fancam',          name: 'fancam',    component: TheFanCam },
    { path: '/karaoke',         name: 'karaoke',   component: TheKaraoke },
    { path: '/idols/',          name: 'idolRank',  component: TheIdolRank },
    { path: '/idols/:idolKey',  name: 'idolVideo', component: TheIdolVideo },
    { path: '/watch/:videoKey', name: 'watch',     component: TheWatch },
  ]
})

export default router
