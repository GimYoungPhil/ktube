<template>
  <div class="pt-3">
    <h4>Newest Vidoes</h4>
    <VideoList
      queryType="idolVideoNewest"
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
  name: 'TheIdolVideoNewest',
  components: {
    VideoList,
  },
  computed: {
    ...mapState({
      collection: state => state.idolVideoNewest.contents,
      pagination: state => state.idolVideoNewest.pagination,
      idolKey: state => state.idolVideoBest.idolKey,
    }),
  },
  methods: {
    ...mapActions({
      requestData: 'fetchIdolVideoNewest',
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
