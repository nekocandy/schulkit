<script setup lang="ts">
import { BSON } from 'realm-web'

const emit = defineEmits(['startTracking'])
const { $toast } = useNuxtApp()

async function createRoom() {
  const realmApp = useRealmApp()
  const user = realmApp.currentUser

  // eslint-disable-next-line no-alert
  const roomId = prompt('Enter room ID')

  if (!roomId)
    return

  const roomsCollection = useCollection('rooms')

  const objectId = await roomsCollection.findOne({
    _id: new BSON.ObjectId(roomId!),
  })

  if (!objectId) {
    // eslint-disable-next-line no-alert
    alert('Room not found')
    return
  }

  $toast.success(`Found room with ID: ${objectId._id}, joining!`)

  emit('startTracking', objectId._id, objectId.pdfURL)
}
</script>

<template>
  <button class="rounded-md bg-[#88ef37] px-4 py-2 text-black" @click="createRoom">
    Join Room
  </button>
</template>

<style scoped>

</style>
