import API from '@/api'
import {
  SELECT_PAGE_VIDEO_BEST,
  REQUEST_VIDEO_BEST,
  RECEIVE_VIDEO_BEST,
} from '@/store/mutation-types'
import { parseVideos } from '@/util/parser'

const state = {
  page: 1,
  contents: {
    // 1: [],
    // 2: [],
    // 1021: [],
  },
  paginations: {
    1: {
      beginIndex: 0,
      endPage: 5,
      hasNext: true,
      hasPrevious: false,
      p: {},
      page: 1, // !!
      scale: 15,
      startPage: 1,
      total: 1021,
      totalPages: 69,
    },
  },
}

const getters = {
  currentVideoBest: state => {
    return state.contents[state.page] || []
  },
  currentPagination: state => {
    return state.paginations[state.page] || {}
  },
}

const mutations = {
  [SELECT_PAGE_VIDEO_BEST] (state, { page }) {
    state.page = page
  },
  [REQUEST_VIDEO_BEST] (state) {
    state.paginations = { ...state.paginations, [state.page]: {} }
    state.contents = { ...state.contents, [state.page]: [] }
  },
  [RECEIVE_VIDEO_BEST] (state, { videos }) {
    const { contents, ...paginations } = videos
    state.paginations = { ...state.paginations, [paginations.page]: {...paginations} }
    state.contents = { ...state.contents, [paginations.page]: contents }
  },
}

const actions = {
  fetchVideoBest ({ commit, state }) {
    const { page } = state
    commit(REQUEST_VIDEO_BEST)
    API.getBestVideos({ page })
      .then(videos => commit(RECEIVE_VIDEO_BEST, { videos }))
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
