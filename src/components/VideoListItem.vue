<template>
  <div class="card border-0 rounded-0">
    <div class="position-relative">
      <img class="card-img-top" :src="video.thumbnailMedium" alt="Card image cap">
      <span class="badge badge-dark position-absolute">
        {{ video.displayDuration }}
      </span>
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ video.title }}</h5>
      <p class="card-text d-flex justify-content-between">
        <span>{{ video.displayCount }} views</span>
        <span>{{ video.displayDate }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'VideoListItem',
  props: {
    video: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.badge {
  right: 1em;
  bottom: 1em;
}
.card-title {
  display: block;
  margin: 0 0 4px 0;
  height: 3.2rem;
  overflow: hidden;
  /* font-size: 1.4rem;
  font-weight: 500; */
  line-height: 1.6rem;
}
</style>
