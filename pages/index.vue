<script setup lang="ts">
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <div class="h-full w-full flex flex-col">
    <div class="py-4 text-3xl">
      Welcome, <span class="font-bold">sugoii</span>
    </div>
    <div class="h-full w-full flex gap-4 overflow-y-auto">
      <div class="w-full flex flex-col gap-4">
        <div class="h-full w-full flex gap-4">
          <DashboardTodoList class="h-full max-w-2/6" />
          <DashboardCalendar class="h-full max-w-4/6" />
        </div>
        <div class="h-fit flex gap-4">
          <DashboardCanteen class="w-full" />
          <DashboardExternalLinks class="max-w-2/6" />
        </div>
      </div>
      <div class="w-1/2 flex flex-col gap-4">
        <DashboardWeatherCard />
        <DashboardUpcomingTA />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
