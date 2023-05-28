<script setup lang="ts">
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <div class="h-full w-full flex flex-col gap-4 pb-2">
    <div class="pb-0 pt-4 text-3xl font-bold">
      Tests
    </div>

    <div class="grid grid-cols-3 h-full w-full flex-1 gap-4 rounded-xl bg-[#ffcc00] px-4 py-4">
      <TNTTestInfoCard
        title="The American Revolution was a major turning point in world history. "
        description="What were the causes of the American Revolution?"
        type="essay"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
