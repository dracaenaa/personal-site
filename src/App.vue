<template>
  <header>
    <HeaderBar />
  </header>

  <RouterView class="main-content" />

  <footer>
    <TheFooter />
  </footer>
</template>

<script setup>
import { RouterView } from 'vue-router'
import HeaderBar from './components/HeaderBar.vue'
import TheFooter from './components/TheFooter.vue'
</script>
