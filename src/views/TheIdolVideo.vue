<template>
  <div class="container">
    <TheIdolVideoNewest/>
    <TheIdolVideoBest/>
  </div>
</template>

<script>
import TheIdolVideoNewest from './TheIdolVideoNewest.vue'
import TheIdolVideoBest from './TheIdolVideoBest.vue'

export default {
  name: 'TheIdolVideo',
  components: {
    TheIdolVideoNewest,
    TheIdolVideoBest,
  },
}
</script>
