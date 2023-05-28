<script setup lang="ts">
import { Credentials } from 'realm-web'

const { $toast } = useNuxtApp()
const username = ref('')
const password = ref('')

const isLogin = ref(true)

const realmApp = useRealmApp()

async function loginUser() {
  try {
    await realmApp.logIn(Credentials.emailPassword(username.value, password.value))
    $toast.success('User logged in successfully!')
    navigateTo('/')
  }
  catch (error: any) {
    $toast.error(`Error creating user - ${error.toString()}`)
  }
}

async function createUser() {
  try {
    await realmApp.emailPasswordAuth.registerUser({ email: username.value, password: password.value })
    $toast.success('User created successfully, check your email for confirmation!')
  }
  catch (error: any) {
    $toast.error(`Error creating user - ${error.toString()}`)
  }
}

async function handleButtonClick() {
  if (isLogin.value)
    await loginUser()

  else
    await createUser()
}

watch(isLogin, () => {
  username.value = ''
  password.value = ''
})
</script>

<template>
  <div class="absolute bottom-0 left-0 right-0 top-0 z-10 grid grid-cols-12 h-screen w-full gap-8 bg-[#ffcc00] font-arvo">
    <div class="relative col-span-5 h-full w-full flex flex-col items-center justify-center gap-12 border-r-15 border-[#2c37d8] rounded-r-3xl bg-white">
      <div absolute right-0 top-16 class="-mr-30.5">
        <svg class="h-12" viewBox="0 0 208 82" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M208 2.25995V7.62939e-06L3.58433e-06 0L0 82L208 82V79.7401C206.996 79.6438 205.995 79.2339 205.134 78.4498L168.061 44.6972C165.882 42.7138 165.882 39.2862 168.061 37.3028L205.134 3.55017C205.995 2.76613 206.996 2.35623 208 2.25995Z" fill="#F22C2C" />
        </svg>
      </div>

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
          <button class="w-full rounded-full bg-black px-8 py-2 text-white hover:(bg-opacity-95)" @click="handleButtonClick">
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
    <div class="z-10 col-span-7 h-full w-full flex flex-col items-center justify-center">
      <div class="relative w-4/6 flex flex-col gap-8 rounded-xl bg-[#ffe168] px-10 px-30 py-20 text-left font-arvo">
        <div class="text-left text-3xl font-bold">
          <div>Manage your school,</div>
          <span>the Schul way!</span>
        </div>

        <div class="text-sm text-[#695400]">
          A toolkit specifically designed to help you with studies,  manage notes and keep track for your assignments, tests as well as many other things!
        </div>

        <div class="text-left text-sm text-[#695400]">
          Hop on to see what is it all about.
        </div>

        <!-- icons -->
        <img class="absolute left-0 top-12 z-10 inline-block h-20 w-20 -ml-10 -rotate-30" src="/login/15.svg">
        <img class="absolute bottom-20 left-0 h-20 w-20 -z-1 -ml-10 -rotate-90" src="/login/14.svg">
        <img class="absolute bottom-0 left-0 h-20 w-20 -z-1 -mb-14 -ml-1" src="/login/17.svg">
        <img class="absolute bottom-0 right-0 z-20 h-20 w-20 rotate-30 -mb-14" src="/login/13.svg">
        <img class="absolute bottom-1/2 right-0 top-1/2 h-20 w-20 -z-20 -mr-10" src="/login/16.svg">
        <img class="absolute right-0 top-0 z-20 h-20 w-20 rotate-33 -mr-8 -mt-8" src="/login/12.svg">
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
