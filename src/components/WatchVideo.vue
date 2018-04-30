<template>
  <div>
    Watch Video {{ videoKey }}
  </div>
</template>

<script>
export default {
  name: 'WatchVideo',
  props: {
    videoKey: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
