<script setup lang="ts">
const address = "123 Sunset Boulevard, Los Angeles, CA 90028";
const phone = "(323) 555-0123";
const hours = {
  weekdays: "11:00 AM - 10:00 PM",
  weekends: "10:00 AM - 11:00 PM",
};
</script>

<template>
  <div id="contact" class="relative bg-gray-900 text-white py-20 overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-black/70 z-10"></div>
      <img
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80"
        alt="Restaurant Interior"
        class="w-full h-full object-cover"
      />
    </div>

    <div class="relative max-w-6xl mx-auto px-4 z-20">
      <h2 class="text-4xl font-bold text-center mb-4">Visit Us</h2>
      <p class="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
        Come experience the taste of Colombia in the heart of Los Angeles
      </p>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Address -->
        <div
          class="bg-black/30 backdrop-blur-sm rounded-lg p-6 hover:bg-black/40 transition-colors"
        >
          <div class="flex items-center mb-4">
            <svg
              class="w-6 h-6 text-colombia-red mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <h3 class="text-xl font-bold">Location</h3>
          </div>
          <p>{{ address }}</p>
        </div>

        <!-- Hours -->
        <div
          class="bg-black/30 backdrop-blur-sm rounded-lg p-6 hover:bg-black/40 transition-colors"
        >
          <div class="flex items-center mb-4">
            <svg
              class="w-6 h-6 text-colombia-red mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 class="text-xl font-bold">Hours</h3>
          </div>
          <p class="mb-2">Mon-Fri: {{ hours.weekdays }}</p>
          <p>Sat-Sun: {{ hours.weekends }}</p>
        </div>

        <!-- Contact -->
        <div
          class="bg-black/30 backdrop-blur-sm rounded-lg p-6 hover:bg-black/40 transition-colors"
        >
          <div class="flex items-center mb-4">
            <svg
              class="w-6 h-6 text-colombia-red mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <h3 class="text-xl font-bold">Contact</h3>
          </div>
          <p>{{ phone }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
