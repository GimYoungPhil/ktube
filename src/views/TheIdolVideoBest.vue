<template>
  <div class="pt-3">
    <h4>Best Vidoes</h4>
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
  props: {
    idolKey: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState({
      collection: state => state.idolVideoBest.contents,
      pagination: state => state.idolVideoBest.pagination,
    }),
  },
  methods: {
    ...mapActions({
      requestData: 'fetchIdolVideoBest',
    }),
  },
  mounted() {
    if (!this.collection.length) {
      this.requestData({ idolKey: this.idolKey, page: 1 })
    }
  },
}
</script>
