import API from '@/api'
import {
  UPDATE_NEWEST_PAGE,
  UPDATE_NEWEST_CATEGORY,
  REQUEST_NEWEST_VIDEOS,
  RECEIVE_NEWEST_VIDEOS,
} from '@/store/mutation-types'

const state = {
  category: 'daily',
  page: 1,
  // list: {},
  // detail: {},
  daily: {
    1: [],
  },
  weekly: {},
  monthly: {},
}

const getters = {
  currentBestVides: state => {
    return state[state.category][state.page]
  },
}

const mutations = {
  [UPDATE_NEWEST_PAGE] (state, { page }) {
    state.page = page
  },
  [UPDATE_NEWEST_CATEGORY] (state, { category }) {
    state.category = category
  },
  [REQUEST_NEWEST_VIDEOS] (state) {
  },
  [RECEIVE_NEWEST_VIDEOS] (state, { videos, category, page }) {
    state[category][page] = videos.contents
  },
}

const actions = {
  fetchBestVideos ({ commit, state }) {
    const { category, page } = state
    commit(REQUEST_NEWEST_VIDEOS)
    API.getBestVideos({ category, page })
      .then(videos => commit(RECEIVE_NEWEST_VIDEOS, { videos, category, page }))
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
