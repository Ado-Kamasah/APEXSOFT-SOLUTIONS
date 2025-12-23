<template>
  <div class="flex min-h-screen flex-col">
    <!-- Navbar -->
    <Navbar />

    <!-- Main content -->
    <main class="grow">
  <router-view />
</main>


    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Home from './views/Home.vue'
import Footer from './components/Footer.vue'
</script>
