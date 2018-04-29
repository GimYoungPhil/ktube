<template>
  <router-link
    :to="{
      name: 'idolVideo',
      params: { idolKey: idol.idolKey }
    }"
  >
    <div class="card border-0 rounded-0">
      <div class="card-img-top" :style="{ 'background-image': `url(${idol.thumbUrl})`}" />
      <div class="card-body p-2">
        <h5 class="card-title mb-0">{{ idol.name2 }}</h5>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'IdolListCard',
  props: {
    idol: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.card-img-top {
  height: 200px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

