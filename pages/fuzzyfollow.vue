<script setup lang="ts">
definePageMeta({
  layout: 'page',
})
const name = 'Hello'

function startTracking(objectId: string, pdfURL: string) {

}
</script>

<template>
  <div class="h-full w-full flex flex-col">
    <div class="flex items-center justify-between pt-2">
      <div class="py-4 text-3xl">
        Fuzzy Follow
      </div>

      <div class="flex gap-2">
        <FuzzyFollowCreateRoom />
        <FuzzyFollowJoinRoom @start-tracking="startTracking" />
      </div>
    </div>

    <div class="h-full w-full flex flex-1 gap-4">
      <div class="w-full flex flex-col gap-4 bg-[#f22c2c] px-4 py-4">
        <div class="flex items-center gap-4">
          <div class="border-2 border-black rounded-xl bg-[#414bdc] p-2">
            <div class="i-tabler-click h-8 w-8 text-white" />
          </div>

          <div class="h-full w-full flex items-center rounded-xl bg-[#ffcc00] px-4 py-2">
            Currently following {{ name }}
          </div>
        </div>

        <div class="flex-1 border-2 border-black rounded-xl bg-white">
          .
        </div>
      </div>

      <div class="h-ful w-5/10 flex flex-col gap-4">
        <div class="flex items-center">
          <div class="rounded-l-xl bg-black px-4 py-4">
            <div class="i-tabler-search h-8 w-8 text-white" />
          </div>

          <div class="h-full w-full flex items-center justify-center rounded-r-xl bg-[#88ef37] px-4 py-4">
            <input type="text" class="w-full bg-[#88ef37] text-lg placeholder-text-zinc-500 focus:outline-none" placeholder="Search with Atlas Search">
          </div>
        </div>

        <div class="h-full flex-1 rounded-xl bg-[#ffcc00] p-6">
          <div class="h-full flex flex-col">
            <div class="rounded-t-xl bg-[#ad8b00] py-2 text-center text-white">
              Lecture Notes
            </div>

            <div class="h-full w-full flex-1 bg-[#ffeda3]">
              <textarea class="h-full w-full resize-none bg-[#ffeda3] px-2 py-2 placeholder-text-zinc-700 focus:outline-none" placeholder="// Take notes here" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
