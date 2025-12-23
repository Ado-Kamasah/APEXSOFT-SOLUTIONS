<template>
  <section class="bg-gray-50 px-6 py-20 dark:bg-gray-900">
    <h2 class="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
      Our Services
    </h2>

    <div class="grid gap-8 md:grid-cols-4">
      <div
        v-for="(service, i) in services"
        :key="service.title"
        ref="items"
        class="translate-y-6 transform rounded-xl bg-white p-6 opacity-0 shadow transition duration-700 dark:bg-gray-800"
      >
        <h3 class="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{{ service.title }}</h3>
        <p class="text-gray-600 dark:text-gray-300">{{ service.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const services = [
  { title: 'Website Development', description: 'Modern responsive websites' },
  { title: 'Mobile App Development', description: 'Android & cross-platform apps' },
  { title: 'UI/UX Design', description: 'User-focused designs' },
  { title: 'System Repairs', description: 'Hardware & software support' },
]

const items = ref([])

onMounted(() => {
  items.value.forEach(el => {
    useIntersectionObserver(
      el,
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          el.classList.add('opacity-100', 'translate-y-0')
        }
      },
      { threshold: 0.1 }
    )
  })
})
</script>
