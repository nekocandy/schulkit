<script setup lang="ts">
defineProps<{
  title: string
  description: string
  type: 'essay'
}>()
</script>

<template>
  <div class="h-fit flex flex-col justify-between gap-4 rounded-xl bg-[#ffe168] px-4 py-4">
    <div class="flex flex-col gap-2">
      <div class="font-bold">
        {{ $props.title }}
      </div>

      <div>
        {{ $props.description }}
      </div>
    </div>

    <div class="flex items-center justify-between rounded-xl bg-[#ffe168] py-2">
      <div class="flex items-center gap-1 text-[#dc2828]">
        <div class="font-bold">
          Type:
        </div>

        <div>
          {{ $props.type }}
        </div>
      </div>

      <div>
        <NuxtLink href="/tnt/test/essay" class="rounded-xl bg-white px-4 py-2">
          Start
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
