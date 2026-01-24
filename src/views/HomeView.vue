<script setup>
import { PhGithubLogo, PhInfo } from '@phosphor-icons/vue'
</script>

<template>
  <main>
    <h1 class="pb-5">Welcome!</h1>
    <h3 class="pb-5">
      My name is Miranda. I'm a professional software developer, plus plant parent (say that three
      times fast), pet parent, casual gamer, and newbie snowboarder.
    </h3>
    <div class="flex flex-col items-start gap-3 py-5">
      <h2>Check out my Github to see some of my work:</h2>
      <a href="https://github.com/dracaenaa" class="button-style gap-1" target="_blank">
        <PhGithubLogo size="30px" />
        <h3>[dracaenaa]</h3>
      </a>
    </div>
    <div class="flex flex-col items-end gap-3">
      <h3>Or learn more about me:</h3>
      <RouterLink to="about" class="button-style gap-1">
        <PhInfo size="20px" />
        <h4>about me</h4>
      </RouterLink>
    </div>
  </main>
</template>
