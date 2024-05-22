<script setup lang="ts">
import { onMounted } from 'vue'
import { useItemStore } from '~/stores/itemStore'
import { UTable } from '@nuxt/ui'

const store = useItemStore()

onMounted(async () => {
  await store.fetchItems()
  // Fetch subitems for the first item
  if (store.items.length > 0) {
    for (const item of store.items) {
        await store.fetchSubitems(item.id)
    }
  }
})
const columns = [{
  key: 'id',
  label: '#'
}, {
  key: 'quantity',
  label: 'Quantity',
  class: 'italic'
}, {
  key: 'name',
  label: 'Name'
}]

const items = [{
    id: 1,
    quantity: 2,
    name: 'Item 1'
    }, {
    id: 2,
    quantity: 1,
    name: 'Item 2'
    }, {
    id: 3,
    quantity: 3,
    name: 'Item 3'
    }]
</script>

<template>
  <div>
    <UTable :rows="items" :columns="columns"> </UTable>
  </div>
</template>