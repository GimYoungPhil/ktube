import axios from 'axios'

// const Order = {
//   latest: 'time',  // 최근 시간순
//   views: 'view',   // 조회수 많은순
//   like: 'like'     // 좋아요 많은순
// };
const CATEGORY = {
  daily: 'd',
  weekly: 'w',
  monthly: 'm',
}

export default {
  // api: 3
  getNewestVideos({ page, scale = 12 }) {
    return axios({
      url: '/api/videos',
      params: { page, scale, 'p[order]': 'time' },
    }).then(response => response.data)
  },

  // api: 4
  getBestVideos({ page, scale = 12 }) {
    return axios({
      url: '/api/bests/d',
      params: { page, scale },
    }).then(response => response.data)
  },

  // api: 5
  getNewestFanCams({ page, scale = 12 }) {
    return axios({
      url: '/api/fancams',
      params: { page, scale, 'p[order]': 'time' },
    }).then(response => response.data)
  },

  // api: 6
  getBestFanCams({ page, scale = 12 }) {
    return axios({
      url: '/api/fbests/d',
      params: { page, scale },
    }).then(response => response.data)
  },

  // api: 9
  getNewestKaraokes({ page, scale = 12 }) {
    return axios({
      url: '/api/karaokes',
      params: { page, scale, 'p[order]': 'time' },
    }).then(response => response.data)
  },

  // api: 10
  getBestKaraokes({ page, scale = 12 }) {
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
  getIdolsImage({ idolKey, page, scale = 12 }) {
    return axios({
      url: `/api/images/${idolKey}`,
      params: { page }
    }).then(response => response.data) 
  },

  // api: 11
  getIdolsVideoList({ idolKey, page, order = 'view', scale = 12 }) {
    return axios({
      url: `/api/videos/${idolKey}`,
      params: { page, 'p[order]': order, scale },
    }).then(response => response.data)
  },

  // api: 12
  getIdolsKaraokeList({ idolKey, page, order = 'view', scale = 12 }) {
    return axios({
      url: `/api/karaokes/${idolKey}`,
      params: { page, 'p[order]': order, scale },
    }).then(response => response.data)
  },

}
