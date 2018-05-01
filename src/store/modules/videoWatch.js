import API from '@/api'
import {
  REQUEST_VIDEO_WATCH,
  RECEIVE_VIDEO_WATCH,
} from '@/store/mutation-types'

const state = {
  video: {
    'videoId': 'X2VOhm_OozY',
    'title': '[금요힙합] #9 with 라비 Ravi',
    'description': '..........',
    'duration': 865,
    'embedHtml': '<iframe width=',
    'publishedAt': 1516967415000,
    'viewCount': 4906,
    'likeCount': 0,
    'thumbnailDefault': 'https://i.ytimg.com/vi/X2VOhm_OozY/default.jpg',
    'thumbnailMedium': 'https://i.ytimg.com/vi/X2VOhm_OozY/mqdefault.jpg',
    'thumbnailHigh': 'https://i.ytimg.com/vi/X2VOhm_OozY/hqdefault.jpg',
    'thumbnailStandard': 'https://i.ytimg.com/vi/X2VOhm_OozY/sddefault.jpg',
    'thumbnailMaxres': 'https://i.ytimg.com/vi/X2VOhm_OozY/maxresdefault.jpg',
    'rankViewCount': 0,
    'idolKey': 'c37bb7b6545132c03230fdfd0ba3c5a4ee0412494c0ee4d59e7fe69065edce7d',
    'videoKey': '8a96415983df810825bc1d5967f2378a0d858231381cc6b2e73f93867da763d0',
  },
}

const getters = {
}

const mutations = {
  [REQUEST_VIDEO_WATCH] (state) {
  },
  [RECEIVE_VIDEO_WATCH] (state, { result }) {
    state.video = { ...result }
  },
}

const actions = {
  fetchVideoWatch ({ commit }, { videoKey }) {
    commit(REQUEST_VIDEO_WATCH)
    API.getVideoWatch({ videoKey })
      .then(result => commit(RECEIVE_VIDEO_WATCH, { result }))
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
