<script setup lang="ts">
const todos = ref<
  {
    title: string
    completed: boolean
  }[]>([])

const todoTitle = ref('')
const isLoading = ref(true)

const realmApp = useRealmApp()

async function fetchTodos() {
  isLoading.value = true
  const collection = useCollection('todos')
  const query = await collection.find({
    userId: realmApp.currentUser?.id,
  })

  isLoading.value = false

  if (!query)
    return

  todos.value = query
}

async function addTodo() {
  const collection = useCollection('todos')
  const query = await collection.insertOne({
    userId: realmApp.currentUser?.id,
    title: todoTitle.value,
    completed: false,
  })

  todoTitle.value = ''

  todos.value.push({
    title: todoTitle.value,
    completed: false,
  })
}

onMounted(async () => {
  await fetchTodos()
})
</script>

<template>
  <div class="h-full w-full flex flex-col rounded-xl bg-[#ffcc00]">
    <div class="flex items-center justify-between rounded-t-xl bg-[#ad8b00] px-6 py-3 text-white">
      <div class="i-tabler-checklist h-6 w-6" />

      <div>
        To-Do List
      </div>
    </div>

    <div class="flex flex-col gap-4 px-6 py-4">
      <div class="flex items-center gap-4">
        <input v-model="todoTitle" class="w-full rounded-md px-2 py-2 text-lg" type="text" placeholder="Add todo">
        <button class="border border-black rounded-full bg-[#ad8b00] p-2" @click="addTodo">
          <div class="i-tabler-plus" />
        </button>
      </div>

      <div v-if="isLoading" class="flex justify-center pt-2 text-zinc-600">
        <div class="i-tabler-circle-dashed h-6 w-6 animate-spin text-zinc-400" />
      </div>
      <div v-else-if="todos.length" class="overflow-y-auto">
        <div v-for="todo in todos" :key="todo.title" class="flex items-center gap-2 rounded-md bg-[#ffeda3] px-4 py-1">
          <div class="rounded-full" @click="todo.completed = !todo.completed">
            <div v-if="todo.completed" class="i-tabler-circle-check-filled h-6 w-6 text-[#eb7373]" />
            <div v-else class="i-tabler-circle-check h-6 w-6 text-[#eb7373]" />
          </div>
          <div>{{ todo.title }}</div>
        </div>
      </div>
      <div v-else class="pt-6 text-center text-zinc-600">
        Nothing here!
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
