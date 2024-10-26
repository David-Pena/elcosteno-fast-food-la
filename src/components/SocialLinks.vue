<script setup lang="ts">
import { socialLinks } from "../constants/socialLinks";

// Add a new prop for transparent background
defineProps({
  transparentBg: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="flex space-x-6 mx-8">
    <a
      v-for="link in socialLinks"
      :key="link.name"
      :href="link.url"
      :title="link.name"
      class="transform hover:scale-110 transition-all duration-300 w-10 h-10 flex items-center justify-center rounded-full group"
      :class="[transparentBg ? 'hover:bg-primary/10' : 'bg-background hover:bg-primary/10']"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        class="w-5 h-5 text-accent-gray group-hover:text-primary transition-colors"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path :d="link.icon" />
      </svg>
    </a>
  </div>
</template>
