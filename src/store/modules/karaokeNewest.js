import API from '@/api'
import {
  REQUEST_KARAOKE_NEWEST,
  RECEIVE_KARAOKE_NEWEST,
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
  [REQUEST_KARAOKE_NEWEST] (state) {
  },
  [RECEIVE_KARAOKE_NEWEST] (state, { result }) {
    const { contents, ...pagination } = result
    state.contents = [ ...parseVideos(contents) ]
    state.pagination = { ...pagination }
  },
}

const actions = {
  fetchKaraokeNewest ({ commit, state }, { page }) {
    commit(REQUEST_KARAOKE_NEWEST)
    API.getNewestKaraokes({ page })
      .then(result => commit(RECEIVE_KARAOKE_NEWEST, { result }))
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
