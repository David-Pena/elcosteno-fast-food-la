<script setup lang="ts">
import { ref, computed } from "vue";
import MenuCard from "./MenuCard.vue";
import DeliveryMessage from "./DeliveryMessage.vue"; // Update import

const activeCategory = ref("All");
// Add new ref for controlling how many items to show
const showAllItems = ref(false);
const itemsPerPage = 9;

const categories = [
  "All",
  "Hamburgers",
  "Hot Dogs",
  "Arepas",
  "Chuzos",
  "Grill",
  "Specials",
  "Drinks",
];

const menuItems = [
  // Hamburgers
  {
    id: 1,
    name: "Tremenda",
    description:
      "Bun, grilled beef patty, cheddar cheese, tomato, caramelized onion, lettuce, crispy potato chips, sauces.",
    price: 0,
    category: "Hamburgers",
    images: [
      "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?auto=format&fit=crop&q=80",
    ],
  },
  {
    id: 2,
    name: "La Muralla",
    description:
      "Pan, gramos de carne, tipos de queso, jamón, cebolla caramelizada, maíz, lechuga, salsas.",
    price: 0,
    category: "Hamburgers",
    images: [
      "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?auto=format&fit=crop&q=80",
    ],
  },
  {
    id: 3,
    name: "La Sabrosasa",
    description:
      "Pan, gramos de carne, tipos de queso, tocineta, cebolla caramelizada, maíz, lechuga, tomate, papa ripio, salsas.",
    price: 0,
    category: "Hamburgers",
    images: [
      "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?auto=format&fit=crop&q=80",
    ],
  },
  {
    id: 4,
    name: "La Callejera",
    description: "Pan, carne, queso, tomate, lechuga, cebolla, salsas.",
    price: 0,
    category: "Hamburgers",
    images: [
      "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-159023696416-0193a0bcd302?auto=format&fit=crop&q=80",
    ],
  },

  // Hot Dogs
  {
    id: 5,
    name: "El Bacano",
    description:
      "pan, salchicha, tocineta, jamón, queso fundido, carnes, papa ripio, cebolla, lechuga, huevo de codorniz, maíz, salsas.",
    price: 0,
    category: "Hot Dogs",
    images: [
      "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?auto=format&fit=crop&q=80",
    ],
  },
  {
    id: 6,
    name: "El Callejero",
    description: "Pan, salchicha, queso fundido, jamón, papa ripio, cebolla, salsas.",
    price: 0,
    category: "Hot Dogs",
    images: [
      "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?auto=format&fit=crop&q=80",
    ],
  },

  // Arepas
  {
    id: 7,
    name: "La Morrocolla",
    description:
      "Carne a la parrilla, queso fundido, lechuga, huevo de codorniz, tocineta, salsas.",
    price: 0,
    category: "Arepas",
    images: [
      "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?auto=format&fit=crop&q=80",
    ],
  },
  {
    id: 8,
    name: "La Vallenata",
    description:
      "Pollo, chorizo, queso fundido, cebolla, papa ripio, maíz, plátano maduro, salsas.",
    price: 0,
    category: "Arepas",
    images: [
      "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?auto=format&fit=crop&q=80",
    ],
  },
  {
    id: 9,
    name: "La Callejera",
    description: "Solo queso y mantequilla.",
    price: 0,
    category: "Arepas",
    images: [
      "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?auto=format&fit=crop&q=80",
    ],
  },

  // Chuzos
  {
    id: 10,
    name: "Tres Carnes",
    description: "Pollo ~ Carne ~ Cerdo",
    price: 0,
    category: "Chuzos",
    images: [
      "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?auto=format&fit=crop&q=80",
    ],
  },
  {
    id: 11,
    name: "El Callejero",
    description: "Solo carne.",
    price: 0,
    category: "Chuzos",
    images: [
      "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?auto=format&fit=crop&q=80",
    ],
  },

  // Grill
  {
    id: 12,
    name: "Carne Asada",
    description: "Papas a la francesa + ensalada.",
    price: 0,
    category: "Grill",
    images: [
      "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?auto=format&fit=crop&q=80",
    ],
  },
  {
    id: 13,
    name: "Chorizo",
    description: "Acompañado de bollo.",
    price: 0,
    category: "Grill",
    images: [
      "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?auto=format&fit=crop&q=80",
    ],
  },
  {
    id: 14,
    name: "Pollo Asado",
    description: "Papas a la francesa + ensalada.",
    price: 0,
    category: "Grill",
    images: [
      "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?auto=format&fit=crop&q=80",
    ],
  },

  // Specials
  {
    id: 15,
    name: "Pataconada",
    description:
      "Carne ~ pollo ~ chorizo ~ jamón ~ lechuga ~ queso fundido ~ cebolla ~ tomate ~ plátano verde ~ salsas.",
    price: 0,
    category: "Specials",
    images: [
      "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?auto=format&fit=crop&q=80",
    ],
  },
  {
    id: 16,
    name: "Salvajada",
    description:
      "Carne ~ pollo ~ cerdo ~ chorizo ~ queso fundido ~ papa a la francesa ~ papa ripio ~ tomate ~ cebolla ~ lechuga ~ plátano marudo ~ salsas.",
    price: 0,
    category: "Specials",
    images: [
      "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?auto=format&fit=crop&q=80",
    ],
  },
  {
    id: 17,
    name: "Desgranados",
    description: "Pollo ~ bollo ~ maíz ~ tocineta ~ queso fundido ~ papa ripio ~ salsas.",
    price: 0,
    category: "Specials",
    images: [
      "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?auto=format&fit=crop&q=80",
    ],
  },

  // Drinks
  {
    id: 18,
    name: "Sodas",
    description: "Coca-Cola ~ Postobon ~ Colombiana ~ Sprite ~ Pepsi",
    price: 0,
    category: "Drinks",
    images: [
      "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?auto=format&fit=crop&q=80",
    ],
  },
];

const filteredItems = computed(() => {
  const filtered =
    activeCategory.value === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory.value);

  // Only limit items when "All" is selected and showAllItems is false
  if (activeCategory.value === "All" && !showAllItems.value) {
    return filtered.slice(0, itemsPerPage);
  }
  return filtered;
});

// Add computed property to determine if "Show More" button should be visible
const showMoreButton = computed(
  () =>
    activeCategory.value === "All" && menuItems.length > itemsPerPage && !showAllItems.value
);

// Add function to handle showing all items
const toggleShowAll = () => {
  showAllItems.value = true;
};

// Reset showAllItems when changing categories
const handleCategoryChange = (category: string) => {
  activeCategory.value = category;
  showAllItems.value = false;
};
</script>

<template>
  <div id="menu" class="py-20 bg-light-background dark:bg-dark-background">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-4xl font-bold text-center text-light-text dark:text-accent-white mb-4">
        Our Menu
      </h2>
      <p class="text-center text-gray-600 dark:text-accent-gray mb-12 max-w-2xl mx-auto">
        Discover the authentic taste of Colombia with our carefully crafted menu
      </p>

      <!-- Delivery Message -->
      <DeliveryMessage />

      <!-- Category Filter -->
      <div class="flex justify-center space-x-4 mb-12 overflow-x-auto pb-4">
        <button
          v-for="category in categories"
          :key="category"
          @click="handleCategoryChange(category)"
          :class="[
            'px-4 py-2 rounded-full transition-colors whitespace-nowrap',
            activeCategory === category
              ? 'bg-light-primary dark:bg-primary text-white dark:text-background font-bold'
              : 'bg-light-accent dark:bg-background text-gray-600 dark:text-accent-gray hover:text-light-primary dark:hover:text-primary border border-gray-200 dark:border-accent-gray/20',
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Menu Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <MenuCard v-for="item in filteredItems" :key="item.id" :item="item" />
      </div>

      <!-- Add Show More button -->
      <div v-if="showMoreButton" class="flex justify-center mt-8">
        <button
          @click="toggleShowAll"
          class="px-6 py-2 bg-light-primary dark:bg-primary text-background rounded-full hover:bg-light-secondary dark:hover:bg-primary/90 transition-colors"
        >
          Show More
        </button>
      </div>
    </div>
  </div>
</template>
