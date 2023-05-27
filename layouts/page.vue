<script setup lang="ts">
</script>

<template>
  <div class="bg-white">
    <div class="mx-auto h-screen max-w-7xl flex flex-col gap-2 py-6">
      <div class="flex-1">
        <slot />
      </div>

      <div>
        <BottomBar />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
