<script setup lang="ts">
import SocialLinks from "./SocialLinks.vue";
</script>

<template>
  <footer class="py-16 bg-background relative">
    <div class="max-w-6xl mx-auto px-4">
      <!-- Decorative lines with social icons -->
      <div class="flex items-center justify-center mb-12">
        <!-- Left line -->
        <div class="flex-1 h-px bg-accent-gray/20"></div>

        <!-- Social icons -->
        <SocialLinks />

        <!-- Right line -->
        <div class="flex-1 h-px bg-accent-gray/20"></div>
      </div>

      <!-- Copyright -->
      <div class="text-center">
        <p class="text-accent-gray text-sm">
          © {{ new Date().getFullYear() }} By
          <a
            href="https://www.davidpena.dev/"
            target="_blank"
            class="text-primary hover:text-secondary transition-all duration-300"
            >Unans</a
          >. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
