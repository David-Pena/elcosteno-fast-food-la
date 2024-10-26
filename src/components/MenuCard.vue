<script setup lang="ts">
import { ref } from "vue";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
}

const props = defineProps<{
  item: MenuItem;
}>();

const currentImageIndex = ref(0);

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % props.item.images.length;
};

const prevImage = () => {
  currentImageIndex.value =
    currentImageIndex.value === 0 ? props.item.images.length - 1 : currentImageIndex.value - 1;
};
</script>

<template>
  <div class="relative aspect-[4/3] rounded-xl overflow-hidden group">
    <div
      class="w-full h-full transition-transform duration-300 ease-in-out"
      :style="{ transform: `translateX(-${currentImageIndex * 100}%)` }"
    >
      <img
        v-for="(image, index) in item.images"
        :key="index"
        :src="image"
        :alt="item.name"
        class="absolute top-0 left-0 w-full h-full object-cover transition-all duration-300 group-hover:blur-sm group-hover:opacity-70"
        :style="{ left: `${index * 100}%` }"
      />
    </div>

    <!-- Navigation controls - Update colors -->
    <div
      class="absolute inset-x-0 top-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
    >
      <button
        @click.stop="prevImage"
        class="p-2 rounded-full bg-light-background/80 dark:bg-background/80 text-light-text dark:text-accent-white hover:bg-light-primary hover:text-white dark:hover:bg-primary dark:hover:text-background transition-colors"
        aria-label="Previous image"
      >
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        @click.stop="nextImage"
        class="p-2 rounded-full bg-light-background/80 dark:bg-background/80 text-light-text dark:text-accent-white hover:bg-light-primary hover:text-white dark:hover:bg-primary dark:hover:text-background transition-colors"
        aria-label="Next image"
      >
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>

    <!-- Item details - Update text colors -->
    <div
      class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center z-10 bg-light-background/80 dark:bg-background/80"
    >
      <h3 class="text-2xl font-bold text-light-text dark:text-accent-white mb-2">
        {{ item.name }}
      </h3>
      <p class="text-gray-600 dark:text-accent-white mb-2">{{ item.description }}</p>
      <span
        class="inline-block text-sm text-white bg-light-primary/80 dark:bg-primary/80 px-3 py-1 rounded-full"
      >
        {{ item.category }}
      </span>
    </div>
  </div>
</template>
