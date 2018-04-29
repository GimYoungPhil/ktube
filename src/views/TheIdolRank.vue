<template>
  <div class="pt-3">
    <h4>Girl Gruop</h4>
    <IdolList :collection="girls"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import IdolList from '@/components/IdolList.vue'

export default {
  name: 'TheIdolRank',
  components: {
    IdolList,
  },
  computed: {
    ...mapState({
      idols: state => state.idolList.idols,
      girls: state => state.idolList.girls,
      boys: state => state.idolList.boys,
    }),
  },
  methods: {
    ...mapActions({
      requestData: 'fetchIdolList',
    }),
  },
  mounted() {
    if (!this.idols.length) {
      this.requestData({ lang: 'ko' })
    }
  },
}
</script>
