import API from '@/api'
import {
  REQUEST_KARAOKE_BEST,
  RECEIVE_KARAOKE_BEST,
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
  [REQUEST_KARAOKE_BEST] (state) {
  },
  [RECEIVE_KARAOKE_BEST] (state, { result }) {
    const { contents, ...pagination } = result
    state.contents = [ ...parseVideos(contents) ]
    state.pagination = { ...pagination }
  },
}

const actions = {
  fetchKaraokeBest ({ commit, state }, { page }) {
    commit(REQUEST_KARAOKE_BEST)
    API.getBestKaraokes({ page })
      .then(result => commit(RECEIVE_KARAOKE_BEST, { result }))
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
