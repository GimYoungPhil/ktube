<template>
  <div class="pt-3">
    <h4>Karaoke : Newest Vidoes</h4>
    <VideoList
      queryType="karaokeNewest"
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
  name: 'TheKaraokeNewest',
  components: {
    VideoList,
  },
  computed: {
    ...mapState({
      collection: state => state.karaokeNewest.contents,
      pagination: state => state.karaokeNewest.pagination,
    }),
  },
  methods: {
    ...mapActions({
      requestData: 'fetchKaraokeNewest',
    }),
  },
  mounted() {
    if (!this.collection.length) {
      this.requestData({ page: 1 })
    }
  },
}
</script>
