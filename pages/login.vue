<script setup lang="ts">
definePageMeta({
  layout: 'login',
})

const username = ref('')
const password = ref('')

const isLogin = ref(true)
</script>

<template>
  <div class="absolute bottom-0 left-0 right-0 top-0 grid grid-cols-12 h-screen w-full gap-8 bg-[#ffcc00] font-arvo">
    <div class="col-span-5 h-full w-full flex flex-col items-center justify-center gap-12 border-r-15 border-[#2c37d8] rounded-r-3xl bg-white">
      <div class="text-6xl font-bold">
        Schulkit
      </div>

      <div
        class="flex flex-col items-center justify-center gap-8 border-2 border-black rounded-xl border-solid px-8 py-8"
      >
        <div class="flex items-center justify-center">
          <img class="h-32 w-32 rounded-full bg-yellow" src="https://cdn.discordapp.com/attachments/1111681242803482699/1111683198854909952/Login_Pfp.png" alt="login">
        </div>

        <div class="flex flex-col gap-2">
          <input
            v-model="username"
            type="text" placeholder="Email" class="rounded-full bg-[#2C37D8] px-4 py-1 font-serif text-white placeholder-text-white"
          >
          <input
            v-model="password"
            type="password" placeholder="Password" class="rounded-full bg-[#2C37D8] px-4 py-1 font-serif text-white placeholder-text-white"
          >
        </div>

        <div class="w-full">
          <button class="w-full rounded-full bg-black px-8 py-2 text-white hover:(bg-opacity-95)">
            <span v-if="isLogin">
              Login
            </span>

            <span v-else>
              Register
            </span>
          </button>
        </div>

        <button class="cursor-pointer text-xs underline hover:decoration-double" @click="isLogin = !isLogin">
          <span v-if="isLogin">
            Register?
          </span>
          <span v-else>
            Login?
          </span>

          <div class="" />
        </button>
      </div>
    </div>

    <!-- quote -->
    <div class="col-span-7 h-full w-full">
      hi
    </div>
  </div>
</template>

<style scoped>

</style>
