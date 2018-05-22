<template>
  <div class="pt-3">
    <h4>FanCam : Best Videos</h4>
    <VideoList
      queryType="fanCamBest"
      :collection="collection"
      :pagination="pagination"
      @selectPage="requestData"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import VideoList from '@/components/VideoList.vue'

export default {
  name: 'TheFanCamBest',
  components: {
    VideoList,
  },
  computed: {
    ...mapState({
      collection: state => state.fanCamBest.contents,
      pagination: state => state.fanCamBest.pagination,
    }),
  },
  methods: {
    ...mapActions({
      requestData: 'fetchFanCamBest',
    }),
  },
  mounted() {
    if (!this.collection.length) {
      this.requestData({ page: 1 })
    }
  },
}
</script>
