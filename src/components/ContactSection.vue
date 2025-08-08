<template>
  <section id="contact" class="py-20 bg-navy">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-smoke mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p class="text-lg text-smoke mb-8 opacity-90 leading-relaxed">
            Ready to transform your ideas into a powerful SaaS solution? 
            Get in touch with us and let's discuss your project.
          </p>

          <!-- Contact Methods -->
          <div class="space-y-6 mb-8">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-sky/20 rounded-lg flex items-center justify-center mr-4">
                <i class="pi pi-envelope text-sky text-xl"></i>
              </div>
              <div>
                <div class="text-smoke font-semibold">Email</div>
                <div class="text-smoke opacity-80">hello@remotebit.dev</div>
              </div>
            </div>

            <div class="flex items-center">
              <div class="w-12 h-12 bg-mint/20 rounded-lg flex items-center justify-center mr-4">
                <i class="pi pi-calendar text-mint text-xl"></i>
              </div>
              <div>
                <div class="text-smoke font-semibold">Schedule a Call</div>
                <div class="text-smoke opacity-80">Book a free consultation</div>
              </div>
            </div>

            <div class="flex items-center">
              <div class="w-12 h-12 bg-sky/20 rounded-lg flex items-center justify-center mr-4">
                <i class="pi pi-clock text-sky text-xl"></i>
              </div>
              <div>
                <div class="text-smoke font-semibold">Response Time</div>
                <div class="text-smoke opacity-80">Within 24 hours</div>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="flex space-x-4">
            <Button 
              class="w-12 h-12 bg-sky/20 hover:bg-sky rounded-lg transition-all duration-300"
              icon="pi pi-github"
              text
            />
            <Button 
              class="w-12 h-12 bg-sky/20 hover:bg-sky rounded-lg transition-all duration-300"
              icon="pi pi-linkedin"
              text
            />
            <Button 
              class="w-12 h-12 bg-sky/20 hover:bg-sky rounded-lg transition-all duration-300"
              icon="pi pi-twitter"
              text
            />
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white p-8 rounded-xl shadow-2xl">
          <h3 class="text-2xl font-semibold text-navy mb-6">Send us a message</h3>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-charcoal mb-2">Name</label>
                <InputText 
                  v-model="form.name"
                  placeholder="Your name"
                  class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky focus:border-transparent"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-charcoal mb-2">Email</label>
                <InputText 
                  v-model="form.email"
                  type="email"
                  placeholder="your@email.com"
                  class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-charcoal mb-2">Company</label>
              <InputText 
                v-model="form.company"
                placeholder="Your company (optional)"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky focus:border-transparent"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-charcoal mb-2">Project Type</label>
              <Dropdown 
                v-model="form.projectType"
                :options="projectTypes"
                optionLabel="label"
                optionValue="value"
                placeholder="Select project type"
                class="w-full"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-charcoal mb-2">Message</label>
              <Textarea 
                v-model="form.message"
                placeholder="Tell us about your project..."
                rows="4"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky focus:border-transparent resize-none"
              />
            </div>

            <Button 
              type="submit"
              label="Send Message"
              :loading="isSubmitting"
              class="w-full bg-sky text-navy font-semibold py-3 rounded-lg hover:bg-mint transition-all duration-300 btn-hover-lift"
              icon="pi pi-send"
              iconPos="right"
            />
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Dropdown from 'primevue/dropdown'

const isSubmitting = ref(false)

const form = reactive({
  name: '',
  email: '',
  company: '',
  projectType: '',
  message: ''
})

const projectTypes = [
  { label: 'New SaaS Application', value: 'new-saas' },
  { label: 'API Development', value: 'api' },
  { label: 'System Integration', value: 'integration' },
  { label: 'DevOps & Deployment', value: 'devops' },
  { label: 'Consulting', value: 'consulting' },
  { label: 'Other', value: 'other' }
]

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    Object.keys(form).forEach(key => {
      form[key as keyof typeof form] = ''
    })
    
    // Show success message (you can integrate with toast service)
    console.log('Form submitted successfully!')
    
  } catch (error) {
    console.error('Form submission error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>
