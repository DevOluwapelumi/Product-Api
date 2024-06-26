import axios from 'axios'
import { defineStore } from 'pinia'

const url = 'https://fakestoreapi.com/products'

export const useProductAPI = defineStore('productAPI', {
  state: () => ({
    products: []
  }),
  actions: {
    async fetchProducts() {
      try {
        const response = await axios.get(url)
        this.products = response.data
      } catch (error) {
        console.log('Error fetching products', error)
      }
    }
  }
})