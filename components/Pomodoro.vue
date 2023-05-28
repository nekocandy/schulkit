<script setup lang="ts">
const endTime = ref(dayjs().add(25, 'minute'))
const timeLeft = ref('...')

const isRunning = ref(false)

useIntervalFn(() => {
  if (!isRunning.value)
    return

  const diff = endTime.value.diff(dayjs(), 'second')
  const minutes = endTime.value.diff(dayjs(), 'minute')

  if (diff <= 0) {
    isRunning.value = false
    timeLeft.value = 'Done!'
  }

  timeLeft.value = `${minutes}:${diff % 60}`
}, 1000)

function start() {
  isRunning.value = true
  endTime.value = dayjs().add(25, 'minute')
}

watch(isRunning, (value) => {
  if (value)
    start()
})
</script>

<template>
  <div class="h-fit w-fit flex cursor-pointer items-center gap-2 rounded-full bg-[#f22c2c] py-1 pl-3 pr-1 text-white -mb-4" @click="isRunning = !isRunning">
    <div class="font-arvo font-bold">
      {{ isRunning ? timeLeft : 'Pomo!' }}
    </div>
    <div class="rounded-full bg-[#ffcc00] p-2">
      <div class="i-tabler-hourglass-high text-black" />
    </div>
  </div>
</template>

<style scoped>

</style>
