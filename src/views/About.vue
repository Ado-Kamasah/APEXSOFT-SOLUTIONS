<template>
  <div>
    <!-- Hero / Header for About -->
    <div class="relative bg-blue-900 py-24 text-center text-white">
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-700 opacity-20 blur-3xl"></div>
            <div class="absolute top-1/2 right-0 h-64 w-64 rounded-full bg-purple-600 opacity-20 blur-3xl"></div>
        </div>
        <div class="relative z-10 px-6">
            <h1 class="mb-4 text-4xl font-bold md:text-5xl" data-aos="fade-down">About ApexSoft</h1>
            <p class="text-xl text-blue-100" data-aos="fade-up" data-aos-delay="200">Driving Innovation, Delivering Excellence.</p>
        </div>
    </div>

    <!-- Main Content -->
    <section class="mx-auto max-w-7xl px-6 py-20">
      <div class="grid items-center gap-16 md:grid-cols-2">
        <!-- Text Content -->
        <div data-aos="fade-right">
          <h2 class="mb-6 text-3xl font-bold text-gray-900">Who We Are</h2>
          <div class="space-y-6 text-lg text-gray-600">
            <p>
              ApexSoft Solutions is a premier IT firm dedicated to bridging the gap between complex technology and user-friendly solutions.
              Specializing in full-stack development, UI/UX design, and technical support, we serve a diverse clientele ranging from educational institutions to corporate businesses.
            </p>
            <p>
              Founded with a passion for digital transformation, we believe that every business deserves a digital presence that is as unique as its brand.
              Our team of expert developers and designers work tirelessly to bring your vision to life.
            </p>
          </div>
          
          <div class="mt-8 grid grid-cols-2 gap-6">
             <div class="rounded-lg bg-blue-50 p-4 text-center">
                <span class="block text-3xl font-bold text-blue-600">100+</span>
                <span class="text-sm font-medium text-gray-600">Projects Completed</span>
             </div>
             <div class="rounded-lg bg-blue-50 p-4 text-center">
                <span class="block text-3xl font-bold text-blue-600">98%</span>
                <span class="text-sm font-medium text-gray-600">Client Satisfaction</span>
             </div>
          </div>
        </div>

        <!-- Image Grid -->
        <div class="relative" data-aos="fade-left">
           <div class="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Team working"
                class="rounded-2xl shadow-lg mb-8"
              />
               <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Meeting"
                class="rounded-2xl shadow-lg mt-8"
              />
           </div>
           <!-- Decorative blob -->
            <div class="absolute -z-10 top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-blue-100 blur-3xl opacity-50"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>
