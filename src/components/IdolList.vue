<template>
  <div class="row">
    <div
      class="col-sm-6 col-md-4 col-lg-3 col-xxl-2 my-3 px-1"
      v-for="(idol, index) in collection"
      :key="index"
    >
      <IdolListItem :idol="idol"/>
    </div>
  </div>
</template>

<script>
import IdolListItem from './IdolListItem.vue'

export default {
  name: 'IdolList',
  components: {
    IdolListItem,
  },
  props: {
    collection: {
      type: Array,
      required: true,
    },
  },
}
</script>
