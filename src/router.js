import Vue from 'vue'
import Router from 'vue-router'
import VideoView from '@/views/VideoView.vue'
import FanCamView from '@/views/FanCamView.vue'
import KaraokeView from '@/views/KaraokeView.vue'
import IdolView from '@/views/IdolView.vue'
// import WatchView from '@/views/WatchView.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/',        name: 'video',   component: VideoView },
    { path: '/fanCam',  name: 'fanCam',  component: FanCamView },
    { path: '/karaoke', name: 'karaoke', component: KaraokeView },
    { path: '/idols',    name: 'idol',   component: IdolView },
    // { path: '/watch/:uid', component: WatchView },
  ]
})

export default router
