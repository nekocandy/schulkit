<script setup lang="ts">
import { useDrauu } from '@vueuse/integrations/useDrauu'

const colors = ref(['black', '#ef4444', '#22c55e', '#3b82f6'])
const target = ref()

const { undo, redo, canUndo, canRedo, clear, brush } = useDrauu(target, {
  brush: {
    color: 'black',
    size: 3,
  },
})

const { mode, color, size } = toRefs(brush.value)
</script>

<template>
  <ClientOnly>
    <div class="h-full w-full flex flex-col gap-4">
      <div class="w-full flex items-center justify-between">
        <div class="flex items-center justify-center gap-1 rounded-md bg-[#a5a5a5] px-4 py-2">
          <button>
            <div i-tabler-brush />
          </button>

          <!-- <div class="flex"> -->
          <button v-for="brushColor in colors" :key="brushColor" @click="color = brushColor">
            <div class="h-4 w-4 rounded-full" :style="{ backgroundColor: brushColor }" />
          </button>
        </div>

        <div class="rounded-md bg-[#a5a5a5]">
          <button class="px-4 py-2" @click="clear()">
            <div i-tabler-eraser />
          </button>
        </div>
      </div>

      <div class="h-full w-full flex-1 border-2 border-black" />
      <svg
        ref="target"
        class="boreder h-full w-full border-black rounded-xl bg-yellow"
      />
      <div />
    </div>
  </ClientOnly>
</template>

<style scoped>

</style>
