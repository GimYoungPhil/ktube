import API from '@/api'
import {
  REQUEST_IDOL_VIDEO_BEST,
  RECEIVE_IDOL_VIDEO_BEST,
} from '@/store/mutation-types'
import { parseVideos } from '@/util/parser'

const state = {
  idolKey: null,
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
  [REQUEST_IDOL_VIDEO_BEST] (state) {
  },
  [RECEIVE_IDOL_VIDEO_BEST] (state, { result, idolKey }) {
    const { contents, ...pagination } = result
    state.contents = [ ...parseVideos(contents) ]
    state.pagination = { ...pagination }
    state.idolKey = idolKey
  },
}

const actions = {
  fetchIdolVideoBest ({ commit, state }, { idolKey, page }) {
    commit(REQUEST_IDOL_VIDEO_BEST)
    API.getIdolsVideoList({ idolKey, page, order: 'view' })
      .then(result => commit(RECEIVE_IDOL_VIDEO_BEST, { result, idolKey }))
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
