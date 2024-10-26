<script setup lang="ts">
import { ref, onMounted } from "vue";
import SocialLinks from "./SocialLinks.vue";
import ThemeToggle from "./ThemeToggle.vue";

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const navItems = [
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Location", href: "#location" },
  { name: "FAQ", href: "#faq" },
  { name: "SocialLinks", component: SocialLinks },
];

onMounted(() => {
  window.addEventListener("scroll", () => {
    isScrolled.value = window.scrollY > 50;
  });
});

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
  <nav
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    :class="[
      isScrolled
        ? 'dark:bg-dark-background/90 bg-light-background/90 backdrop-blur-sm border-b border-accent-gray/20'
        : 'bg-transparent',
    ]"
  >
    <div class="max-w-6xl mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <a href="#" class="text-2xl font-bold text-primary">
          <span class="text-secondary">El Costeño</span> LA
        </a>
        <div class="hidden md:flex items-center space-x-8">
          <template v-for="item in navItems" :key="item.name">
            <a
              v-if="!item.component"
              :href="item.href"
              class="transition-colors font-medium hover:text-secondary dark:hover:text-primary"
              :class="[
                isScrolled ? 'text-light-text dark:text-accent-white' : 'text-accent-white',
              ]"
            >
              {{ item.name }}
            </a>
            <component v-else :is="item.component" transparent-bg />
          </template>
          <ThemeToggle />
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 text-accent-white hover:text-primary transition-colors"
          aria-label="Menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden mt-4 bg-dark-background/90 backdrop-blur-sm rounded-lg p-4"
      >
        <div class="flex flex-col space-y-4">
          <a
            v-for="item in navItems.filter((item) => !item.component)"
            :key="item.name"
            :href="item.href"
            class="transition-colors font-medium text-accent-white hover:text-primary"
            @click="isMobileMenuOpen = false"
          >
            {{ item.name }}
          </a>
          <SocialLinks transparent-bg />
          <ThemeToggle />
        </div>
      </div>
    </div>
  </nav>
</template>
