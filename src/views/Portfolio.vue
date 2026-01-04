<template>
  <div class="min-h-screen bg-white pt-24 pb-20 transition-colors duration-300">
    <!-- Header -->
    <div class="mb-12 text-center px-6" data-aos="fade-down">
      <h1 class="text-4xl font-bold text-gray-900 md:text-5xl">Our Works</h1>
      <p class="mt-4 text-xl text-gray-600">A showcase of our best projects and digital solutions.</p>
    </div>

    <!-- Categories (Filter) -->
    <div class="mb-12 flex flex-wrap justify-center gap-4 px-6" data-aos="fade-up" data-aos-delay="100">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="currentCategory = category"
          class="rounded-full px-6 py-2 font-semibold transition shadow-md"
          :class="currentCategory === category ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
        >
          {{ category }}
        </button>
    </div>

    <!-- Projects Grid -->
    <section class="mx-auto max-w-7xl px-6">
      <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        <transition-group name="list">
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          class="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="aspect-video overflow-hidden">
             <img
                :src="project.image"
                :alt="project.title"
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
             />
          </div>
          <div class="p-6">
            <div class="mb-2 flex items-center justify-between">
                <span class="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600 uppercase tracking-wide">{{ project.category }}</span>
            </div>
            <h3 class="mb-2 text-xl font-bold text-gray-900">{{ project.title }}</h3>
            <p class="mt-2 line-clamp-2 text-gray-600">{{ project.description }}</p>
          </div>
        </div>
        </transition-group>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentCategory = ref('All')
const categories = ['All', 'Website', 'Mobile App', 'Branding']

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
  },
  {
    id: 7,
    title: 'Fitness Tracker Pro',
    description: 'Cross-platform mobile app for tracking workouts and nutrition.',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 8,
    title: 'Corporate Identity Pack',
    description: 'Full brand identity design for a financial services firm.',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 9,
    title: 'Restaurant Ordering System',
    description: 'Online food ordering and delivery management system.',
    category: 'Website',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 10,
    title: 'Travel Companion',
    description: 'AI-powered travel itinerary planner app.',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 11,
    title: 'Tech Startup Branding',
    description: 'Logo, color palette, and marketing materials for a new AI startup.',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
    {
    id: 12,
    title: 'Real Estate Platform',
    description: 'Property listing and virtual tour website.',
    category: 'Website',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
]

const filteredProjects = computed(() => {
  if (currentCategory.value === 'All') return projects
  return projects.filter(project => project.category === currentCategory.value)
})
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
