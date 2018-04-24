<template>
  <div>
    Best
    <VideoList/>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import VideoList from '@/components/VideoList.vue'

export default {
  name: 'AppBest',
  components: {
    VideoList,
  },
  computed: {
    ...mapState([
      'bestVideos',
    ]),
    ...mapGetters([
      'currentBestVides',
    ]),
  },
  methods: {
    ...mapActions([
      'fetchBestVideos',
    ]),
  },
  mounted() {
    this.fetchBestVideos()
  },
}
</script>

<style></style>
