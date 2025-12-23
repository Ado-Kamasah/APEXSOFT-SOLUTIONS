<template>
  <section class="relative flex min-h-screen items-center justify-center text-white">
    <!-- Subtle logo background -->
    <div
      class="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-60"
      :style="{ backgroundImage: `url(${heroImage})` }"
    ></div>

    <!-- Gradient overlay -->
    <div class="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-700 opacity-80"></div>

    <!-- Content -->
    <div class="relative z-10 max-w-3xl px-6 text-center">
      <h1 class="mb-6 text-4xl font-bold md:text-6xl">
        We Build Digital Solutions
      </h1>
      <p class="mb-8 text-lg md:text-xl">
        Websites, mobile apps, UI/UX designs, and system repairs for
        schools, businesses, churches, and individuals.
      </p>

      <div class="flex flex-col justify-center gap-4 sm:flex-row">
        <router-link
          to="/contact"
          class="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition hover:opacity-90"
        >
          Contact Us
        </router-link>
        <router-link
          to="/portfolio"
          class="rounded-lg border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-blue-700"
        >
          View Work
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import heroImage from '../assets/Logo_Apex.jpg'
</script>

<style scoped>
h1 {
  animation: fadeInUp 1s ease forwards;
  opacity: 0;
}
p {
  animation: fadeInUp 1.2s ease forwards;
  opacity: 0;
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
