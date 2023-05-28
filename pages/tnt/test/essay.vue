<script setup lang="ts">
definePageMeta({
  layout: 'yellow',
})
const endTime = dayjs().add(1, 'hour')
const timeLeft = ref('')

useIntervalFn(() => {
  const { $toast } = useNuxtApp()

  $toast.info('Saving data...')
}, 5000)

onMounted(() => {
  setInterval(() => {
    const minutesLeft = endTime.diff(dayjs(), 'minute')
    const secondsLeft = endTime.diff(dayjs(), 'second') - minutesLeft * 60
    timeLeft.value = `${minutesLeft}:${secondsLeft.toString().padStart(2, '0')}`
  }, 1000)
})
</script>

<template>
  <div class="h-full w-full flex flex-col">
    <div flex items-end gap-2 pl-6>
      <div class="rounded-t-xl bg-[#f22c2c] px-8 py-1 text-lg font-bold text-white">
        Essay
      </div>
      <div class="rounded-t-xl bg-[#2c37d8] px-8 py-1 text-lg font-bold text-white">
        {{ timeLeft }}
      </div>
    </div>

    <div class="border-2 border-black rounded-xl bg-white px-4 py-4">
      The American Revolution was a major turning point in world history. What were the causes of the American Revolution?
    </div>

    <div class="relative h-full w-full flex-1 pt-4">
      <textarea class="h-full w-full resize-none rounded-lg px-4 py-4" placeholder="enter your answer here" />

      <div class="absolute bottom-0 right-0 pb-4 pr-4">
        <button class="rounded-lg bg-[#88ef37] px-4 py-2 text-sm font-bold">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
