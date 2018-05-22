<template>
  <div class="pt-3">
    <h4>Best Videos</h4>
    <VideoList
      queryType="videoBest"
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
  name: 'TheVideoBest',
  components: {
    VideoList,
  },
  computed: {
    ...mapState({
      collection: state => state.videoBest.contents,
      pagination: state => state.videoBest.pagination,
    }),
  },
  methods: {
    ...mapActions({
      requestData: 'fetchVideoBest',
    }),
  },
  mounted() {
    if (!this.collection.length) {
      this.requestData({ page: 1 })
    }
  },
}
</script>
