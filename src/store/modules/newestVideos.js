import API from '@/api'
import {
  REQUEST_NEWEST_VIDEOS,
  RECEIVE_NEWEST_VIDEOS,
} from '@/store/mutation-types'

const state = {
  list: {},
  detail: {},
}

const getters = {}

const mutations = {
  [REQUEST_NEWEST_VIDEOS] (state) {
    state.list = {}
    state.detail = {}
  },
  [RECEIVE_NEWEST_VIDEOS] (state, { idolKey, idol }) {
    state.list[idolKey] = idol
    state.detail = idol
  },
}

const actions = {
  fetchNewestVideos ({ commit }, idolKey) {
    commit(REQUEST_NEWEST_VIDEOS)
    API.getIdolDetail({ idolKey })
      .then(idol => commit(RECEIVE_NEWEST_VIDEOS, { idolKey, idol }))
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
