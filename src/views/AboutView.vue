<template>
  <main>
    <div class="flex flex-col items-center gap-5">
      <BasicInfo />
      <ul class="about-list">
        <li>
          <PhCode class="icon-style" />
          <h3>
            Hello! I'm a full-stack software developer with 3 years of experience in professional
            programming and over 5 years of experience total in the IT industry.
          </h3>
        </li>
        <li>
          <PhSparkle class="icon-style" />
          <h3>
            As co-founder of Freedom Pipeline, a JusticeTech social enterprise, I'm passionate about
            my work, and strive to meet the end user's needs the best that I can.
          </h3>
        </li>
        <li>
          <PhHeadCircuit class="icon-style" />
          <h3>
            My experience as an IT specialist in a helpdesk environment developed my problem-solving
            skills and base technical knowledge.
          </h3>
        </li>
        <li>
          <PhUsersThree class="icon-style" />
          <h3>
            Working as a software consultant polished those skills while teaching me to work in a
            collaborative environment, working together to build a robust and complex application.
          </h3>
        </li>
        <li>
          <PhHandHeart class="icon-style" />
          <h3>
            As co-founder and founding engineer of a social enterprise, all of this knowledge went
            towards helping a traditionally underserved population navigate reentry.
          </h3>
        </li>
        <li>
          <PhBuildingOffice class="icon-style" />
          <h3>
            Being a co-founder also taught me how to run a business and manage internal operations.
          </h3>
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup>
import BasicInfo from '@/components/BasicInfo.vue'
import {
  PhBuildingOffice,
  PhCode,
  PhHandHeart,
  PhHeadCircuit,
  PhSparkle,
  PhUsersThree,
} from '@phosphor-icons/vue'
</script>
