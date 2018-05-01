<template>
  <div class="container">
    <TheVideoNewest/>
    <TheVideoBest/>
  </div>
</template>

<script>
import TheVideoNewest from './TheVideoNewest.vue'
import TheVideoBest from './TheVideoBest.vue'

export default {
  name: 'TheVideo',
  components: {
    TheVideoNewest,
    TheVideoBest,
  },
}
</script>
