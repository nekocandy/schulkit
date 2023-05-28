<script setup lang="ts">
import { BSON } from 'realm-web'

definePageMeta({
  layout: 'page',
})
const route = useRoute()
const realmApp = useRealmApp()
const highlighter = await useHighlighter()
const code = ref('')
const isViewMode = ref(false)
const htmlCode = ref('')

const documentCode = computed(() => route.query.code)

async function saveCode() {
  const codeCollection = useCollection('codes')

  const insertedDocument = await codeCollection.insertOne({
    code: code.value,
    userId: realmApp.currentUser!.id,
    createdAt: new Date(),
  })

  navigateTo({
    query: {
      code: insertedDocument.insertedId.toString(),
    },
  })

  isViewMode.value = true
  htmlCode.value = highlighter.codeToHtml(code.value, {})
}

async function newCode() {

}

async function editCode() {

}

onBeforeMount(() => {
  if (!realmApp.currentUser)
    console.error('User not logged in')
})

onMounted(async () => {
  if (documentCode) {
    const codeCollection = useCollection('codes')
    const document = await codeCollection.findOne({ _id: new BSON.ObjectId(documentCode.value?.toString()) })
    code.value = document.code
    isViewMode.value = true

    htmlCode.value = highlighter.codeToHtml(code.value, {})
  }
})
</script>

<template>
  <div class="h-full w-full flex flex-col gap-4 pb-2">
    <div class="pb-0 pt-4 text-3xl font-bold">
      mem.txt
    </div>

    <div class="relative h-full rounded-xl bg-[#ffcc00] px-8 py-8">
      <div class="absolute right-8 top-8 z-20 flex items-center gap-2 border rounded-bl-xl rounded-tr-xl bg-black px-4 py-2 text-white">
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
      <div class="relative h-full w-full">
        <div v-if="isViewMode" class="absolute bottom-0 left-0 right-0 top-0 h-full w-full">
          <div class="h-full rounded-xl" v-html="htmlCode" />
        </div>
        <textarea v-else v-model="code" class="h-full w-full resize-none rounded-xl px-4 py-4 placeholder-text-[#646464]" placeholder="// enter code here" />
      </div>
    </div>
  </div>
</template>

<style>
.shiki {
  @apply h-full w-full flex-1 px-4 py-4 rounded-xl;
}
</style>
