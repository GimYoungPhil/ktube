<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{ 'disabled': !hasPrevious }">
        <span
          class="page-link"
          :data-page="startPage - 1"
          @click="clickHandler"
        >
          Previous
        </span>
      </li>
      <template v-for="n in pageRange">
        <li
          class="page-item"
          :class="{ 'active': n === page }"
          :key="n"
        >
          <span
            class="page-link"
            :data-page="n"
            @click="clickHandler"
          >
            {{ n }}
          </span>
        </li>
      </template>
      <li class="page-item" :class="{ 'disabled': !hasNext }">
        <span
          class="page-link"
          :data-page="endPage + 1"
          @click="clickHandler"
        >
          Next
        </span>
      </li>
    </ul>
  </nav>
</template>

<script>
import _ from 'underscore'

export default {
  name: 'VideoListPagination',
  props: {
    startPage: Number,
    endPage: Number,
    hasPrevious: Boolean,
    hasNext: Boolean,
    page: Number,
  },
  computed: {
    pageRange: function () {
      return _.range(this.startPage, this.endPage + 1)
    },
  },
  methods: {
    clickHandler: function ($event) {
      const page = parseInt($event.target.dataset.page, 10)
      if (page !== this.page) {
        this.$emit('selectPage', { page })
      }
    },
  },
}
</script>

<style></style>
