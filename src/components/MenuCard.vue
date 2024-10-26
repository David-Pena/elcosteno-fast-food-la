<script setup lang="ts">
import { ref } from 'vue';

interface MenuItem {
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
  currentImageIndex.value = currentImageIndex.value === 0 
    ? props.item.images.length - 1 
    : currentImageIndex.value - 1;
};
</script>

<template>
  <div class="group bg-background border border-accent-gray/20 rounded-xl hover:border-primary/50 transition-all duration-300 overflow-hidden">
    <!-- Image Carousel -->
    <div class="relative aspect-[4/3] overflow-hidden">
      <div class="absolute inset-0 flex transition-transform duration-300 ease-in-out"
           :style="{ transform: `translateX(-${currentImageIndex * 100}%)` }">
        <img v-for="(image, index) in item.images"
             :key="index"
             :src="image"
             :alt="`${item.name} - Image ${index + 1}`"
             class="w-full h-full object-cover flex-shrink-0"
             loading="lazy" />
      </div>
      
      <!-- Navigation Arrows -->
      <div class="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button @click.stop="prevImage"
                class="p-2 rounded-full bg-background/80 text-accent-white hover:bg-primary hover:text-background transition-colors"
                v-show="item.images.length > 1">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button @click.stop="nextImage"
                class="p-2 rounded-full bg-background/80 text-accent-white hover:bg-primary hover:text-background transition-colors"
                v-show="item.images.length > 1">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- Dots Indicator -->
      <div class="absolute bottom-2 left-0 right-0 flex justify-center gap-1"
           v-if="item.images.length > 1">
        <button v-for="(_, index) in item.images"
                :key="index"
                @click.stop="currentImageIndex = index"
                class="w-2 h-2 rounded-full transition-colors"
                :class="index === currentImageIndex ? 'bg-primary' : 'bg-accent-gray/50'">
        </button>
      </div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <div class="flex justify-between items-start mb-2">
        <h3 class="text-xl font-bold text-accent-white">
          {{ item.name }}
        </h3>
        <span class="text-primary font-bold">${{ item.price.toFixed(2) }}</span>
      </div>
      <p class="text-accent-gray mb-3">{{ item.description }}</p>
      <span class="inline-block text-sm text-accent-gray bg-background/50 border border-accent-gray/20 px-3 py-1 rounded-full">
        {{ item.category }}
      </span>
    </div>
  </div>
</template>