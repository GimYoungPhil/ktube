<template>
  <div class="pt-3">
    <h4>Karaoke : Best Vidoes</h4>
    <VideoList
      queryType="karaokeBest"
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
  name: 'TheKaraokeBest',
  components: {
    VideoList,
  },
  computed: {
    ...mapState({
      collection: state => state.karaokeBest.contents,
      pagination: state => state.karaokeBest.pagination,
    }),
  },
  methods: {
    ...mapActions({
      requestData: 'fetchKaraokeBest',
    }),
  },
  mounted() {
    if (!this.collection.length) {
      this.requestData({ page: 1 })
    }
  },
}
</script>
