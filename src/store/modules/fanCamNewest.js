import API from '@/api'
import {
  REQUEST_FANCAM_NEWEWST,
  RECEIVE_FANCAM_NEWEWST,
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
  [REQUEST_FANCAM_NEWEWST] (state) {
  },
  [RECEIVE_FANCAM_NEWEWST] (state, { result }) {
    const { contents, ...paginations } = result
    state.contents = [ ...parseVideos(contents) ]
    state.pagination = { ...paginations }
  },
}

const actions = {
  fetchFanCamNewest ({ commit, state }, { page }) {
    commit(REQUEST_FANCAM_NEWEWST)
    API.getNewestFanCams({ page })
      .then(result => commit(RECEIVE_FANCAM_NEWEWST, { result }))
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
