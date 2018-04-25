import axios from 'axios'

// const Order = {
//   latest: 'time',  // 최근 시간순
//   views: 'view',   // 조회수 많은순
//   like: 'like'     // 좋아요 많은순
// };
const CATEGORY = {
  daily: 'd',     // 일간베스트
  weekly: 'w',    // 주간베스트
  monthly: 'm',   // 월간베스트
}

export default {
  getIdolList(lang = 'ja') {
    return axios({
      url: '/api/idols',
      params: { lang },
    }).then(response => response.data)
  },

  getIdolDetail({ idolKey, lang = 'en' }) {
    return axios({
      url: `/api/idols/${idolKey}`,
      params: { lang },
    }).then(response => response.data)
  },

  getIdolImageList({ idolKey, page = 1 }) {
    return axios({
      url: `/api/images/${idolKey}`,
      params: { page },
    }).then(response => response.data)
  },

  getIdolVideoList({ idolKey, page = 1, order = 'view' }) {
    return axios({
      url: `/api/videos/${idolKey}`,
      params: { page, 'p[order]': order },
    }).then(response => response.data)
  },

  getIdolKaraokeList({ idolKey, page = 1, order = 'view' }) {
    return axios({
      url: `/api/karaokes/${idolKey}`,
      params: { page, 'p[order]': order },
    }).then(response => response.data)
  },

  // api: 4
  getBestVideos({ category = 'daily', page = 1 }) {
    return axios({
      url: `/api/bests/${CATEGORY[category]}`,
      params: { page },
    }).then(response => response.data)
  },
}
