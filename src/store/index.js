import Vue from 'vue'
import Vuex from 'vuex'
import newestVideos from './modules/newestVideos'
import bestVideos from './modules/bestVideos'
import fanCamVideos from './modules/fanCamVideos'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    newestVideos,
    bestVideos,
    fanCamVideos,
  },
  strict: process.env.NODE_ENV !== 'production',
})
