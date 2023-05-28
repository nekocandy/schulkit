<script setup lang="ts">
const props = defineProps({
  pdfURL: String,
})

const iframeRef = ref<HTMLIFrameElement>()

watch(
  () => props.pdfURL,
  (newFrame) => {
    const document = iframeRef.value?.contentWindow?.document

    // document?.dispatchEvent(
    //   new KeyboardEvent('keypress', {
    //     key: 'PageUp',
    //     keyCode: 33,
    //     which: 33,
    //     code: 'PageUp',
    //     location: 0,
    //     altKey: false,
    //     ctrlKey: false,
    //     metaKey: false,
    //     shiftKey: false,
    //     repeat: false,
    //   }),
    // )

    document?.dispatchEvent(
      new KeyboardEvent('keypress', {
        key: 'PageDown',
        keyCode: 34,
        which: 34,
        code: 'PageDown',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        repeat: false,
      }))
  },
)
</script>

<template>
  <div class="flex-1 border-2 border-black rounded-xl bg-white">
    <iframe ref="iframeRef" class="h-full w-full" :src="$props.pdfURL" frameborder="0" />
  </div>
</template>

<style scoped>

</style>
