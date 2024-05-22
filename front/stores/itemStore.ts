// stores/itemStore.ts
import { defineStore } from 'pinia'
import axios from 'axios'

interface Item {
  id: string;
  name: string;
  subitems?: Subitem[];
}

interface Subitem {
  id: string;
  name: string;
}

export const useItemStore = defineStore('itemStore', {
  state: () => ({
    items: [] as Item[],
    subitems: [] as Subitem[],
  }),
  actions: {
    async fetchItems() {
      try {
        const response = await axios.get<Item[]>('http://localhost:3000/items')
        this.items = response.data
      } catch (error) {
        console.error('Failed to fetch items:', error)
      }
    },
    async fetchSubitems(itemId: string) {
      try {
        const response = await axios.get<Subitem[]>(`http://localhost:3000/items/${itemId}/subitems`)
        this.subitems = response.data
      } catch (error) {
        console.error('Failed to fetch subitems:', error)
      }
    }
  }
})