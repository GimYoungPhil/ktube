<template>
  <div class="row">
    <div class="col">
      TheWatch
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheWatch',

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
