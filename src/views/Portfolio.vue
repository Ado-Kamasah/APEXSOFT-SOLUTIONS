<template>
  <div class="min-h-screen bg-white pt-24 pb-20">
    <!-- Header -->
    <div class="mb-12 text-center px-6" data-aos="fade-down">
      <h1 class="text-4xl font-bold text-gray-900 md:text-5xl">Our Works</h1>
      <p class="mt-4 text-xl text-gray-600">A showcase of our best projects and digital solutions.</p>
    </div>

    <!-- Categories (Simulated Filter) -->
    <div class="mb-12 flex flex-wrap justify-center gap-4 px-6" data-aos="fade-up" data-aos-delay="100">
        <button class="rounded-full bg-blue-600 px-6 py-2 font-semibold text-white shadow-md transition hover:bg-blue-700">All</button>
        <button class="rounded-full bg-gray-100 px-6 py-2 font-semibold text-gray-600 transition hover:bg-gray-200">Websites</button>
        <button class="rounded-full bg-gray-100 px-6 py-2 font-semibold text-gray-600 transition hover:bg-gray-200">Mobile Apps</button>
        <button class="rounded-full bg-gray-100 px-6 py-2 font-semibold text-gray-600 transition hover:bg-gray-200">Branding</button>
    </div>

    <!-- Projects Grid -->
    <section class="mx-auto max-w-7xl px-6">
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="group relative overflow-hidden rounded-xl shadow-lg"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <!-- Image -->
          <div class="aspect-[4/3] w-full overflow-hidden">
             <img
                :src="project.image"
                :alt="project.title"
                class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
             />
          </div>
          
          <!-- Overlay Content -->
          <div class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span class="mb-2 text-sm font-bold uppercase tracking-wider text-blue-400">{{ project.category }}</span>
            <h3 class="text-2xl font-bold text-white">{{ project.title }}</h3>
            <p class="mt-2 line-clamp-2 text-gray-200">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const projects = [
  {
    id: 1,
    title: 'Modern School Portal',
    description: 'A comprehensive academic management system for high schools with student portals.',
    category: 'Website',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Church Connect App',
    description: 'Community platform for churches featuring live streaming, donations, and events.',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Business Analytics Dashboard',
    description: 'Real-time analytics dashboard for small businesses to track sales and growth.',
    category: 'Website',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'HealthPlus Mobile',
    description: 'Patient management application for clinics and hospitals.',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'E-Commerce Redesign',
    description: 'Complete UI/UX overhaul for a major fashion retailer.',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1472851294608-415522f96319?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'Event Ticketing System',
    description: 'Platform for booking and managing tickets for large scale events.',
    category: 'Website',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
]
</script>
