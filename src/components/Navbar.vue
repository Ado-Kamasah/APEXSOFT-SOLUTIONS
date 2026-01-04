<template>
  <nav
    class="fixed top-0 z-50 w-full transition-all duration-300"
    :class="{ 'bg-white/80 backdrop-blur-md shadow-sm': isScrolled, 'bg-transparent text-white': !isScrolled }"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <!-- Logo + Name -->
      <RouterLink to="/" class="flex items-center space-x-3 group">
        <div class="relative overflow-hidden rounded-lg bg-white p-1">
             <img :src="logo" alt="Logo" class="h-10 w-10 object-contain transition-transform group-hover:scale-110" />
        </div>
        <span
          class="text-2xl font-bold transition-colors"
          :class="isScrolled ? 'text-blue-900' : 'text-white'"
        >
          ApexSoft
        </span>
      </RouterLink>

      <!-- Desktop Menu -->
      <div class="hidden items-center space-x-8 font-medium md:flex">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="relative text-sm uppercase tracking-wider transition-colors hover:text-blue-500"
          :class="isScrolled ? 'text-gray-700' : 'text-gray-100'"
          active-class="font-bold text-blue-500"
        >
          {{ link.label }}
        </RouterLink>
        <RouterLink to="/contact" class="rounded-full bg-blue-600 px-6 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700 hover:shadow-xl">
            Get a Quote
        </RouterLink>

      </div>

      <!-- Mobile Menu Button -->
      <button class="md:hidden" @click="toggleMenu">
        <svg
          class="h-7 w-7 transition-colors"
          :class="isScrolled || isOpen ? 'text-black' : 'text-white'"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            v-if="!isOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div v-if="isOpen" class="absolute left-0 top-full w-full bg-white/95 backdrop-blur-xl shadow-xl px-6 py-6 md:hidden">
        <div class="flex flex-col space-y-4">
            <RouterLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            @click="closeMenu"
            class="text-lg font-medium text-gray-800 hover:text-blue-600"
            active-class="text-blue-600 font-bold"
            >
            {{ link.label }}
            </RouterLink>
             <RouterLink to="/contact" @click="closeMenu" class="block w-full text-center rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold">
                Get a Quote
            </RouterLink>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import logo from '../assets/Logo_Apex.jpg'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
  { label: 'Portfolio', to: '/portfolio' }
]

const isOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => (isOpen.value = !isOpen.value)
const closeMenu = () => (isOpen.value = false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
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
