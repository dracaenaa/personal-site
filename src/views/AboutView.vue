<template>
  <main>
    <div class="flex flex-col items-center gap-5">
      <BasicInfo />
      <h3>Hiya!</h3>
      <h3 class="pb-10">
        I'm a full-stack programmer who is passionate about providing an amazing end result and who
        values diversity, equity, and inclusion. Here's a bit about my professional experience:
      </h3>
      <AboutList class="pb-10" />
      <div class="flex flex-col py-10 border-t gap-5">
        <div class="flex flex-col md:flex-row gap-5">
          <PhLightbulb class="icon-style" />
          <h3 class="w-full">
            I'm always learning and trying new things in my professional and personal life
          </h3>
        </div>
        <div class="flex flex-col justify-between gap-5">
          <div class="flex justify-between gap-5">
            <h3>whether it's picking up knitting</h3>
            <h3>or learning to snowboard</h3>
          </div>
          <div class="flex justify-between gap-5">
            <img src="../assets/knitting.png" class="w-1/2 h-55 md:h-125 rounded-sm object-cover" />
            <img
              src="../assets/snowboarding.png"
              class="w-1/2 h-55 md:h-125 rounded-sm object-cover"
            />
          </div>
        </div>
        <h3>I'm always looking for a challenge and an adventure!</h3>
      </div>
    </div>
  </main>
</template>

<script setup>
import BasicInfo from '@/components/BasicInfo.vue'
import AboutList from '@/components/AboutList.vue'
import { PhLightbulb } from '@phosphor-icons/vue'
</script>
