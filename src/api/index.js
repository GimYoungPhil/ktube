import axios from 'axios'

// const Order = {
//   latest: 'time',  // 최근 시간순
//   views: 'view',   // 조회수 많은순
//   like: 'like',    // 좋아요 많은순
// };
// const CATEGORY = {
//   daily: 'd',
//   weekly: 'w',
//   monthly: 'm',
// }
const scale = 12

export default {
  // api: 3
  getNewestVideos({ page }) {
    return axios({
      url: '/api/videos',
      params: { page, scale, 'p[order]': 'time' },
    }).then(response => response.data)
  },

  // api: 4
  getBestVideos({ page }) {
    return axios({
      url: '/api/bests/d',
      params: { page, scale },
    }).then(response => response.data)
  },

  // api: 5
  getNewestFanCams({ page }) {
    return axios({
      url: '/api/fancams',
      params: { page, scale, 'p[order]': 'time' },
    }).then(response => response.data)
  },

  // api: 6
  getBestFanCams({ page }) {
    return axios({
      url: '/api/fbests/d',
      params: { page, scale },
    }).then(response => response.data)
  },

  // api: 9
  getNewestKaraokes({ page }) {
    return axios({
      url: '/api/karaokes',
      params: { page, scale, 'p[order]': 'time' },
    }).then(response => response.data)
  },

  // api: 10
  getBestKaraokes({ page }) {
    return axios({
      url: '/api/karabests/d',
      params: { page, scale },
    }).then(response => response.data)
  },

  // api: 15
  getIdols({ lang = 'ko' }) {
    return axios({
      url: '/api/idols',
      params: { lang },
    }).then(response => response.data)
  },

  // api: 16
  getIdolsDetail({ idolKey, lang = 'ko'}) {
    return axios({
      url: `/api/idols/${idolKey}`,
      params: { lang },
    }).then(response => response.data)
  },

  // api: 14
  getIdolsImage({ idolKey, page }) {
    return axios({
      url: `/api/images/${idolKey}`,
      params: { page }
    }).then(response => response.data) 
  },

  // api: 11
  getIdolsVideoList({ idolKey, page, order = 'view' }) {
    return axios({
      url: `/api/videos/${idolKey}`,
      params: { page, scale, 'p[order]': order },
    }).then(response => response.data)
  },

  // api: 12
  getIdolsKaraokeList({ idolKey, page, order = 'view' }) {
    return axios({
      url: `/api/karaokes/${idolKey}`,
      params: { page, scale, 'p[order]': order },
    }).then(response => response.data)
  },

  // api: 1
  getVideoWatch({ videoKey }) {
    return axios({
      url: `/api/video/${videoKey}`,
    }).then(response => response.data)
  }
}
