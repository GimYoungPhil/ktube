<template>
  <div class="app">
    <AppNavbar/>
    <div class="mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue'

export default {
  name: 'App',
  components: {
    AppNavbar,
  },
}
</script>
