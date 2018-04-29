import Vue from 'vue'
import Vuex from 'vuex'
import videoNewest from './modules/videoNewest'
import videoBest from './modules/videoBest'
import fanCamNewest from './modules/fanCamNewest'
import fanCamBest from './modules/fanCamBest'
import karaokeNewest from './modules/karaokeNewest'
import karaokeBest from './modules/karaokeBest'
import idolList from './modules/idolList'
import idolVideoNewest from './modules/idolVideoNewest'
import idolVideoBest from './modules/idolVideoBest'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    videoNewest,
    videoBest,
    fanCamNewest,
    fanCamBest,
    karaokeNewest,
    karaokeBest,
    idolList,
    idolVideoNewest,
    idolVideoBest,
  },
  strict: process.env.NODE_ENV !== 'production',
})
