<template>
<section class="px-6 py-20">
<h2 class="mb-10 text-center text-3xl font-bold">Who We Serve</h2>
<div class="grid gap-6 text-center md:grid-cols-5">
<div v-for="client in clients" :key="client" class="rounded bg-gray-100 p-4">{{ client }}</div>
</div>
</section>
</template>


<script lang="ts" setup>
const clients: string[] = ['Schools', 'Businesses', 'Churches', 'Individuals', 'Entertainment']
</script>