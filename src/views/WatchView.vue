<template>
  <div class="row">
    <div class="col">
      WatchView
    </div>
  </div>
</template>

<script>
export default {
  name: 'WatchView',

  mounted: function () {
    const { videoKey } = this.$route.params
    const { type, idol } = this.$route.query

    console.log(videoKey)
    console.log(type)
    console.log(idol)
  },
}
</script>

<style></style>
