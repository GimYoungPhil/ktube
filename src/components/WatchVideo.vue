<template>
  <div class="embed-responsive embed-responsive-16by9">
    <iframe
      class="embed-responsive-item"
      :src="`https://www.youtube.com/embed/${$route.params.videoId}?rel=0`"
      allowfullscreen
    />
  </div>
</template>

<script>
export default {
  name: 'WatchVideo',
}
</script>
