<script setup lang="ts">
import Contact from "./Contact.vue";
</script>

<template>
  <div
    class="max-w-2xl mx-auto mb-12 p-6 bg-white dark:bg-background/50 rounded-lg border border-gray-200 dark:border-accent-gray/20"
  >
    <div class="text-center mb-4">
      <h3 class="text-xl font-semibold text-light-text dark:text-accent-white mb-2">
        Want your food delivered? 🚚
      </h3>
      <p class="text-gray-600 dark:text-accent-gray mb-4">
        We deliver within Los Angeles! Contact us through WhatsApp to place your order.
      </p>
      <Contact />
    </div>
  </div>
</template>
