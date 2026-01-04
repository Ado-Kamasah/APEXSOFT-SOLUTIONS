<template>
  <div class="bg-gray-50 min-h-screen pt-24 pb-20 transition-colors duration-300">
    <!-- Header -->
    <div class="text-center mb-16 px-6" data-aos="fade-up">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Expertise</h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        We offer a wide range of digital solutions tailored to help you succeed in a connected world.
      </p>
    </div>

    <!-- Services Grid -->
    <section class="max-w-7xl mx-auto px-6">
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(service, index) in services"
          :key="service.id"
          class="relative overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-gradient-to-br hover:from-white hover:to-blue-50"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <!-- Icon Background Blob -->
          <div class="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-blue-100 opacity-50 blur-2xl transition-all group-hover:bg-blue-200"></div>

          <div class="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
             <!-- Using text/emoji as placeholder icons for simplicity, but could be SVG -->
             <span class="text-3xl">{{ service.emoji }}</span>
          </div>

          <h3 class="mb-3 text-xl font-bold text-gray-900">{{ service.title }}</h3>
          <p class="text-gray-600 leading-relaxed">
            {{ service.description }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const services = [
  {
    id: 1,
    title: 'Website Development',
    description: 'Custom, responsive, and SEO-optimized websites designed to showcase your brand effectively.',
    emoji: '💻'
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android devices.',
    emoji: '📱'
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Intuitive and engaging user interfaces that provide exceptional user experiences.',
    emoji: '🎨'
  },
  {
    id: 4,
    title: 'System Repairs & Maintenance',
    description: 'Diagnosis, repair, and optimization of computer systems to keep your business running smoothly.',
    emoji: '🔧'
  },
  {
    id: 5,
    title: 'IT Consulting',
    description: 'Strategic advice on technology adoption and digital transformation for your business.',
    emoji: '💡'
  },
  {
    id: 6,
    title: 'Entertainment Solutions',
    description: 'Digital setups for events, media production, and entertainment businesses.',
    emoji: '🎮'
  }
]
</script>
