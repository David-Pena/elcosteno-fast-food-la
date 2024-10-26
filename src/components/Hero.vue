<script setup lang="ts">
import { ref } from "vue";
import { useParallax } from "@vueuse/core";

const targetRef = ref(null);
const { tilt, roll } = useParallax(targetRef);

const scrollToLocation = () => {
  const element = document.getElementById("location");
  element?.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <div class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image with Blur -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-background/60 z-10 backdrop-blur-[7px]"></div>
      <img
        src="https://images.unsplash.com/photo-1583531352515-8884af319dc1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Colombian Food Background"
        class="w-full h-full object-cover scale-105"
      />
    </div>

    <!-- Hero Content -->
    <div
      ref="targetRef"
      class="relative text-center px-4 mt-16 z-20"
      :style="{
        transform: `perspective(1000px) rotateX(${tilt * 10}deg) rotateY(${roll * 10}deg)`,
        transition: 'transform 0.3s ease-out',
      }"
    >
      <h2 class="text-6xl md:text-7xl font-bold text-accent-white mb-6 drop-shadow-lg">
        Authentic Colombian
        <span class="block mt-2 text-primary">Street Food</span>
      </h2>
      <p class="text-xl md:text-2xl text-accent-gray mb-12 max-w-2xl mx-auto">
        Experience the vibrant flavors of Colombia's Caribbean Coast in Los Angeles, where
        every bite tells a story of tradition and taste.
      </p>
      <div class="space-x-4">
        <a
          href="#menu"
          class="bg-primary hover:bg-secondary text-background px-8 py-3 rounded-full text-lg transition-colors inline-flex items-center group font-bold"
        >
          View Menu
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
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>
        <button
          @click="scrollToLocation"
          class="bg-transparent hover:bg-primary/10 text-accent-white border-2 border-primary hover:border-secondary px-8 py-3 rounded-full text-lg transition-colors"
        >
          Visit Us
        </button>
      </div>
    </div>
  </div>
</template>
