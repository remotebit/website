<template>
  <section id="about" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- About Content -->
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-navy mb-6">
            About RemoteBit.dev
          </h2>
          <p class="text-lg text-charcoal mb-6 leading-relaxed">
            We are a team of passionate developers and designers who specialize in building 
            innovative SaaS solutions. Our mission is to help businesses transform their ideas 
            into scalable, reliable, and user-friendly applications.
          </p>
          <p class="text-lg text-charcoal mb-8 leading-relaxed">
            With years of experience in modern web technologies, we focus on delivering 
            high-quality solutions that grow with your business needs.
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-8 mb-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-sky mb-2">50+</div>
              <div class="text-sm text-charcoal">Projects Delivered</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-mint mb-2">5+</div>
              <div class="text-sm text-charcoal">Years Experience</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-navy mb-2">24/7</div>
              <div class="text-sm text-charcoal">Support</div>
            </div>
          </div>

          <Button 
            label="Let's Work Together" 
            class="bg-navy text-smoke font-semibold px-8 py-3 rounded-lg hover:bg-charcoal transition-all duration-300 btn-hover-lift"
            icon="pi pi-arrow-right"
            iconPos="right"
          />
        </div>

        <!-- Technologies -->
        <div class="relative">
          <div class="bg-smoke p-8 rounded-xl shadow-lg">
            <h3 class="text-xl font-semibold text-navy mb-6 text-center">
              Technologies We Use
            </h3>
            
            <!-- Tech Stack Grid -->
            <div class="grid grid-cols-3 gap-6">
              <!-- Frontend -->
              <div class="text-center">
                <div class="w-16 h-16 bg-sky/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <i class="pi pi-palette text-sky text-2xl"></i>
                </div>
                <h4 class="font-semibold text-navy mb-2">Frontend</h4>
                <div class="text-sm text-charcoal space-y-1">
                  <div>Vue.js</div>
                  <div>React</div>
                  <div>TypeScript</div>
                </div>
              </div>

              <!-- Backend -->
              <div class="text-center">
                <div class="w-16 h-16 bg-mint/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <i class="pi pi-server text-mint text-2xl"></i>
                </div>
                <h4 class="font-semibold text-navy mb-2">Backend</h4>
                <div class="text-sm text-charcoal space-y-1">
                  <div>Node.js</div>
                  <div>Python</div>
                  <div>PostgreSQL</div>
                </div>
              </div>

              <!-- DevOps -->
              <div class="text-center">
                <div class="w-16 h-16 bg-navy/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <i class="pi pi-cloud text-navy text-2xl"></i>
                </div>
                <h4 class="font-semibold text-navy mb-2">DevOps</h4>
                <div class="text-sm text-charcoal space-y-1">
                  <div>Docker</div>
                  <div>AWS</div>
                  <div>CI/CD</div>
                </div>
              </div>
            </div>

            <!-- Process Steps -->
            <div class="mt-8 pt-8 border-t border-navy/10">
              <h4 class="font-semibold text-navy mb-4 text-center">Our Process</h4>
              <div class="flex justify-between text-center">
                <div class="flex-1">
                  <div class="w-8 h-8 bg-sky rounded-full flex items-center justify-center mx-auto mb-2">
                    <span class="text-white text-sm font-bold">1</span>
                  </div>
                  <div class="text-xs text-charcoal">Discovery</div>
                </div>
                <div class="flex-1">
                  <div class="w-8 h-8 bg-mint rounded-full flex items-center justify-center mx-auto mb-2">
                    <span class="text-white text-sm font-bold">2</span>
                  </div>
                  <div class="text-xs text-charcoal">Design</div>
                </div>
                <div class="flex-1">
                  <div class="w-8 h-8 bg-navy rounded-full flex items-center justify-center mx-auto mb-2">
                    <span class="text-white text-sm font-bold">3</span>
                  </div>
                  <div class="text-xs text-charcoal">Develop</div>
                </div>
                <div class="flex-1">
                  <div class="w-8 h-8 bg-charcoal rounded-full flex items-center justify-center mx-auto mb-2">
                    <span class="text-white text-sm font-bold">4</span>
                  </div>
                  <div class="text-xs text-charcoal">Deploy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
</script>
