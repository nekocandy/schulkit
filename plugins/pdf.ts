import { VuePDF, usePDF } from '@tato30/vue-pdf'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VuePDF', VuePDF)

  return {
    provide: {
      usePDF,
    },
  }
})
