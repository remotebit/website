<template>
  <section id="services" class="py-20 bg-smoke">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-navy mb-4">
          Our Services
        </h2>
        <p class="text-lg text-charcoal max-w-2xl mx-auto">
          We provide comprehensive SaaS development solutions from concept to deployment
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Service 1 -->
        <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 btn-hover-lift border border-sky/10">
          <div class="w-16 h-16 bg-sky/10 rounded-lg flex items-center justify-center mb-6">
            <i class="pi pi-cloud text-sky text-2xl"></i>
          </div>
          <h3 class="text-xl font-semibold text-navy mb-4">SaaS Development</h3>
          <p class="text-charcoal mb-6">
            Full-stack SaaS applications built with modern technologies and scalable architecture.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-sky/10 text-sky text-sm rounded-full">Vue.js</span>
            <span class="px-3 py-1 bg-sky/10 text-sky text-sm rounded-full">Node.js</span>
            <span class="px-3 py-1 bg-sky/10 text-sky text-sm rounded-full">PostgreSQL</span>
          </div>
        </div>

        <!-- Service 2 -->
        <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 btn-hover-lift border border-mint/10">
          <div class="w-16 h-16 bg-mint/10 rounded-lg flex items-center justify-center mb-6">
            <i class="pi pi-mobile text-mint text-2xl"></i>
          </div>
          <h3 class="text-xl font-semibold text-navy mb-4">API Development</h3>
          <p class="text-charcoal mb-6">
            RESTful and GraphQL APIs designed for performance, security, and scalability.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-mint/10 text-mint text-sm rounded-full">REST API</span>
            <span class="px-3 py-1 bg-mint/10 text-mint text-sm rounded-full">GraphQL</span>
            <span class="px-3 py-1 bg-mint/10 text-mint text-sm rounded-full">Express</span>
          </div>
        </div>

        <!-- Service 3 -->
        <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 btn-hover-lift border border-navy/10">
          <div class="w-16 h-16 bg-navy/10 rounded-lg flex items-center justify-center mb-6">
            <i class="pi pi-shield text-navy text-2xl"></i>
          </div>
          <h3 class="text-xl font-semibold text-navy mb-4">DevOps & Security</h3>
          <p class="text-charcoal mb-6">
            CI/CD pipelines, cloud deployment, and robust security implementations.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-navy/10 text-navy text-sm rounded-full">Docker</span>
            <span class="px-3 py-1 bg-navy/10 text-navy text-sm rounded-full">AWS</span>
            <span class="px-3 py-1 bg-navy/10 text-navy text-sm rounded-full">Security</span>
          </div>
        </div>

        <!-- Service 4 -->
        <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 btn-hover-lift border border-sky/10">
          <div class="w-16 h-16 bg-sky/10 rounded-lg flex items-center justify-center mb-6">
            <i class="pi pi-chart-line text-sky text-2xl"></i>
          </div>
          <h3 class="text-xl font-semibold text-navy mb-4">Analytics & Monitoring</h3>
          <p class="text-charcoal mb-6">
            Real-time analytics dashboards and comprehensive monitoring solutions.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-sky/10 text-sky text-sm rounded-full">Analytics</span>
            <span class="px-3 py-1 bg-sky/10 text-sky text-sm rounded-full">Monitoring</span>
            <span class="px-3 py-1 bg-sky/10 text-sky text-sm rounded-full">Reporting</span>
          </div>
        </div>

        <!-- Service 5 -->
        <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 btn-hover-lift border border-mint/10">
          <div class="w-16 h-16 bg-mint/10 rounded-lg flex items-center justify-center mb-6">
            <i class="pi pi-cog text-mint text-2xl"></i>
          </div>
          <h3 class="text-xl font-semibold text-navy mb-4">Integration Services</h3>
          <p class="text-charcoal mb-6">
            Seamless third-party integrations and custom workflow automations.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-mint/10 text-mint text-sm rounded-full">Webhooks</span>
            <span class="px-3 py-1 bg-mint/10 text-mint text-sm rounded-full">Zapier</span>
            <span class="px-3 py-1 bg-mint/10 text-mint text-sm rounded-full">APIs</span>
          </div>
        </div>

        <!-- Service 6 -->
        <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 btn-hover-lift border border-navy/10">
          <div class="w-16 h-16 bg-navy/10 rounded-lg flex items-center justify-center mb-6">
            <i class="pi pi-users text-navy text-2xl"></i>
          </div>
          <h3 class="text-xl font-semibold text-navy mb-4">Consulting & Support</h3>
          <p class="text-charcoal mb-6">
            Technical consulting and ongoing support for your SaaS applications.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-navy/10 text-navy text-sm rounded-full">Consulting</span>
            <span class="px-3 py-1 bg-navy/10 text-navy text-sm rounded-full">Support</span>
            <span class="px-3 py-1 bg-navy/10 text-navy text-sm rounded-full">Maintenance</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No additional logic needed for this component
</script>
