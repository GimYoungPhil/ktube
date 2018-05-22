<template>
  <div class="pt-3">
    <h4>Best Videos</h4>
    <VideoList
      queryType="idolVideoBest"
      :collection="collection"
      :pagination="pagination"
      @selectPage="requestData"
      :idolKey="idolKey"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import VideoList from '@/components/VideoList.vue'

export default {
  name: 'TheIdolVideoBest',
  components: {
    VideoList,
  },
  computed: {
    ...mapState({
      collection: state => state.idolVideoBest.contents,
      pagination: state => state.idolVideoBest.pagination,
      idolKey: state => state.idolVideoBest.idolKey,
    }),
  },
  methods: {
    ...mapActions({
      requestData: 'fetchIdolVideoBest',
    }),
  },
  mounted() {
    const idolKey = this.$route.params.idolKey || this.$route.query.idolKey
    if (!this.collection.length || this.idolKey !== idolKey) {
      this.requestData({ idolKey, page: 1 })
    }
  },
}
</script>
