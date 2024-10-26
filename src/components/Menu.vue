<script setup lang="ts">
import { ref, computed } from 'vue';
import MenuCard from './MenuCard.vue';

const activeCategory = ref('All');

const categories = ['All', 'Main Dishes', 'Street Food', 'Sides', 'Drinks'];

const menuItems = [
  {
    name: "Arepa Rellena",
    description: "Grilled corn patty stuffed with cheese, meat, and avocado",
    price: 8.99,
    category: "Street Food",
    images: [
      "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598023696397-d84a33b11c3a?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598023696382-d758ec5bc9f7?auto=format&fit=crop&q=80"
    ]
  },
  {
    name: "Empanadas (3 pcs)",
    description: "Crispy corn pastries filled with meat and potatoes",
    price: 6.99,
    category: "Street Food",
    images: [
      "https://images.unsplash.com/photo-1628438273202-833e7b9b5247?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1628438273202-833e7b9b5248?auto=format&fit=crop&q=80"
    ]
  },
  {
    name: "Bandeja Paisa",
    description: "Traditional platter with rice, beans, meat, plantains, and egg",
    price: 15.99,
    category: "Main Dishes",
    images: [
      "https://images.unsplash.com/photo-1599789197514-47270cd526b4?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1599789197513-47270cd526b3?auto=format&fit=crop&q=80"
    ]
  },
  {
    name: "Patacones",
    description: "Crispy green plantains served with hogao sauce",
    price: 5.99,
    category: "Sides",
    images: [
      "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&q=80"
    ]
  },
  {
    name: "Colombian Hot Chocolate",
    description: "Traditional hot chocolate with cheese",
    price: 4.99,
    category: "Drinks",
    images: [
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544787219-7f47ccb76575?auto=format&fit=crop&q=80"
    ]
  }
];

const filteredItems = computed(() => 
  activeCategory.value === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory.value)
);
</script>

<template>
  <div id="menu" class="py-20 bg-background">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-4xl font-bold text-center text-accent-white mb-4">Our Menu</h2>
      <p class="text-center text-accent-gray mb-12 max-w-2xl mx-auto">
        Discover the authentic taste of Colombia with our carefully crafted menu
      </p>

      <!-- Category Filter -->
      <div class="flex justify-center space-x-4 mb-12 overflow-x-auto pb-4">
        <button v-for="category in categories" 
                :key="category"
                @click="activeCategory = category"
                :class="[
                  'px-4 py-2 rounded-full transition-colors whitespace-nowrap',
                  activeCategory === category
                    ? 'bg-primary text-background font-bold'
                    : 'bg-background text-accent-gray hover:text-primary border border-accent-gray/20'
                ]">
          {{ category }}
        </button>
      </div>

      <!-- Menu Grid -->
      <div class="grid md:grid-cols-2 gap-8">
        <MenuCard 
          v-for="item in filteredItems" 
          :key="item.name"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>