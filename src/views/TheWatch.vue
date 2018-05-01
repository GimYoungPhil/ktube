<template>
  <div>
    <div class="jumbotron jumbotron-fluid p-0 bg-black">
      <div class="container">
        <WatchVideo/>
      </div>
    </div>
    <div class="container">
      <component :is="$route.query.type"/>
    </div>
  </div>
</template>

<script>
import WatchVideo from '@/components/WatchVideo.vue'
import TheVideoNewest from './TheVideoNewest.vue'
import TheVideoBest from './TheVideoBest.vue'
import TheFanCamNewest from './TheFanCamNewest.vue'
import TheFanCamBest from './TheFanCamBest.vue'
import TheKaraokeNewest from './TheKaraokeNewest.vue'
import TheKaraokeBest from './TheKaraokeBest.vue'
import TheIdolVideoNewest from './TheIdolVideoNewest.vue'
import TheIdolVideoBest from './TheIdolVideoBest.vue'

export default {
  name: 'TheWatch',
  components: {
    WatchVideo,
    'videoNewest': TheVideoNewest,
    'videoBest': TheVideoBest,
    'fanCamNewest': TheFanCamNewest,
    'fanCamBest': TheFanCamBest,
    'karaokeNewest': TheKaraokeNewest,
    'karaokeBest': TheKaraokeBest,
    'idolVideoNewest': TheIdolVideoNewest,
    'idolVideoBest': TheIdolVideoBest,
  },
  // mounted: function () {
  //   const { videoKey } = this.$route.params
  //   const { type, idol } = this.$route.query
  //   console.log(videoKey)
  //   console.log(type)
  //   console.log(idol)
  // },
}
</script>

<style scoped>
.bg-black {
  background-color: #000;
}
</style>
