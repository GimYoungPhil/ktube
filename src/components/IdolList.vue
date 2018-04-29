<template>
  <div class="row">
    <template v-if="type === 'Card'">
      <div
        class="col-sm-6 col-md-4 col-lg-3 col-xxl-2 my-3 px-1"
        v-for="(idol, index) in collection"
        :key="index"
      >
        <IdolListCard :idol="idol"/>
      </div>
    </template>
    <template v-else>
      <IdolListItem v-for="(idol, index) in collection" :key="index" :idol="idol"/>
    </template>
  </div>
</template>

<script>
import IdolListCard from './IdolListCard.vue'
import IdolListItem from './IdolListItem.vue'

export default {
  name: 'IdolList',
  components: {
    IdolListCard,
    IdolListItem,
  },
  props: {
    type: {
      type: String,
      required: true,
    },
    collection: {
      type: Array,
      required: true,
    },
  },
}
</script>
