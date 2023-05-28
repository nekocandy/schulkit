import './env'

export default defineNuxtConfig({
  app: {
    head: {
      title: 'SchulKit',
      meta: [
        {
          name: 'description',
          content: 'SchulKit - Manage your school, the Schul way! ',
        },
      ],
      link: [
        {
          rel: 'icon',
          href: '/favicon.png',
        },
      ],
    },
  },

  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
  ],
  css: [
    'vue-toast-notification/dist/theme-sugar.css',
    'v-calendar/style.css',
  ],

  experimental: {
    watcher: 'chokidar',
  },

  runtimeConfig: {
    realmAppId: process.env.NUXT_PUBLIC_REALM_APP_ID,

    public: {
      realmAppId: process.env.NUXT_PUBLIC_REALM_APP_ID,
    },
  },

  vite: {
    define: {
      'process.env.VSCODE_TEXTMATE_DEBUG': 'false',
    },
  },
})
