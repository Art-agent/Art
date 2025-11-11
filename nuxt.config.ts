// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
  css: [
    '~/assets/styles/main.css',
    '~/assets/styles/variables.css'
  ],
  runtimeConfig: {
    public: {
      projectId: process.env.NUXT_PROJECT_ID,
      projectUrl: process.env.NUXT_PROJECT_URL,
    },
    groqApiKey: process.env.GROQ_API_KEY,
  },
  modules: ['@nuxt/fonts', '@pinia/nuxt'],
  fonts: {
    defaults: {
      weights: ['300 700'],
    },
    provider: 'google',
    processCSSVariables: true,
  },
})