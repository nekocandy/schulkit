<script setup lang="ts">
const upcomingList = ref([
  {
    title: 'Test',
    completed: false,
  },
])
</script>

<template>
  <div class="h-full w-full flex flex-col rounded-xl bg-[#f22c2c]">
    <div class="flex items-center justify-between rounded-t-xl bg-[#af2828] px-6 py-4 text-white">
      <div class="i-tabler-file-text h-6 w-6" />

      <div>
        Upcoming T&A
      </div>
    </div>

    <div class="flex flex-col gap-4 px-6 py-4">
      <div v-if="upcomingList.length">
        <div v-for="upcoming in upcomingList" :key="upcoming.title">
          <div class="flex items-center gap-4">
            <div class="cursor-pointer rounded-full bg-[#af2828] p-1" @click="upcoming.completed = !upcoming.completed">
              <div v-if="upcoming.completed" class="i-tabler-circle-check-filled h-6 w-6 text-[#eb7373]" />
              <div v-else class="i-tabler-circle-check h-6 w-6 text-[#eb7373]" />
            </div>

            <div class="w-full rounded-md bg-[#f37e7e] px-4 py-2 text-black">
              {{ upcoming.title }}
            </div>
          </div>
        </div>
      </div>
      <div v-else class="pt-6 text-center text-zinc-600">
        Nothing here!
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
