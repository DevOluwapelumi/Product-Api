<template>
  <HeaderComponent />
  <div class="p-5">
    <div v-if="products" class="flex items-center justify-evenly gap-3 flex-wrap">
      <CardComponent :products="products" />
    </div>
    <div v-else>
      <div
        class="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
      >
        <div
          class="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200"
        >
          loading...
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductAPI } from '@/stores/productAPI'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import CardComponent from './components/CardComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'

const store = useProductAPI()
const { products } = storeToRefs(store)

onMounted(() => {
  store.fetchProducts()
})
</script>

<style></style>