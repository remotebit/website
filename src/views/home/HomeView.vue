<template>
  <div class="min-h-screen">
    <!-- Header -->
    <HeaderComponent />
    
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- Services Section -->
    <ServicesSection />
    
    <!-- About Section -->
    <AboutSection />
    
    <!-- Contact Section -->
    <ContactSection />
    
    <!-- Footer -->
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from '@components/HeaderComponent.vue'
import HeroSection from '@components/HeroSection.vue'
import ServicesSection from '@components/ServicesSection.vue'
import AboutSection from '@components/AboutSection.vue'
import ContactSection from '@components/ContactSection.vue'
import FooterComponent from '@components/FooterComponent.vue'
</script>

<style scoped>
/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}
</style>
