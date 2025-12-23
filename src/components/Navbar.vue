<template>
  <nav class="sticky top-0 z-50 bg-white shadow">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <!-- Logo + Name -->
      <RouterLink to="/" class="flex items-center space-x-3">
        <img :src="logo" alt="Logo" class="h-10 w-10 object-contain" />
        <span class="text-2xl font-bold text-blue-600">ApexSoft Solutions</span>
      </RouterLink>

      <!-- Desktop Menu -->
      <div class="hidden items-center space-x-6 font-medium md:flex">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="hover:text-blue-600"
          active-class="text-blue-600 font-semibold"
          exact-active-class="text-blue-600 font-semibold"
        >
          {{ link.label }}
        </RouterLink>
      </div>

      <!-- Mobile Menu Button -->
      <button class="md:hidden" @click="toggleMenu">
        <svg
          v-if="!isOpen"
          class="h-7 w-7 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          class="h-7 w-7 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide">
      <div v-if="isOpen" class="space-y-4 bg-white px-6 py-4 md:hidden">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          @click="closeMenu"
          class="block hover:text-blue-600"
          active-class="text-blue-600 font-semibold"
          exact-active-class="text-blue-600 font-semibold"
        >
          {{ link.label }}
        </RouterLink>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import logo from '../assets/Logo_Apex.jpg'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
  { label: 'Portfolio', to: '/portfolio' }
]

const isOpen = ref(false)
const toggleMenu = () => (isOpen.value = !isOpen.value)
const closeMenu = () => (isOpen.value = false)
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
