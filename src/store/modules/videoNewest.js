import API from '@/api'
import {
  REQUEST_VIDEO_NEWEWST,
  RECEIVE_VIDEO_NEWEWST,
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
  [REQUEST_VIDEO_NEWEWST] (state) {
  },
  [RECEIVE_VIDEO_NEWEWST] (state, { result }) {
    const { contents, ...paginations } = result
    state.contents = [ ...parseVideos(contents) ]
    state.pagination = { ...paginations }
  },
}

const actions = {
  fetchVideoNewest ({ commit, state }, { page }) {
    commit(REQUEST_VIDEO_NEWEWST)
    API.getNewestVideos({ page })
      .then(result => commit(RECEIVE_VIDEO_NEWEWST, { result }))
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
