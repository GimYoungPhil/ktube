<template>
  <div>
    <TheIdolVideoNewest :idolKey="$route.params.idolKey"/>
    <TheIdolVideoBest :idolKey="$route.params.idolKey"/>
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
