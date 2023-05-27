import './env'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
  ],
  css: [
    'vue-toast-notification/dist/theme-sugar.css',
  ],
})
