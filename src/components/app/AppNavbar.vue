<template>
  <nav class="navbar navbar-expand fixed-top navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand text-primary" :to="{name: 'video'}">
        <font-awesome-icon :icon="icon" />
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" :class="{ active: $route.name === 'video'}">
            <router-link class="nav-link" :to="{name: 'video'}">Home</router-link>
          </li>
          <li class="nav-item" :class="{ active: $route.name === 'fancam'}">
            <router-link class="nav-link" :to="{name: 'fancam'}">FanCam</router-link>
          </li>
          <li class="nav-item" :class="{ active: $route.name === 'karaoke'}">
            <router-link class="nav-link" :to="{name: 'karaoke'}">Karaoke</router-link>
          </li>
          <li class="nav-item" :class="{ active: $route.name === 'idol'}">
            <router-link class="nav-link" :to="{name: 'idol'}">Idols</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faYoutube from '@fortawesome/fontawesome-free-brands/faYoutube'

export default {
  name: 'AppNavbar',

  components: {
    FontAwesomeIcon,
  },

  computed: {
    icon () {
      return faYoutube
    },
  },
}
</script>

<style></style>
