<template>
  <div>
    <div class="pt-3">
      <h4>Newest Vidoes</h4>
    </div>
    <div class="pt-3">
      <h4>Best Vidoes</h4>
      <VideoList
        :videos="currentVideoBest"
        :pagination="currentPagination"
        @selectPage="requestDate"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import VideoList from '@/components/VideoList.vue'
import { SELECT_PAGE_VIDEO_BEST } from '@/store/mutation-types'

export default {
  name: 'VideoView',
  components: {
    VideoList,
  },
  computed: {
    ...mapState([
      'videoBest',
    ]),
    ...mapGetters([
      'currentVideoBest',
      'currentPagination',
    ]),
  },
  methods: {
    ...mapMutations({
      'selectPage': SELECT_PAGE_VIDEO_BEST
    }),
    ...mapActions([
      'fetchVideoBest',
    ]),
    requestDate: function ({ page }) {
      this.selectPage({ page })
      if (!this.currentVideoBest.length) {
        this.fetchVideoBest()
      }
    },
  },
  mounted() {
    const { page } = this.videoBest
    this.requestDate({ page })
  },
}
</script>

<style></style>
