<template>
  <section class="mx-auto max-w-7xl px-6 py-20">
    <h2 class="mb-12 text-center text-3xl font-semibold">Our Services</h2>

    <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
      <div
        v-for="service in services"
        :key="service.id"
        class="rounded-xl bg-white p-6 text-center shadow transition hover:shadow-xl"
      >
        <img :src="service.icon" alt="" class="mx-auto mb-4 h-20 w-20"/>
        <h3 class="mb-2 text-xl font-semibold">{{ service.title }}</h3>
        <p class="text-gray-600">{{ service.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    id: 1,
    title: 'Website Development',
    description: 'Responsive and modern websites for all types of businesses.',
    icon: 'https://via.placeholder.com/80?text=Web'
  },
  {
    id: 2,
    title: 'Mobile Apps',
    description: 'Android and iOS applications to reach your audience everywhere.',
    icon: 'https://via.placeholder.com/80?text=App'
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Clean and intuitive designs to enhance user experience.',
    icon: 'https://via.placeholder.com/80?text=Design'
  },
  {
    id: 4,
    title: 'System Repairs',
    description: 'Fixing and optimizing systems for maximum efficiency.',
    icon: 'https://via.placeholder.com/80?text=Repair'
  },
  {
    id: 5,
    title: 'Consulting',
    description: 'Expert advice to grow your digital presence.',
    icon: 'https://via.placeholder.com/80?text=Consult'
  },
  {
    id: 6,
    title: 'Entertainment Solutions',
    description: 'Custom solutions for entertainment companies and events.',
    icon: 'https://via.placeholder.com/80?text=Fun'
  }
]
</script>
