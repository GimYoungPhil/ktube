<template>
  <div class="pt-3">
    <h4>Idols List</h4>
    <IdolList :collection="collection"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import IdolList from '@/components/IdolList.vue'

export default {
  name: 'TheIdolRankList',
  components: {
    IdolList,
  },
  computed: {
    ...mapState({
      collection: state => state.idolList.idols,
    }),
  },
  methods: {
    ...mapActions({
      requestData: 'fetchIdolList',
    }),
  },
  mounted() {
    if (!this.collection.length) {
      this.requestData({ lang: 'ko' })
    }
  },
}
</script>
