<template>
  <section class="mx-auto max-w-3xl px-6 py-20">
    <h2 class="mb-12 text-center text-3xl font-semibold">Contact Us</h2>

    <form class="space-y-6 rounded-xl bg-white p-8 shadow">
      <div>
        <label class="mb-2 block font-medium">Name</label>
        <input
          type="text"
          placeholder="Your Name"
          class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label class="mb-2 block font-medium">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label class="mb-2 block font-medium">Message</label>
        <textarea
          placeholder="Your Message"
          class="h-32 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        ></textarea>
      </div>

      <button
        type="submit"
        class="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Send Message
      </button>
    </form>
  </section>
</template>

<script setup>
</script>
