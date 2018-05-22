<template>
  <div class="pt-3">
    <h4>Newest Videos</h4>
    <VideoList
      queryType="videoNewest"
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
  name: 'TheVideoNewest',
  components: {
    VideoList,
  },
  computed: {
    ...mapState({
      collection: state => state.videoNewest.contents,
      pagination: state => state.videoNewest.pagination,
    }),
  },
  methods: {
    ...mapActions({
      requestData: 'fetchVideoNewest',
    }),
  },
  mounted() {
    if (!this.collection.length) {
      this.requestData({ page: 1 })
    }
  },
}
</script>
