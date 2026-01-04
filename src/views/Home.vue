<template>
  <div>
    <!-- Hero Slider -->
    <HeroSlider />

    <!-- Why Us Section (Quick Intro) -->
    <section class="bg-gray-50 py-20 transition-colors duration-300">
      <div class="mx-auto max-w-7xl px-6">
        <div class="grid gap-12 md:grid-cols-2 items-center">
            <div data-aos="fade-right">
                <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Why Choose ApexSoft?</h2>
                <p class="mb-6 text-lg text-gray-600">
                    We combine technical expertise with creative design to deliver solutions that are not just functional, but exceptional.
                </p>
                <ul class="space-y-4">
                    <li class="flex items-center space-x-3 text-gray-700">
                        <span class="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600">✓</span>
                        <span>Tailored Digital Solutions</span>
                    </li>
                    <li class="flex items-center space-x-3 text-gray-700">
                        <span class="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600">✓</span>
                        <span>Modern & Responsive Design</span>
                    </li>
                    <li class="flex items-center space-x-3 text-gray-700">
                        <span class="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600">✓</span>
                        <span>Reliable Support & Maintenance</span>
                    </li>
                </ul>
            </div>
             <div class="relative" data-aos="fade-left">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team" class="rounded-2xl shadow-2xl" />
                <div class="absolute -bottom-6 -left-6 rounded-xl bg-white p-6 shadow-xl hidden md:block">
                    <div class="flex items-center space-x-4">
                        <div class="text-4xl font-bold text-blue-600">5+</div>
                        <div class="text-sm font-medium text-gray-600">Years of<br>Excellence</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section class="mx-auto max-w-7xl px-6 py-24 bg-white transition-colors duration-300">
      <div class="mb-16 text-center" data-aos="fade-up">
          <span class="mb-2 block text-sm font-bold uppercase tracking-wider text-blue-600">Our Portfolio</span>
          <h2 class="text-3xl font-bold text-gray-900 md:text-5xl">Recent Works</h2>
      </div>

      <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl"
          :data-aos="index % 2 === 0 ? 'fade-up' : 'fade-up'"
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
            <h3 class="mb-2 text-xl font-bold text-gray-900">{{ project.title }}</h3>
            <p class="mb-4 text-gray-600 line-clamp-2">{{ project.description }}</p>
            <router-link to="/portfolio" class="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700">
                View Details
                <svg class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </router-link>
          </div>
        </div>
      </div>
       <div class="mt-12 text-center">
        <router-link
          to="/portfolio"
          class="inline-block rounded-full border-2 border-blue-600 px-8 py-3 text-sm font-bold uppercase tracking-wider text-blue-600 transition hover:bg-blue-600 hover:text-white"
        >
          View All Projects
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeroSlider from '../components/HeroSlider.vue'

const projects = [
  {
    id: 1,
    title: 'Modern School Portal',
    description: 'A comprehensive academic management system for schools.',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Church Connect',
    description: 'Community platform for churches with live streaming.',
    image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Business Analytics App',
    description: 'Mobile solution for tracking business insights on the go.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
]
</script>
