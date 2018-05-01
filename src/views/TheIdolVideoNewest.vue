<template>
  <div class="pt-3">
    <h4>Newest Vidoes</h4>
    <VideoList
      queryType="idolVideoNewest"
      :collection="collection"
      :pagination="pagination"
      @selectPage="requestData"
      :idolKey="$route.params.idolKey || $route.query.idolKey"
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
    }),
  },
  methods: {
    ...mapActions({
      requestData: 'fetchIdolVideoNewest',
    }),
  },
  mounted() {
    if (!this.collection.length) {
      const idolKey = this.$route.params.idolKey || this.$route.query.idolKey
      this.requestData({ idolKey, page: 1 })
    }
  },
}
</script>
