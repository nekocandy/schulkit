<script setup lang="ts">
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <div class="h-full w-full flex gap-8">
    <div class="w-full flex flex-col gap-6">
      <DashboardTodoList class="h-full max-w-2/6" />
      <DashboardCanteen class="max-w-1/2" />
    </div>

    <div class="flex flex-col">
      <DashboardTodoList />
    </div>
  </div>
</template>

<style scoped>

</style>
