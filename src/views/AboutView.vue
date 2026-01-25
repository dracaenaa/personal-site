<template>
  <main>
    <div class="flex flex-col items-center gap-5">
      <BasicInfo />
      <h3>Hiya!</h3>
      <h3 class="pb-10">
        I'm a full-stack programmer who is passionate about providing an amazing end result and who
        values diversity, equity, and inclusion. Here's a bit about me as a professional:
      </h3>
      <AboutList class="pb-10" />
      <AboutEnding />
    </div>
  </main>
</template>

<script setup>
import BasicInfo from '@/components/BasicInfo.vue'
import AboutList from '@/components/AboutList.vue'
import AboutEnding from '@/components/AboutEnding.vue'
</script>
