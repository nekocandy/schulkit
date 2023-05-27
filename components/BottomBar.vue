<script setup lang="ts">
const day = ref(dayjs().format('dddd'))
const time = ref(dayjs().format('hh:mm A'))

useIntervalFn(() => {
  day.value = dayjs().format('dddd')
  time.value = dayjs().format('hh:mm:ss A')
}, 1000)
</script>

<template>
  <div class="flex items-center justify-between rounded-md bg-[#2c37d8] px-6 text-white">
    <div>
      <img
        class="h-20 w-20 rounded-full"
        src="https://cdn.discordapp.com/attachments/1111681242803482699/1111683198854909952/Login_Pfp.png" alt=""
      >
    </div>

    <div class="flex items-center gap-4">
      <NuxtLink href="/" class="h-full border-b-6 border-[#000883] rounded bg-[#414bdc] px-2 py-2 hover:bg-opacity-98">
        <div class="i-tabler-click h-8 w-8" />
      </NuxtLink>

      <NuxtLink href="/paste" class="h-full border-b-6 border-[#000883] rounded bg-[#414bdc] px-2 py-2 hover:bg-opacity-98">
        <div class="i-tabler-clipboard-copy h-8 w-8" />
      </NuxtLink>

      <NuxtLink href="/" class="h-full border-b-6 border-[#000883] rounded bg-[#414bdc] px-2 py-2 hover:bg-opacity-98">
        <div class="i-tabler-flag-3 h-8 w-8" />
      </NuxtLink>

      <NuxtLink href="/" class="h-full border-b-6 border-[#000883] rounded bg-[#414bdc] px-2 py-2 hover:bg-opacity-98">
        <div class="i-tabler-bomb h-8 w-8" />
      </NuxtLink>

      <NuxtLink href="/" class="h-full border-b-6 border-[#000883] rounded bg-[#414bdc] px-2 py-2 hover:bg-opacity-98">
        <div class="i-tabler-message-report h-8 w-8" />
      </NuxtLink>
    </div>

    <div>
      <div class="flex flex-col items-center justify-center gap-1">
        <div>{{ day }}</div>
        <div>{{ time }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
