<template>
  <div class="row">
    <template v-for="(video, index) in videos">
      <div class="col-sm-6 my-3" :key="index">
        <VideoListItem :video="video"/>
      </div>
    </template>
    <VideoListPagination/>
  </div>
</template>

<script>
import VideoListItem from './VideoListItem.vue'
import VideoListPagination from './VideoListPagination.vue'

export default {
  name: 'VideoList',
  components: {
    VideoListItem,
    VideoListPagination,
  },
  props: {
    videos: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style></style>
