<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const showButton = ref(false);

const handleScroll = (): void => {
  showButton.value = window.scrollY > 300;
};

const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <transition name="fade">
    <button
      v-show="showButton"
      @click="scrollToTop"
      class="fixed bottom-5 right-5 bg-primary hover:bg-secondary text-background rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 opacity-70 hover:opacity-100 z-50"
      aria-label="Back to top"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        ></path>
      </svg>
    </button>
  </transition>
</template>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 20px;
  cursor: pointer;
  transition: opacity 0.3s, background-color 0.3s;
  opacity: 0.7;
  z-index: 1000;
}

.back-to-top:hover {
  opacity: 1;
  background-color: var(--color-primary-dark);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
