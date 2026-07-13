<template>
  <div class="flex w-full justify-between pb-10">
    <div>
      <p>Site made by me :3</p>
      <a
        href="https://www.flaticon.com/free-icons/houseplant"
        target="_blank"
        title="houseplant icons"
        >Houseplant icons created by MetamorphLab - Flaticon</a
      >
    </div>
    <div class="flex">
      <a href="https://www.linkedin.com/in/mirandabkolker/" target="_blank" @click="handleLinkedinClick">
        <PhLinkedinLogo size="30px" />
      </a>
      <a href="https://github.com/dracaenaa" target="_blank" @click="handleGithubClick">
        <PhGithubLogo size="30px" />
      </a>
      <a href="mailto:mirandabkolker@yahoo.com" @click="handleEmailClick">
        <PhEnvelope size="30px" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { PhEnvelope, PhGithubLogo, PhLinkedinLogo } from '@phosphor-icons/vue'
import posthog from 'posthog-js'

const handleLinkedinClick = () => {
  posthog.capture('footer_linkedin_clicked')
}

const handleGithubClick = () => {
  posthog.capture('footer_github_clicked')
}

const handleEmailClick = () => {
  posthog.capture('footer_email_clicked')
}
</script>
