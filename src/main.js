import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import posthog from 'posthog-js'

const app = createApp(App)

posthog.init(import.meta.env.VITE_POSTHOG_PROJECT_TOKEN || '', {
  api_host: import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com',
  defaults: '2026-01-30',
})

app.config.errorHandler = (err) => {
  posthog.captureException(err)
}

app.use(router)

app.mount('#app')
