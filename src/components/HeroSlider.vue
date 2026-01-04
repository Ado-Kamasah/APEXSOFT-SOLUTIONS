<template>
  <div class="relative h-screen w-full overflow-hidden">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      effect="fade"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      :pagination="{ clickable: true }"
      :navigation="true"
      class="h-full w-full"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index" class="relative">
        <!-- Background Image -->
        <div
          class="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear hover:scale-110"
          :style="{ backgroundImage: `url(${slide.image})` }"
        ></div>

        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/50 bg-gradient-to-r from-blue-900/80 to-purple-900/40"></div>

        <!-- Content -->
        <div class="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">
          <div class="max-w-4xl" data-aos="fade-up">
            <h1 class="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              {{ slide.title }}
            </h1>
            <p class="mb-8 text-lg font-light md:text-2xl text-gray-200">
              {{ slide.description }}
            </p>
            <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <router-link
                to="/contact"
                class="rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-blue-700"
              >
                Get Started
              </router-link>
              <router-link
                to="/portfolio"
                class="rounded-full border-2 border-white px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-white hover:text-blue-900"
              >
                View Work
              </router-link>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles are done in main.js

const modules = [Autoplay, EffectFade, Pagination, Navigation];

const slides = [
  {
    title: 'Innovating Digital Solutions',
    description: 'We build modern websites and mobile apps that drive business growth.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  },
  {
    title: 'Expert System Repairs',
    description: 'Fast and reliable repair services for all your computer needs.',
    image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  },
  {
    title: 'Creative UI/UX Design',
    description: 'User-centric designs that offer seamless digital experiences.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  },
];
</script>

<style scoped>
/* Custom swiper styles if needed */
:deep(.swiper-pagination-bullet) {
  background: white;
  opacity: 0.5;
}
:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
  background: #2563eb; /* blue-600 */
}
</style>
