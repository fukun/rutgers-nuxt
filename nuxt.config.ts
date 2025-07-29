export default defineNuxtConfig({
  modules: [
    // '@nuxt/content',
    '@nuxtjs/tailwindcss',
  ],
  devtools: {
    enabled: true
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
  css: [
    '~/assets/css/main.css'
  ]
})
