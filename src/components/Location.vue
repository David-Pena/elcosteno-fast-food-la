<script setup lang="ts">
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

const locationRef = ref(null);
const isVisible = ref(false);

useIntersectionObserver(locationRef, ([{ isIntersecting }]) => {
  if (isIntersecting) isVisible.value = true;
});

const location = {
  address: "3005 S. Figueroa St",
  city: "Los Angeles",
  state: "CA",
  zip: "90028",
  phone: "+1 404 323 9231",
  email: "info@elcostenola.com",
  hours: {
    weekdays: "10:00 AM - 02:00 AM",
    closed: "Monday & Tuesday",
  },
};

const getGoogleMapsUrl = () => {
  const address = encodeURIComponent(
    `${location.address}, ${location.city}, ${location.state} ${location.zip}`
  );
  return `https://www.google.com/maps/search/?api=1&query=${address}`;
};
</script>

<template>
  <section
    id="location"
    ref="locationRef"
    class="py-20 bg-light-background dark:bg-dark-background/50"
  >
    <div class="max-w-5xl mx-auto px-4">
      <div class="text-center mb-12" :class="{ 'animate-fade-in': isVisible }">
        <h2 class="text-4xl font-bold text-accent-white mb-4">
          Where to <span class="text-primary">Find Us?</span>
        </h2>
        <p class="text-accent-gray max-w-2xl mx-auto">
          Visit us to experience authentic Colombian flavors in the heart of Los Angeles
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6" :class="{ 'animate-slide-up': isVisible }">
        <!-- Address Card -->
        <div
          class="bg-background border border-accent-gray/20 rounded-lg p-8 hover:border-primary/50 transition-all duration-300"
        >
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <div class="p-3 bg-primary bg-opacity-10 rounded-full">
                <svg
                  class="w-6 h-6 text-primary"
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
              </div>
            </div>
            <div>
              <h3 class="font-semibold text-accent-white mb-3">Address</h3>
              <p class="text-accent-gray">{{ location.address }}</p>
              <p class="text-accent-gray">
                {{ location.city }}, {{ location.state }} {{ location.zip }}
              </p>
            </div>
          </div>
        </div>

        <!-- Hours Card -->
        <div
          class="bg-background border border-accent-gray/20 rounded-lg p-8 hover:border-primary/50 transition-all duration-300"
        >
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <div class="p-3 bg-secondary bg-opacity-10 rounded-full">
                <svg
                  class="w-6 h-6 text-secondary"
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
              </div>
            </div>
            <div>
              <h3 class="font-semibold text-accent-white mb-3">Hours</h3>
              <p class="text-accent-gray">Wednesday - Sunday:</p>
              <p class="text-accent-gray">{{ location.hours.weekdays }}</p>
              <p class="text-accent-gray mt-2 text-tertiary">{{ location.hours.closed }}</p>
            </div>
          </div>
        </div>

        <!-- Contact Card -->
        <div
          class="md:col-span-2 max-w-md mx-auto w-full bg-background border border-accent-gray/20 rounded-lg p-8 hover:border-primary/50 transition-all duration-300"
        >
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <div class="p-3 bg-tertiary bg-opacity-10 rounded-full">
                <svg
                  class="w-6 h-6 text-tertiary"
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
              </div>
            </div>
            <div>
              <h3 class="font-semibold text-accent-white mb-3">Contact</h3>
              <p class="text-accent-gray">{{ location.phone }}</p>
              <p class="text-accent-gray">{{ location.email }}</p>
            </div>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="md:col-span-2 text-center mt-6">
          <a
            :href="getGoogleMapsUrl()"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center px-6 py-3 bg-primary text-background font-bold rounded-full hover:bg-secondary transition-colors group"
          >
            Get Directions
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
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
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
