<template>
  <footer class="bg-charcoal py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="md:col-span-2">
          <h3 class="text-xl font-bold text-smoke font-mono mb-4">
            remotebit.dev
          </h3>
          <p class="text-smoke opacity-80 mb-6 leading-relaxed max-w-md">
            We specialize in building innovative SaaS solutions that scale with your business. 
            Transform your ideas into powerful applications with our expert team.
          </p>
          <div class="flex space-x-4">
            <Button 
              class="w-10 h-10 bg-sky/20 hover:bg-sky text-smoke rounded-lg transition-all duration-300"
              icon="pi pi-github"
              text
            />
            <Button 
              class="w-10 h-10 bg-sky/20 hover:bg-sky text-smoke rounded-lg transition-all duration-300"
              icon="pi pi-linkedin"
              text
            />
            <Button 
              class="w-10 h-10 bg-sky/20 hover:bg-sky text-smoke rounded-lg transition-all duration-300"
              icon="pi pi-twitter"
              text
            />
            <Button 
              class="w-10 h-10 bg-sky/20 hover:bg-sky text-smoke rounded-lg transition-all duration-300"
              icon="pi pi-envelope"
              text
            />
          </div>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-lg font-semibold text-smoke mb-4">Services</h4>
          <ul class="space-y-2">
            <li><a href="#services" class="text-smoke opacity-80 hover:text-sky transition-colors duration-300">SaaS Development</a></li>
            <li><a href="#services" class="text-smoke opacity-80 hover:text-sky transition-colors duration-300">API Development</a></li>
            <li><a href="#services" class="text-smoke opacity-80 hover:text-sky transition-colors duration-300">DevOps & Security</a></li>
            <li><a href="#services" class="text-smoke opacity-80 hover:text-sky transition-colors duration-300">Integration Services</a></li>
            <li><a href="#services" class="text-smoke opacity-80 hover:text-sky transition-colors duration-300">Consulting</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-lg font-semibold text-smoke mb-4">Contact</h4>
          <div class="space-y-3">
            <div class="flex items-center">
              <i class="pi pi-envelope text-sky mr-3"></i>
              <span class="text-smoke opacity-80">hello@remotebit.dev</span>
            </div>
            <div class="flex items-center">
              <i class="pi pi-calendar text-mint mr-3"></i>
              <span class="text-smoke opacity-80">Schedule a call</span>
            </div>
            <div class="flex items-center">
              <i class="pi pi-clock text-sky mr-3"></i>
              <span class="text-smoke opacity-80">24h response time</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-smoke/20 mt-12 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="text-smoke opacity-60 text-sm mb-4 md:mb-0">
            © {{ currentYear }} RemoteBit.dev. All rights reserved.
          </div>
          <div class="flex space-x-6 text-sm">
            <a href="#" class="text-smoke opacity-60 hover:text-sky transition-colors duration-300">Privacy Policy</a>
            <a href="#" class="text-smoke opacity-60 hover:text-sky transition-colors duration-300">Terms of Service</a>
            <a href="#" class="text-smoke opacity-60 hover:text-sky transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Button from 'primevue/button'

const currentYear = computed(() => new Date().getFullYear())
</script>
