<script setup lang="ts">
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import Contact from "./Contact.vue";
const faqRef = ref(null);
const isVisible = ref(false);

useIntersectionObserver(faqRef, ([{ isIntersecting }]) => {
  if (isIntersecting) isVisible.value = true;
});

const faqs = [
  {
    question: "What are the available payment methods?",
    answer: "We accept cash and Zelle.",
  },
  {
    question: "What if I want to remove an item from my order?",
    answer:
      "You can let us know if you want to remove an item from your order and we will take care of it.",
  },
];
</script>

<template>
  <section id="faq" ref="faqRef" class="py-20 bg-light-background dark:bg-dark-background">
    <div class="max-w-4xl mx-auto px-4">
      <div class="text-center mb-12" :class="{ 'animate-fade-in': isVisible }">
        <h2 class="text-4xl font-bold text-light-text dark:text-accent-white mb-4">
          Frequently Asked <span class="text-light-primary dark:text-primary">Questions</span>
        </h2>
        <p class="text-gray-600 dark:text-accent-gray max-w-2xl mx-auto">
          Find answers to common questions about our restaurant, services, and Colombian
          cuisine
        </p>
      </div>

      <div class="space-y-4" :class="{ 'animate-slide-up': isVisible }">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="bg-white dark:bg-background/50 border border-gray-200 dark:border-accent-gray/20 rounded-lg overflow-hidden hover:border-light-primary/50 dark:hover:border-primary/50 transition-all duration-300"
        >
          <details class="group">
            <summary class="flex items-center justify-between px-6 py-4 cursor-pointer">
              <h3 class="text-lg font-semibold text-light-text dark:text-accent-white">
                {{ faq.question }}
              </h3>
              <!-- SVG remains the same -->
            </summary>
            <div class="px-6 pb-4 text-gray-600 dark:text-accent-gray">
              {{ faq.answer }}
            </div>
          </details>
        </div>
      </div>

      <div class="mt-12 text-center" :class="{ 'animate-fade-in': isVisible }">
        <p class="text-accent-gray mb-6">Still have questions? We're here to help!</p>
        <Contact />
      </div>
    </div>
  </section>
</template>
