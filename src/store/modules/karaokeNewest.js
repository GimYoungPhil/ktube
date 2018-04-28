import API from '@/api'
import {
  REQUEST_KARAOKE_NEWEWST,
  RECEIVE_KARAOKE_NEWEWST,
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
  [REQUEST_KARAOKE_NEWEWST] (state) {
  },
  [RECEIVE_KARAOKE_NEWEWST] (state, { result }) {
    const { contents, ...paginations } = result
    state.contents = [ ...parseVideos(contents) ]
    state.pagination = { ...paginations }
  },
}

const actions = {
  fetchKaraokeNewest ({ commit, state }, { page }) {
    commit(REQUEST_KARAOKE_NEWEWST)
    API.getNewestKaraokes({ page })
      .then(result => commit(RECEIVE_KARAOKE_NEWEWST, { result }))
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
