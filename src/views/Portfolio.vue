<template>
  <section class="mx-auto max-w-7xl px-6 py-20">
    <h1 class="mb-12 text-center text-4xl font-bold">
      Our Work
    </h1>

    <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
      <div
        v-for="project in projects"
        :key="project.id"
        class="overflow-hidden rounded-xl bg-white shadow transition hover:shadow-xl dark:bg-gray-800"
      >
        <img
          :src="project.image"
          :alt="project.title"
          class="h-48 w-full object-cover"
        />

        <div class="p-4">
          <h3 class="mb-1 text-xl font-semibold">{{ project.title }}</h3>
          <p class="text-gray-600 dark:text-gray-300">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    id: 1,
    title: 'School Website',
    description: 'Responsive academic website for a modern school.',
    image: 'https://via.placeholder.com/600x400?text=School+Website'
  },
  {
    id: 2,
    title: 'Church Website',
    description: 'Church platform with sermons, events, and donations.',
    image: 'https://via.placeholder.com/600x400?text=Church+Website'
  },
  {
    id: 3,
    title: 'Business Mobile App',
    description: 'Android app for business operations.',
    image: 'https://via.placeholder.com/600x400?text=Business+App'
  },
  {
    id: 4,
    title: 'UI/UX Design',
    description: 'Clean and modern interface design.',
    image: 'https://via.placeholder.com/600x400?text=UI%2FUX+Design'
  }
]
</script>
