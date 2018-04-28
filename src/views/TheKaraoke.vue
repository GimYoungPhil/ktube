<template>
  <div>
    <TheKaraokeNewest/>
    <TheKaraokeBest/>
  </div>
</template>

<script>
import TheKaraokeNewest from './TheKaraokeNewest.vue'
import TheKaraokeBest from './TheKaraokeBest.vue'

export default {
  name: 'TheFanCam',
  components: {
    TheKaraokeNewest,
    TheKaraokeBest,
  },
}
</script>
