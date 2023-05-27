<script setup lang="ts">
const todos = ref([])
</script>

<template>
  <div class="h-full w-full flex flex-col rounded-xl bg-[#eeeeee]">
    <div class="flex items-center justify-between rounded-t-xl bg-[#050001] px-6 py-3 text-white">
      <div class="i-tabler-calendar-bolt h-6 w-6" />

      <div>
        Calendar
      </div>
    </div>

    <div class="h-full w-full px-6 py-4">
      <!-- calendar here -->
      <VCalendar expanded class="h-full" />
    </div>
  </div>
</template>

<style scoped>

</style>
