<template>
  <div class="app">
    <AppNavbar/>
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppNavbar from '@/components/app/AppNavbar.vue'

export default {
  name: 'App',
  components: {
    AppNavbar,
  },
}
</script>
