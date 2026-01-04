<template>
  <div class="min-h-screen bg-gray-50 pt-24 pb-20">
    <div class="mx-auto max-w-7xl px-6">
      <div class="grid gap-12 lg:grid-cols-2">
        
        <!-- Contact Information -->
        <div data-aos="fade-right">
          <h1 class="mb-6 text-4xl font-bold text-gray-900">Get in Touch</h1>
          <p class="mb-8 text-lg text-gray-600">
            Have a project in mind or need assistance with your system? We'd love to hear from you.
            Fill out the form or reach out to us directly.
          </p>

          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900">Phone</h3>
                <p class="text-gray-600">+1 (555) 123-4567</p>
                <p class="text-gray-600">+1 (555) 987-6543</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900">Email</h3>
                <p class="text-gray-600">info@apexsoft.com</p>
                <p class="text-gray-600">support@apexsoft.com</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900">Office</h3>
                <p class="text-gray-600">123 Tech Avenue, Silicon District</p>
                <p class="text-gray-600">Accra, Ghana</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="rounded-2xl bg-white p-8 shadow-lg" data-aos="fade-left">
          <form @submit.prevent class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" class="mt-2 block w-full rounded-lg border-gray-300 bg-gray-50 px-4 py-3 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="John Doe">
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" class="mt-2 block w-full rounded-lg border-gray-300 bg-gray-50 px-4 py-3 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="john@example.com">
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">Subject</label>
              <select class="mt-2 block w-full rounded-lg border-gray-300 bg-gray-50 px-4 py-3 text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-200">
                <option>General Inquiry</option>
                <option>Project Proposal</option>
                <option>System Repair</option>
                <option>Technical Support</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">Message</label>
              <textarea rows="4" class="mt-2 block w-full rounded-lg border-gray-300 bg-gray-50 px-4 py-3 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="How can we help you?"></textarea>
            </div>

            <button type="submit" class="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
