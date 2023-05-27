<script setup lang="ts">
const todos = ref([])
</script>

<template>
  <div class="h-fit flex flex-col rounded-xl bg-[#0c8ce9]">
    <div class="flex items-center justify-between rounded-t-xl bg-[#005593] px-6 py-3 text-white">
      <div class="i-tabler-cloud-fog h-6 w-6" />

      <div>
        Weather
      </div>
    </div>

    <div class="flex gap-4 px-4 py-4">
      <img class="my-auto h-28 rounded-md" src="https://cdn.discordapp.com/attachments/1110442151143276574/1112028950433116262/image.png" alt="">
      <div class="w-full flex flex-col gap-2">
        <div class="w-full flex items-center justify-center rounded-md bg-[#46a7ed] px-4 py-2 text-[#88ef37]">
          74 AQI
        </div>

        <div class="w-full flex items-center gap-2 rounded-md bg-[#005593] px-2 py-1 text-white">
          <div class="i-tabler-face-mask" />
          <span>No Need</span>
        </div>

        <div class="w-full flex items-center gap-2 rounded-md bg-[#005593] px-2 py-1 text-white">
          <div class="i-tabler-umbrella" />
          <span>No Need</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
