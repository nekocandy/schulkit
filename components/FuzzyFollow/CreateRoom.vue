<script setup lang="ts">
async function createRoom() {
  const realmApp = useRealmApp()
  const user = realmApp.currentUser

  // eslint-disable-next-line no-alert
  const name = prompt('Enter room name')

  const roomsCollection = useCollection('rooms')

  const insertedId = await roomsCollection.insertOne({
    name: 'test',
    owner: user!.id,
    createdAt: new Date(),
    updatedAt: new Date(),
  })

  // eslint-disable-next-line no-alert
  alert(`Inserted id: ${insertedId.insertedId}`)
}
</script>

<template>
  <button class="bg-[#ffcc00] px-4 py-2 text-black" @click="createRoom">
    Create Room
  </button>
</template>

<style scoped>

</style>
