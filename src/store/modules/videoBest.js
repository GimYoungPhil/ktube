import API from '@/api'
import {
  REQUEST_VIDEO_BEST,
  RECEIVE_VIDEO_BEST,
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
  [REQUEST_VIDEO_BEST] (state) {
  },
  [RECEIVE_VIDEO_BEST] (state, { result }) {
    const { contents, ...pagination } = result
    state.contents = [ ...parseVideos(contents) ]
    state.pagination = { ...pagination }
  },
}

const actions = {
  fetchVideoBest ({ commit, state }, { page }) {
    commit(REQUEST_VIDEO_BEST)
    API.getBestVideos({ page })
      .then(result => commit(RECEIVE_VIDEO_BEST, { result }))
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
