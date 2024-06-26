<template>
    <div>
      <LoaderComponent v-if="loading" />
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div
          class="bg-white border border-gray-200 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between"
          v-for="(product, index) in products"
          :key="index"
        >
          <a href="#" class="flex items-center justify-center">
            <img class="p-8 rounded-t-lg h-40 w-full object-cover" :src="product.image" alt="product image" />
          </a>
          <div class="px-5 pb-5 flex flex-col flex-grow">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {{ product.title }}
              </h5>
            </a>
            <div class="flex items-center mt-2.5 mb-5">
              <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <div v-for="(rate, index) in [1, 2, 3, 4, 5]" :key="index">
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                </div>
              </div>
              <span
                class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3"
                >{{ product.rating.rate }}</span
              >
            </div>
            <div class="flex items-center justify-between mt-auto">
              <span class="text-3xl font-bold text-gray-900 dark:text-white">${{ product.price }}</span>
              <RouterLink
                :to="`/products/${product.id}`"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >Add to cart</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { RouterLink } from 'vue-router'
  import LoaderComponent from './LoaderComponent.vue'
  
  defineProps(['products'])
  const loading = ref(true)
  
  // Simulate data fetching
  onMounted(() => {
    setTimeout(() => {
      loading.value = false
    }, 2000) // Adjust the timeout as needed
  })
  </script>
  
  <style>
  /* Custom styles for the product card */
  </style>
  