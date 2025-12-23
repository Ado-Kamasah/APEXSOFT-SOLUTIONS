<template>
  <section class="mb-2 bg-gray-900 px-25 py-10 text-white">
    <h2 class="mb-10 text-center text-3xl font-bold">
      Why Choose Us
    </h2>

    <ul class="grid gap-8 text-center md:grid-cols-4">
      <li v-for="point in points" :key="point">
        ✔ {{ point }}
      </li>
    </ul>
  </section>
</template>

<script setup>
const points = [
  'Skilled Developers & Designers',
  'Affordable Pricing',
  'Reliable Support',
  'Modern Technologies'
]
</script>
