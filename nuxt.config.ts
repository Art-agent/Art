// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=5.0',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
      ]
    }
  },
  css: [
    '~/assets/styles/main.css',
    '~/assets/styles/variables.css',
    '~/assets/styles/_media.scss'
  ],
  runtimeConfig: {
    public: {
      projectId: process.env.NUXT_PROJECT_ID,
      projectUrl: process.env.NUXT_PROJECT_URL,
    },
    grokApiKey: process.env.GROQ_API_KEY,
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