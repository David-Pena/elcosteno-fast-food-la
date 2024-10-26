<script setup lang="ts">
import SocialLinks from "./SocialLinks.vue";
</script>

<template>
  <footer class="py-16 bg-light-background dark:bg-dark-background relative">
    <div class="max-w-6xl mx-auto px-4">
      <!-- Decorative lines -->
      <div class="flex items-center justify-center mb-12">
        <div class="flex-1 h-px bg-gray-200 dark:bg-accent-gray/20"></div>
        <SocialLinks transparent-bg />
        <div class="flex-1 h-px bg-gray-200 dark:bg-accent-gray/20"></div>
      </div>

      <!-- Copyright -->
      <div class="text-center">
        <p class="text-gray-600 dark:text-accent-gray text-sm">
          © {{ new Date().getFullYear() }} By
          <a
            href="https://www.davidpena.dev/"
            target="_blank"
            class="text-light-primary dark:text-primary hover:text-light-secondary dark:hover:text-secondary transition-all duration-300"
            >Unans</a
          >. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
