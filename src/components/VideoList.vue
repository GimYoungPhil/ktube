<template>
  <div class="">
    <transition-group name="list" tag="div" class="row">
      <div
        class="col-sm-6 col-md-4 col-lg-3 col-xxl-2 my-3 px-1"
        v-for="(video, index) in collection"
        :key="index"
      >
        <VideoListCard :video="video" :queryType="queryType" :idolKey="idolKey"/>
      </div>
    </transition-group>
    <VideoListPagination
      :page="pagination.page"
      :startPage="pagination.startPage"
      :endPage="pagination.endPage"
      :hasPrevious="pagination.hasPrevious"
      :hasNext="pagination.hasNext"
      @selectPage="({ idolKey, page }) => $emit('selectPage', { idolKey, page })"
      :idolKey="idolKey"
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
    collection: {
      type: Array,
      required: true,
    },
    queryType: {
      type: String,
      required: true,
    },
    pagination: {
      type: Object,
      required: true,
    },
    idolKey: String,
  },
}
</script>

<style>
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
}
</style>
