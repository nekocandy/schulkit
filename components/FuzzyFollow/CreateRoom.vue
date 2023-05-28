<script setup lang="ts">
async function createRoom() {
  const realmApp = useRealmApp()
  const user = realmApp.currentUser

  // eslint-disable-next-line no-alert
  const name = prompt('Enter room name')
  // eslint-disable-next-line no-alert
  const pdfURL = prompt('Enter PDF URL', 'https://cdn.discordapp.com/attachments/1112321327626473572/1112321375911292938/Compiler_Design_Lab_Manual.pdf')

  const roomsCollection = useCollection('rooms')

  const insertedId = await roomsCollection.insertOne({
    name,
    pdfURL,
    owner: user!.id,
    currentPage: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  })

  // eslint-disable-next-line no-alert
  alert(`Inserted id: ${insertedId.insertedId}`)
}
</script>

<template>
  <button class="rounded-md bg-[#ffcc00] px-4 py-2 text-black" @click="createRoom">
    Create Room
  </button>
</template>

<style scoped>

</style>
