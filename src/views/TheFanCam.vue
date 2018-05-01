<template>
  <div class="container">
    <TheFanCamNewest/>
    <TheFanCamBest/>
  </div>
</template>

<script>
import TheFanCamNewest from './TheFanCamNewest.vue'
import TheFanCamBest from './TheFanCamBest.vue'

export default {
  name: 'TheFanCam',
  components: {
    TheFanCamNewest,
    TheFanCamBest,
  },
}
</script>
