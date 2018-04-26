<template>
  <nav class="navbar navbar-expand fixed-top navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand text-success" to="/">
        <font-awesome-icon :icon="icon" />
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" :class="{ active: $route.path === '/'}">
            <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item" :class="{ active: $route.path === '/fanCam'}">
            <router-link class="nav-link" to="fanCam">FanCam</router-link>
          </li>
          <li class="nav-item" :class="{ active: $route.path === '/karaoke'}">
            <router-link class="nav-link" to="karaoke">Karaoke</router-link>
          </li>
          <li class="nav-item" :class="{ active: $route.path === '/idol'}">
            <router-link class="nav-link" to="idols">Idols</router-link>
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
