<template>
  <div class="pt-3">
    <h4>Best Vidoes</h4>
    <VideoList :videos="currentBestVides"/>
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
