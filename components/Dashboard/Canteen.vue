<script setup lang="ts">
import { faker } from '@faker-js/faker'

const foodItemsList = [
  'Chicken nuggets',
  'Pizza',
  'Spaghetti',
  'Tacos',
  'Hamburgers',
  'Hotdogs',
  'Mac and cheese',
  'Salad',
  'Soup',
  'Grilled cheese sandwich',
  'French fries',
  'Applesauce',
  'Carrots',
  'Peas',
  'Milk',
  'Water',
  'Fruit',
  'Yogurt',
  'Cookies',
  'Ice cream',
  'Pudding',
]

const items = new Array(6).fill(0).map(_ => ({
  id: faker.number.int({
    min: 10,
    max: 99,
  }),
  item: faker.helpers.arrayElement(foodItemsList),
}))

const foodItems = ref(items)
</script>

<template>
  <div class="w-full flex flex-col rounded-xl bg-[#88e042] text-white">
    <div class="flex items-center justify-between rounded-t-xl bg-[#457b1b] px-6 py-3">
      <div class="i-mdi-noodles h-6 w-6" />
      <div>Canteen Food Availability</div>
    </div>

    <div class="grid grid-cols-2 gap-2 px-6 py-4 text-black">
      <div v-for="item in foodItems" :key="item.id">
        <div class="w-full flex items-center gap-4">
          <div class="rounded-md bg-[#cbf8a7] px-4 py-2 font-bold text-[#457b1b]">
            {{ item.id }}
          </div>

          <div class="flex">
            <li>
              <div list-disc />
            </li>

            {{ item.item }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
