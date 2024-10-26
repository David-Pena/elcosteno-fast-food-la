<script setup lang="ts">
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Menu from './components/Menu.vue'
import Location from './components/Location.vue'
import FAQ from './components/FAQ.vue'
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <Hero />
    <About />
    <Menu />
    <Location />
    <FAQ />
    <Footer />
  </div>
</template>