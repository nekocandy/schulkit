<script setup lang="ts">
const todos = ref([])
</script>

<template>
  <div class="h-full w-full flex flex-col rounded-xl bg-[#ffcc00]">
    <div class="flex items-center justify-between rounded-t-xl bg-[#ad8b00] px-6 py-4 text-white">
      <div class="i-tabler-checklist" />

      <div>
        To-Do List
      </div>
    </div>

    <div class="flex flex-col gap-4 px-6 py-4">
      <div class="flex items-center gap-4">
        <input class="w-full rounded-md px-2 py-2 text-lg" type="text" placeholder="Add todo">
        <button class="border border-black rounded-full bg-[#ad8b00] p-2">
          <div class="i-tabler-plus" />
        </button>
      </div>

      <div v-if="todos.length" />
      <div v-else class="pt-6 text-center text-zinc-600">
        Nothing here!
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
