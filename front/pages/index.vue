<script>
  
import { onMounted } from 'vue'
import { useItemStore } from '~/stores/itemStore'

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
</script>

<template>
    <NuxtWelcome/>
</template>