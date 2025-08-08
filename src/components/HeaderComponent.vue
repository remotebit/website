<template>
  <header class="bg-navy fixed w-full top-0 z-50 shadow-lg">
    <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="text-smoke font-mono text-xl font-bold hover:text-sky transition-colors duration-300">
            remotebit.dev
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#services" class="text-smoke hover:text-sky transition-colors duration-300 font-medium">
            Services
          </a>
          <a href="#about" class="text-smoke hover:text-sky transition-colors duration-300 font-medium">
            About
          </a>
          <a href="#contact" class="text-smoke hover:text-sky transition-colors duration-300 font-medium">
            Contact
          </a>
          <Button 
            label="Get Started" 
            class="bg-sky text-navy font-semibold px-6 py-2 rounded-lg hover:bg-mint transition-colors duration-300 btn-hover-lift"
          />
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <Button 
            @click="toggleMobileMenu"
            class="text-smoke hover:text-sky p-2"
            :icon="mobileMenuOpen ? 'pi pi-times' : 'pi pi-bars'"
            text
          />
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-navy">
          <a href="#services" @click="closeMobileMenu" class="text-smoke hover:text-sky block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
            Services
          </a>
          <a href="#about" @click="closeMobileMenu" class="text-smoke hover:text-sky block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
            About
          </a>
          <a href="#contact" @click="closeMobileMenu" class="text-smoke hover:text-sky block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
            Contact
          </a>
          <div class="pt-2">
            <Button 
              label="Get Started" 
              class="bg-sky text-navy font-semibold px-6 py-2 rounded-lg hover:bg-mint transition-colors duration-300 w-full"
            />
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>
