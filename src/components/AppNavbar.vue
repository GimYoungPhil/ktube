<template>
  <nav class="navbar navbar-expand fixed-top navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand text-primary" :to="{name: 'video'}">
        <font-awesome-icon :icon="iconBrand"/>
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" :class="{ active: $route.name === 'video'}">
            <router-link class="nav-link" :to="{name: 'video'}" title="Videos">
              Home
            </router-link>
          </li>
          <li class="nav-item" :class="{ active: $route.name === 'fancam'}">
            <router-link class="nav-link" :to="{name: 'fancam'}" title="FanCam">
              FanCam
            </router-link>
          </li>
          <li class="nav-item" :class="{ active: $route.name === 'karaoke'}">
            <router-link class="nav-link" :to="{name: 'karaoke'}" title="Karaoke">
              Karaoke
            </router-link>
          </li>
          <li class="nav-item" :class="{ active: $route.name === 'idolRank'}">
            <router-link class="nav-link" :to="{name: 'idolRank'}" title="Idols">
              Idol
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faYoutube } from '@fortawesome/fontawesome-free-brands'
import { faVideo, faMobileAlt, faCamera, faMicrophone, faUsers } from '@fortawesome/fontawesome-free-solid'

export default {
  name: 'AppNavbar',
  components: {
    FontAwesomeIcon,
  },
  computed: {
    iconBrand: function () {
      return faYoutube
    },
    iconVideo: function () {
      return faVideo
    },
    iconFanCam: function () {
      return faMobileAlt
    },
    iconKaraoke: function () {
      return faMicrophone
    },
    iconIdol: function () {
      return faUsers
    },
  },
}
</script>

<style></style>
