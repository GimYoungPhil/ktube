<template>
  <router-link
    :to="{
      name: 'idolVideo',
      params: { idolKey: idol.idolKey }
    }"
    class="badge badge-pill badge-primary m-2"
  >
    <span class="h6">{{ idol.name2 }}</span>
  </router-link>
</template>

<script>
export default {
  name: 'IdolListItem',
  props: {
    idol: {
      type: Object,
      required: true,
    },
  },
}
</script>

