<template>
  <div>
    <div class="py-5">
      <h4>Girl Gruop</h4>
      <IdolList :collection="girls" type="Card"/>
    </div>
    <div class="py-5">
      <h4>Boy Gruop</h4>
      <IdolList :collection="boys" type="Card"/>
    </div>
    <div class="py-5">
      <h4>Artist</h4>
      <IdolList :collection="idols" type="Item"/>
    </div>
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
      girls: state => state.idolList.girls,
      boys: state => state.idolList.boys,
      idols: state => state.idolList.idols,
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
