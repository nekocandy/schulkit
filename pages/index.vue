<script setup lang="ts">
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <div class="h-full w-full flex gap-8">
    <div class="w-full flex flex-col gap-4">
      <DashboardTodoList class="h-full max-w-2/6" />
      <DashboardCanteen class="max-w-1/2" />
    </div>

    <div class="w-1/2 flex flex-col gap-4">
      <DashboardWeatherCard />
      <DashboardUpcomingTA />
    </div>
  </div>
</template>

<style scoped>

</style>
