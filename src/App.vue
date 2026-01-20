<script setup>
import { RouterView } from 'vue-router'
// import Greeting from './components/GreetingMessage.vue'
import HeaderBar from './components/HeaderBar.vue'
</script>

<template>
  <header>
    <HeaderBar />
  </header>

  <RouterView />
  <footer>
    <a href="https://www.flaticon.com/free-icons/houseplant" title="houseplant icons"
      >Houseplant icons created by MetamorphLab - Flaticon</a
    >
  </footer>
</template>
