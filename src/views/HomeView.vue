<script setup>
import { PhGithubLogo, PhInfo } from '@phosphor-icons/vue'
</script>

<template>
  <main>
    <div class="flex flex-col gap-5">
      <h1>Welcome!</h1>
      <h3>
        My name is Miranda. I'm a professional software developer, plus plant parent (say that three
        times fast), pet parent, casual gamer, and newbie snowboarder.
      </h3>
      <h4>
        I work professionally in the full stack and I'm adaptive and more than willing to learn
        something new.
      </h4>
      <h4>
        As a passionate problem-solver and life-long learner, I care deeply about putting out the
        best user experience I can.
      </h4>
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
    </div>
  </main>
</template>
