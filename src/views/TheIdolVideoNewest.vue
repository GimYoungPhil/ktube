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
  props: {
    idolKey: {
      type: String,
      required: true,
    },
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
      this.requestData({ idolKey: this.idolKey, page: 1 })
    }
  },
}
</script>
