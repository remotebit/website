<template>
  <section class="bg-navy pt-20 pb-16 overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Hero Content -->
        <div class="text-center lg:text-left animate-fade-in-up">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-smoke mb-6 leading-tight">
            Build Amazing
            <span class="text-sky"> SaaS </span>
            Solutions
          </h1>
          <p class="text-lg md:text-xl text-smoke mb-8 opacity-90 leading-relaxed max-w-lg mx-auto lg:mx-0">
            We're a software house specializing in creating cutting-edge SaaS applications 
            that scale with your business needs.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              label="Start Your Project" 
              class="bg-sky text-navy font-semibold px-8 py-3 rounded-lg hover:bg-mint transition-all duration-300 btn-hover-lift text-lg"
              icon="pi pi-arrow-right"
              iconPos="right"
            />
            <Button 
              label="View Our Work" 
              class="border-2 border-sky text-sky font-semibold px-8 py-3 rounded-lg hover:bg-sky hover:text-navy transition-all duration-300 btn-hover-lift text-lg"
              outlined
            />
          </div>
        </div>

        <!-- Hero Image/Animation -->
        <div class="relative">
          <div class="animate-float">
            <!-- Code Window Mockup -->
            <div class="bg-charcoal rounded-lg shadow-2xl border border-sky/20">
              <!-- Window Header -->
              <div class="bg-navy rounded-t-lg p-4 border-b border-sky/20">
                <div class="flex items-center space-x-2">
                  <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span class="text-smoke text-sm ml-4 font-mono">~/remotebit/saas-project</span>
                </div>
              </div>
              <!-- Code Content -->
              <div class="p-6 font-mono text-sm">
                <div class="text-mint mb-2">// Building the future of SaaS</div>
                <div class="text-sky mb-2">const solution = {</div>
                <div class="text-smoke ml-4 mb-1">scalable: true,</div>
                <div class="text-smoke ml-4 mb-1">innovative: true,</div>
                <div class="text-smoke ml-4 mb-1">reliable: true</div>
                <div class="text-sky mb-2">};</div>
                <div class="text-mint">// Let's build something amazing</div>
              </div>
            </div>
          </div>

          <!-- Floating Elements -->
          <div class="absolute -top-4 -right-4 w-20 h-20 bg-sky/20 rounded-full animate-pulse"></div>
          <div class="absolute -bottom-6 -left-6 w-16 h-16 bg-mint/20 rounded-full animate-pulse" style="animation-delay: 1s;"></div>
        </div>
      </div>
    </div>

    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,<svg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;><g fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;><g fill=&quot;%234DC0E8&quot; fill-opacity=&quot;0.4&quot;><circle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1&quot;/></g></g></svg>');"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
</script>
