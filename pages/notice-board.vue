<script setup lang="ts">
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <div class="h-full w-full flex flex-col gap-4 pb-2">
    <div class="pb-0 pt-4 text-3xl font-bold">
      Notice Board
    </div>

    <div class="grid grid-cols-3 h-full w-full flex-1 gap-4 rounded-xl bg-[#f22c2c] px-4 py-4">
      <NoticeBoardCard
        title="FOOD DONATION DRIVE NOTICE"
        description="Please join us in our Food Donation Drive to help those in need within our community. We are accepting non-perishable food items at the designated drop-off location on 5th June for 3 hours. Your contributions can make a significant impact on the lives of individuals and families facing food insecurity."
        date="2021-10-10"
        :total-students="100"
        :enrolled-students="50"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
