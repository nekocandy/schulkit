<script setup lang="ts">
defineProps({
  title: String,
  description: String,
  date: String,
  totalStudents: Number,
  enrolledStudents: Number,
})
</script>

<template>
  <div class="h-fit flex flex-col justify-between gap-8 rounded-xl bg-[#ffcc00] px-4 py-4">
    <div class="flex flex-col gap-2">
      <div class="font-bold">
        {{ $props.title }}
      </div>

      <div class="pt-4">
        {{ $props.description }}
      </div>

      <div class="flex items-center gap-1 text-[#dc2828]">
        <div class="font-bold">
          Date:
        </div>

        <div>
          {{ $props.date }}
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between rounded-xl bg-[#ffe168] px-4 py-2">
      <div class="flex items-center gap-2">
        {{ enrolledStudents }} / {{ totalStudents }} students

        <div class="i-tabler-arrow-right" />
      </div>

      <div>
        <button class="rounded-xl bg-white px-4 py-2">
          Volunteer
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
