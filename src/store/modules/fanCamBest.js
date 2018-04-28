import API from '@/api'
import {
  REQUEST_FANCAM_BEST,
  RECEIVE_FANCAM_BEST,
} from '@/store/mutation-types'
import { parseVideos } from '@/util/parser'

const state = {
  contents: [],
  pagination: {
    page: 1,
    startPage: 1,
    endPage: 5,
    hasPrevious: false,
    hasNext: true,
    p: {},
    total: 1017,
    totalPages: 85,
  },
}

const getters = {
}

const mutations = {
  [REQUEST_FANCAM_BEST] (state) {
  },
  [RECEIVE_FANCAM_BEST] (state, { result }) {
    const { contents, ...paginations } = result
    state.contents = [ ...parseVideos(contents) ]
    state.pagination = { ...paginations }
  },
}

const actions = {
  fetchFanCamBest ({ commit, state }, { page }) {
    commit(REQUEST_FANCAM_BEST)
    API.getBestFanCams({ page })
      .then(result => commit(RECEIVE_FANCAM_BEST, { result }))
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
