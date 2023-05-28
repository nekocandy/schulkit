<script setup lang="ts">
definePageMeta({
  layout: 'yellow',
})
const endTime = dayjs().add(1, 'hour')
const timeLeft = ref('')
const isTNTEnabled = ref(false)

useIntervalFn(() => {
  if (isTNTEnabled.value)
    return

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
    <div w-full flex items-end justify-between gap-2 px-6>
      <div flex items-end gap-2>
        <div class="rounded-t-xl bg-[#f22c2c] px-8 py-1 text-lg font-bold text-white">
          Essay
        </div>
        <div class="rounded-t-xl bg-[#2c37d8] px-8 py-1 text-lg font-bold text-white">
          {{ timeLeft }}
        </div>
      </div>

      <button class="z-20 rounded-t-xl bg-black px-8 py-1 text-lg font-bold text-white" @click="isTNTEnabled = !isTNTEnabled">
        TNT Help
      </button>
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

    <!-- tnt help -->
    <div v-if="isTNTEnabled" class="absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full flex items-center justify-center backdrop-blur-md">
      <div class="flex flex-col gap-4 rounded-xl bg-black p-6">
        <div class="bg-[#cbf8a7] px-6 py-6 font-bold">
          It’s alright, your progress has been saved. Take a breather and calm
          yourself. The test can wait.
        </div>

        <div class="flex items-center justify-center gap-4 bg-[#cbf8a7] px-6 py-4 text-sm font-bold">
          <button class="border-4 border-[#a5a5a5] rounded-lg bg-white px-8 py-2">
            End Test and give later
          </button>

          <button class="border-4 border-[#a5a5a5] rounded-lg bg-white px-8 py-2">
            Resume (changing tab will end test)
          </button>

          <button class="border-4 border-[#a5a5a5] rounded-lg bg-white px-8 py-2">
            Breathe Aid
          </button>

          <button class="border-4 border-[#a5a5a5] rounded-lg bg-white px-8 py-2">
            Mail Professor
          </button>
        </div>

        <div class="flex flex-col items-center justify-center gap-2 bg-[#ffe168] px-6 py-12 font-bold uppercase">
          <div>
            Concentrate on your breathing. Take deep breaths in and out.
          </div>
          <div class="ping" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ping {
  --uib-size: 100px;
  --uib-speed: 8s;
  --uib-color: #2c37d8;

  position: relative;
  height: var(--uib-size);
  width: var(--uib-size);
}

.ping::before,
.ping::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background-color: var(--uib-color);
  animation: pulse var(--uib-speed) linear infinite;
  transform: scale(0);
  opacity: 0;
}

.ping::after {
  animation-delay: calc(var(--uib-speed) / -2);
}

@keyframes pulse {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
