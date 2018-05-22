<template>
  <div class="pt-3">
    <h4>FanCam : Newest Videos</h4>
    <VideoList
      queryType="fanCamNewest"
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
  name: 'TheFanCamNewest',
  components: {
    VideoList,
  },
  computed: {
    ...mapState({
      collection: state => state.fanCamNewest.contents,
      pagination: state => state.fanCamNewest.pagination,
    }),
  },
  methods: {
    ...mapActions({
      requestData: 'fetchFanCamNewest',
    }),
  },
  mounted() {
    if (!this.collection.length) {
      this.requestData({ page: 1 })
    }
  },
}
</script>
