import Vue from 'vue'
import Vuex from 'vuex'
import videoNewest from './modules/videoNewest'
import videoBest from './modules/videoBest'
import fanCamNewest from './modules/fanCamNewest'
import fanCamBest from './modules/fanCamBest'
import karaokeNewest from './modules/karaokeNewest'
import karaokeBest from './modules/karaokeBest'
import idolNewest from './modules/idolNewest'
import idolBest from './modules/idolBest'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    videoNewest,
    videoBest,
    fanCamNewest,
    fanCamBest,
    karaokeNewest,
    karaokeBest,
    idolNewest,
    idolBest,
  },
  strict: process.env.NODE_ENV !== 'production',
})
