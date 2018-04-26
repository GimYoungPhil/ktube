<template>
  <div class="row">
    <template v-for="(video, index) in videos">
      <div class="col-sm-6 my-3" :key="index">
        <VideoListCard :video="video"/>
      </div>
    </template>
    <VideoListPagination
      v-if="pagination.hasOwnProperty('startPage')"
      :startPage="pagination.startPage"
      :endPage="pagination.endPage"
      :hasPrevious="pagination.hasPrevious"
      :hasNext="pagination.hasNext"
      :page="pagination.page"
      @selectPage="({page}) => $emit('selectPage', {page})"
    />
  </div>
</template>

<script>
import VideoListCard from './VideoListCard.vue'
import VideoListPagination from './VideoListPagination.vue'

export default {
  name: 'VideoList',
  components: {
    VideoListCard,
    VideoListPagination,
  },
  props: {
    videos: {
      type: Array,
      required: true,
    },
    pagination: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
