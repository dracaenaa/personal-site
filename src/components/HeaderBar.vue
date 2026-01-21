<template>
  <div class="wrapper">
    <RouterLink to="/">
      <div class="flex-wrapper">
        <img
          alt="dracaena logo"
          class="logo"
          src="/src/assets/dracaena.png"
          width="60"
          height="60"
        />
        <h3>dracaenaa</h3>
      </div>
    </RouterLink>
    <div v-if="isDesktopView">
      <nav>
        <RouterLink to="/">home</RouterLink>
        <RouterLink to="/about">about</RouterLink>
        <a href="https://github.com/dracaenaa">my github</a>
      </nav>
    </div>
    <div v-else>
      <button v-on:click="showDrawer">
        <PhList size="30px" color="hsl(307, 100%, 37%)" />
      </button>
    </div>
    <NavDrawer v-show="isDrawerVisible" @close="closeDrawer" />
  </div>
</template>

<!-- eslint-disable no-unused-vars -->
<script setup>
import { PhList } from '@phosphor-icons/vue'

let isDesktopView = window.innerWidth >= 1024
</script>

<script>
import NavDrawer from './NavDrawer.vue'

export default {
  name: 'App',
  components: {
    NavDrawer,
  },
  data() {
    return {
      isDrawerVisible: false,
    }
  },
  methods: {
    showDrawer() {
      this.isDrawerVisible = true
    },
    closeDrawer() {
      this.isDrawerVisible = false
    },
  },
}
</script>
