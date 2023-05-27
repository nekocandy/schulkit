<script setup lang="ts">
definePageMeta({
  layout: 'page',
})

const code = ref('')

async function saveCode() {

}

async function newCode() {

}

async function editCode() {

}
</script>

<template>
  <div class="h-full w-full flex flex-col gap-4 pb-2">
    <div class="pb-0 pt-4 text-3xl font-bold">
      mem.txt
    </div>

    <div class="relative h-full rounded-xl bg-[#ffcc00] px-8 py-8">
      <div class="absolute right-8 top-8 flex items-center gap-2 rounded-bl-xl rounded-tr-xl bg-black px-4 py-2 text-white">
        <button @click="saveCode()">
          <div class="i-tabler-device-floppy h-6 w-6" />
        </button>
        <button @click="newCode">
          <div class="i-tabler-file-plus h-6 w-6" />
        </button>
        <button @click="editCode">
          <div class="i-tabler-file-pencil h-6 w-6" />
        </button>
      </div>
      <textarea v-model="code" class="h-full w-full resize-none rounded-xl px-4 py-4 placeholder-text-[#646464]" placeholder="// enter code here" />
    </div>
  </div>
</template>

<style scoped>

</style>
