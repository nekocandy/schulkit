<script setup lang="ts">
const day = ref(dayjs().format('dddd'))
const time = ref(dayjs().format('hh:mm A'))
const isLogoutLoading = ref(false)

useIntervalFn(() => {
  day.value = dayjs().format('dddd')
  time.value = dayjs().format('hh:mm:ss A')
}, 1000)

const links = [
  {
    name: 'Dashboard',
    path: '/',
    icon: 'i-tabler-home',
  },
  {
    name: 'Fuzzy Follow',
    path: '/fuzzyfollow',
    icon: 'i-tabler-click',
  },
  {
    name: 'Draw',
    path: '/draw',
    icon: 'i-tabler-scribble',
  },
  {
    name: 'Paste',
    path: '/paste',
    icon: 'i-tabler-clipboard-copy',
  },
  {
    name: 'Notice Board',
    path: '/notice-board',
    icon: 'i-tabler-flag-3',
  },
  {
    name: 'TNT',
    path: '/tnt/tests',
    icon: 'i-tabler-bomb',
  },
]

async function logout() {
  isLogoutLoading.value = true
  const realm = useRealmApp()
  const { $toast } = useNuxtApp()

  try {
    await realm.currentUser?.logOut()
    $toast.success('User logged out successfully!')
    navigateTo('/login')
  }
  catch (error: any) {
    $toast.error(`Error logging out user - ${error.toString()}`)
  }
  finally {
    isLogoutLoading.value = false
  }
}

onMounted(() => {
  const realm = useRealmApp()
  const user = realm.currentUser

  const { $toast } = useNuxtApp()
  if (!user) {
    $toast.error('Please login to continue')
    navigateTo('/login')
  }
})
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
      <NuxtLink
        v-for="link in links" :key="link.path" :href="link.path" class="h-full border-b-4 rounded bg-[#414bdc] px-2 py-2 hover:bg-opacity-98" :class="[
          $route.path === link.path ? 'border-white' : 'border-[#000883] ',
        ]"
      >
        <div
          class="h-8 w-8" :class="[
            link.icon,
          ]"
        />
      </NuxtLink>
    </div>

    <div class="flex items-center gap-6">
      <div class="flex flex-col items-center justify-center gap-1">
        <div>{{ day }}</div>
        <div>{{ time }}</div>
      </div>

      <div>
        <button class="rounded-full bg-[#a5a5a5] p-2" @click="logout">
          <div v-if="isLogoutLoading" class="i-tabler-circle-dashed h-8 w-10 animate-spin text-zinc-600" />
          <div v-else class="i-tabler-logout h-8 w-10 text-black" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
