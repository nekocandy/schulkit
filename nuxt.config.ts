import './env'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
  ],
  css: [
    'vue-toast-notification/dist/theme-sugar.css',
  ],

  runtimeConfig: {
    realmAppId: process.env.NUXT_PUBLIC_REALM_APP_ID,

    public: {
      realmAppId: process.env.NUXT_PUBLIC_REALM_APP_ID,
    },
  },
})
