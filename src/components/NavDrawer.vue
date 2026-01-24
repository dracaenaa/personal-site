<template>
  <div class="drawer-backdrop">
    <div class="drawer">
      <header class="drawer-header">
        <button type="button" v-on:click="close"><PhX size="20" class="icon-style" /></button>
      </header>
      <section class="drawer-body">
        <nav>
          <RouterLink to="/" @click="close">home</RouterLink>
          <RouterLink to="/about" @click="close">about</RouterLink>
          <RouterLink to="/history" @click="close">history</RouterLink>
          <a href="https://github.com/dracaenaa" target="_blank">my github</a>
        </nav>
      </section>
      <footer class="drawer-footer">
        <div>
          <img
            alt="dracaena logo"
            class="opacity-70"
            src="/src/assets/dracaena.png"
            width="50"
            height="50"
          />
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { PhX } from '@phosphor-icons/vue'
</script>

<script>
export default {
  name: 'NavDrawer',
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>
