<template>
  <div class="wrapper">
    <div class="flex">
      <img alt="dracaena logo" class="logo" src="/src/assets/dracaena.png" width="60" height="60" />
      <h3>dracaenaa</h3>
    </div>
    <div v-if="isDesktopView">
      <nav>
        <RouterLink to="/">home</RouterLink>
        <RouterLink to="/about">about</RouterLink>
        <a href="https://github.com/dracaenaa">my github</a>
      </nav>
    </div>
    <div v-else>
      <div v-on:click="openNavMenu">
        <PhList size="30px" />
      </div>
    </div>
  </div>
</template>

<!-- eslint-disable no-unused-vars -->
<script setup>
import { PhList } from '@phosphor-icons/vue'

let isDesktopView = window.innerWidth >= 1024

function openNavMenu() {}
</script>
