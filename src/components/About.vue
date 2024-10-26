<script setup lang="ts">
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

const aboutRef = ref(null);
const isVisible = ref(false);

useIntersectionObserver(aboutRef, ([{ isIntersecting }]) => {
  if (isIntersecting) isVisible.value = true;
});

const features = [
  {
    icon: "☕",
    title: "Authentic Recipes",
    description: "Traditional Colombian recipes passed down through generations",
  },
  {
    icon: "🌟",
    title: "Fresh Ingredients",
    description: "Locally sourced ingredients for the best flavors",
  },
  {
    icon: "❤️",
    title: "Made with Love",
    description: "Every dish crafted with passion and care",
  },
];
</script>

<template>
  <section id="about" ref="aboutRef" class="py-20 bg-light-background dark:bg-dark-background">
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Image Column -->
        <div class="relative" :class="{ 'animate-fade-in': isVisible }">
          <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80"
              alt="Colombian Street Food"
              class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
          <!-- Decorative Elements -->
          <div
            class="absolute -bottom-6 -right-6 w-32 h-32 bg-colombia-yellow rounded-full opacity-20"
          ></div>
          <div
            class="absolute -top-6 -left-6 w-24 h-24 bg-colombia-blue rounded-full opacity-20"
          ></div>
        </div>

        <!-- Content Column -->
        <div :class="{ 'animate-slide-up': isVisible }">
          <h2 class="text-4xl font-bold mb-6 text-light-text dark:text-accent-white">
            Our Passion for Authentic
            <span class="text-colombia-red">Colombian Flavors</span>
          </h2>

          <p class="text-gray-600 dark:text-accent-gray mb-8 leading-relaxed">
            Born from the vibrant streets of Colombia and brought to the heart of Los Angeles,
            <span class="font-bold dark:text-secondary"
              >El Costeño <span class="dark:text-primary">LA</span></span
            >
            is more than just a restaurant – it's a celebration of our rich culinary heritage.
            Every dish tells a story of tradition, family, and the joy of sharing authentic
            Colombian street food with our community.
          </p>

          <!-- Feature Grid -->
          <div class="grid grid-cols-1 gap-6 mb-8">
            <div
              v-for="feature in features"
              :key="feature.title"
              class="flex items-start space-x-4 p-4 rounded-lg hover:bg-light-accent/50 dark:hover:bg-accent-gray/10 transition-all duration-300"
            >
              <span class="text-2xl">{{ feature.icon }}</span>
              <div>
                <h3 class="font-semibold text-light-text dark:text-accent-white mb-1">
                  {{ feature.title }}
                </h3>
                <p class="text-gray-600 dark:text-accent-gray text-sm">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
