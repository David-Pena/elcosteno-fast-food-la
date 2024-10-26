<script setup lang="ts">
import { ref } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

const faqRef = ref(null);
const isVisible = ref(false);

useIntersectionObserver(faqRef, ([{ isIntersecting }]) => {
  if (isIntersecting) isVisible.value = true;
});

const faqs = [
  {
    question: "What type of Colombian food do you serve?",
    answer: "We specialize in authentic Colombian street food and traditional dishes, including arepas, empanadas, bandeja paisa, and other regional specialties."
  },
  {
    question: "Do you offer vegetarian options?",
    answer: "Yes, we have several vegetarian options including cheese arepas, vegetable empanadas, and customizable plates with beans, rice, and plantains."
  },
  {
    question: "Can I make a reservation?",
    answer: "We accept reservations for groups of 6 or more. For smaller parties, we operate on a first-come, first-served basis."
  },
  {
    question: "Do you offer catering services?",
    answer: "Yes, we offer catering for events of all sizes. Please contact us at least 48 hours in advance to discuss menu options and pricing."
  },
  {
    question: "Is your food spicy?",
    answer: "Traditional Colombian food is generally not spicy, but we offer various sauces on the side for those who enjoy some heat."
  }
];
</script>

<template>
  <section id="faq" ref="faqRef" class="py-20 bg-background">
    <div class="max-w-4xl mx-auto px-4">
      <div class="text-center mb-12" :class="{ 'animate-fade-in': isVisible }">
        <h2 class="text-4xl font-bold text-accent-white mb-4">
          Frequently Asked <span class="text-primary">Questions</span>
        </h2>
        <p class="text-accent-gray max-w-2xl mx-auto">
          Find answers to common questions about our restaurant, services, and Colombian cuisine
        </p>
      </div>

      <div class="space-y-4" :class="{ 'animate-slide-up': isVisible }">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="bg-background/50 border border-accent-gray/20 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300"
        >
          <details class="group">
            <summary class="flex items-center justify-between px-6 py-4 cursor-pointer">
              <h3 class="text-lg font-semibold text-accent-white">{{ faq.question }}</h3>
              <span class="ml-6 flex-shrink-0">
                <svg
                  class="w-6 h-6 text-primary transform transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </summary>
            <div class="px-6 pb-4 text-accent-gray">
              {{ faq.answer }}
            </div>
          </details>
        </div>
      </div>

      <div 
        class="mt-12 text-center"
        :class="{ 'animate-fade-in': isVisible }"
      >
        <p class="text-accent-gray mb-6">
          Still have questions? We're here to help!
        </p>
        <a
          href="#contact"
          class="inline-flex items-center px-6 py-3 bg-primary text-background font-bold rounded-full hover:bg-secondary transition-colors group"
        >
          Contact Us
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
      </div>
    </div>
  </section>
</template>