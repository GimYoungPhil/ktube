import API from '@/api'
import {
  REQUEST_FANCAM_NEWEST,
  RECEIVE_FANCAM_NEWEST,
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
  [REQUEST_FANCAM_NEWEST] (state) {
  },
  [RECEIVE_FANCAM_NEWEST] (state, { result }) {
    const { contents, ...pagination } = result
    state.contents = [ ...parseVideos(contents) ]
    state.pagination = { ...pagination }
  },
}

const actions = {
  fetchFanCamNewest ({ commit, state }, { page }) {
    commit(REQUEST_FANCAM_NEWEST)
    API.getNewestFanCams({ page })
      .then(result => commit(RECEIVE_FANCAM_NEWEST, { result }))
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
