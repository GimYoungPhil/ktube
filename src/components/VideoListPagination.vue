<template>
  <nav aria-label="navigation" class="d-flex justify-content-center my-3">
    <ul class="pagination">
      <li class="page-item" :class="{ 'disabled': !hasPrevious }">
        <span
          class="page-link"
          :data-page="startPage - 1"
          @click="clickHandler"
        >
          <font-awesome-icon :icon="iconLeft" />
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
          <font-awesome-icon :icon="iconRight" />
        </span>
      </li>
    </ul>
  </nav>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faChevronLeft, faChevronRight, faAngleLeft, faAngleRight } from '@fortawesome/fontawesome-free-solid'
import _ from 'underscore'

export default {
  name: 'VideoListPagination',
  components: {
    FontAwesomeIcon,
  },
  props: {
    startPage: Number,
    endPage: Number,
    hasPrevious: Boolean,
    hasNext: Boolean,
    page: Number,
    idolKey: String,
  },
  computed: {
    iconLeft: function () {
      return faChevronLeft
    },
    iconRight: function () {
      return faChevronRight
    },
    pageRange: function () {
      return _.range(this.startPage, this.endPage + 1)
    },
  },
  methods: {
    clickHandler: function ($event) {
      const idolKey = this.idolKey
      const page = parseInt($event.target.dataset.page, 10)
      if (page !== this.page) {
        this.$emit('selectPage', { idolKey, page })
      }
    },
  },
}
</script>
