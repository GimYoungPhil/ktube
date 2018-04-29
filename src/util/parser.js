import _ from 'underscore'
import moment from 'moment'
import girlgroup from './girlgroup.json'

export function displayDuration(duration) {
  let h
  let m
  let s

  m = Math.floor(duration / 60)
  s = duration % 60
  h = Math.floor(m / 60)
  m = m % 60

  return `${h ? h : ''}${(h && m < 10) ? ':0' + m : m }:${s < 10 ? '0' + s : s}`
}

export function displayCount(viewCount) {
  const units = ['K', 'M']

  for (let i = units.length - 1; i >= 0; i--) {
    let decimal = Math.pow(1000, i + 1)
    if (viewCount >= decimal) {
      return (viewCount / decimal).toFixed(1) + units[i]
    }
  }

  return viewCount
}

export function displayDate(date) {
  return moment(date).fromNow()
}

export function parseVideos(videos) {
  return videos.map(video => {
    if (video.hasOwnProperty('duration')) {
      video.displayDuration = displayDuration(video.duration)
    }

    if (video.hasOwnProperty('rankViewCount')) {
      video.displayRankViewCount = displayCount(video.rankViewCount)
    }

    if (video.hasOwnProperty('viewCount')) {
      video.displayViewCount = displayCount(video.viewCount)
    }

    if (video.hasOwnProperty('publishedAt')) {
      video.displayDate = displayDate(video.publishedAt)
    }

    return video
  })
}

export function parseIdols(idols) {
  const girls = []
  const boys = []

  girlgroup.forEach(girl => {
    idols.forEach((idol, index) => {
      if (idol.name1 === girl.name) {
        girls.push({ ...idol })
        idols.splice(index, 1)
        return
      }
    })
  })

  return { idols, girls, boys }
}
