import API from '@/api'
import {
  REQUEST_IDOL_VIDEO_NEWEST,
  RECEIVE_IDOL_VIDEO_NEWEST,
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
  [REQUEST_IDOL_VIDEO_NEWEST] (state) {
  },
  [RECEIVE_IDOL_VIDEO_NEWEST] (state, { result, idolKey }) {
    const { contents, ...pagination } = result
    state.contents = [ ...parseVideos(contents) ]
    state.pagination = { ...pagination }
    state.idolKey = idolKey
  },
}

const actions = {
  fetchIdolVideoNewest ({ commit, state }, { idolKey, page }) {
    commit(REQUEST_IDOL_VIDEO_NEWEST)
    API.getIdolsVideoList({ idolKey, page, order: 'time' })
      .then(result => commit(RECEIVE_IDOL_VIDEO_NEWEST, { result, idolKey }))
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
