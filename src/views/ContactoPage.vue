<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const subjects = [
  'Información General',
  'Servicios Turísticos',
  'Aeropuertos',
  'Combustibles',
  'Transparencia',
  'Bolsa de Trabajo',
  'Otro'
]

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
}
</script>

<template>
  <div class="pt-20">
    <!-- Hero -->
    <section class="bg-gradient-to-br from-sky-900 to-slate-900 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span class="inline-block px-4 py-2 bg-white/10 text-sky-200 rounded-full text-sm font-medium mb-4">Contacto</span>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">Contáctanos</h1>
        <p class="text-xl text-sky-100 max-w-3xl">Estamos aquí para ayudarte. Envíanos un mensaje y nuestro equipo te responderá a la brevedad.</p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-3 gap-12">
          <!-- Contact Info -->
          <div class="lg:col-span-1">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h2>
            <p class="text-gray-600 mb-8">Puedes comunicarte con nosotros a través de los siguientes medios.</p>

            <div class="space-y-4">
              <!-- Phone -->
              <a href="tel:+555966890113" class="flex items-start gap-4 p-4 bg-white rounded-xl hover:shadow-lg transition-shadow">
                <div class="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Teléfono</h3>
                  <p class="text-gray-600 text-sm mt-1">+55 5966 890113</p>
                </div>
              </a>

              <!-- Email -->
              <a href="mailto:contacto@grupomundomaya.com" class="flex items-start gap-4 p-4 bg-white rounded-xl hover:shadow-lg transition-shadow">
                <div class="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Correo Electrónico</h3>
                  <p class="text-gray-600 text-sm mt-1">contacto@grupomundomaya.com</p>
                </div>
              </a>

              <!-- Address -->
              <div class="flex items-start gap-4 p-4 bg-white rounded-xl">
                <div class="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Dirección</h3>
                  <p class="text-gray-600 text-sm mt-1">Carretera Federal México-Pachuca, Santa Lucía, Edo. de Méx.</p>
                </div>
              </div>

              <!-- Hours -->
              <div class="flex items-start gap-4 p-4 bg-white rounded-xl">
                <div class="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Horario de Atención</h3>
                  <p class="text-gray-600 text-sm mt-1">Lunes a Viernes: 9:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-2">
            <div class="bg-white p-8 rounded-2xl shadow-lg">
              <h2 class="text-2xl font-bold text-gray-900 mb-2">Envíanos un mensaje</h2>
              <p class="text-gray-600 mb-8">Completa el formulario y te responderemos a la brevedad.</p>

              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Nombre completo *</label>
                    <input
                      v-model="form.name"
                      type="text"
                      required
                      class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Correo electrónico *</label>
                    <input
                      v-model="form.email"
                      type="email"
                      required
                      class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                    <input
                      v-model="form.phone"
                      type="tel"
                      class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="+52 55 1234 5678"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Asunto *</label>
                    <select
                      v-model="form.subject"
                      required
                      class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white"
                    >
                      <option value="">Selecciona un asunto</option>
                      <option v-for="subject in subjects" :key="subject" :value="subject">{{ subject }}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Mensaje *</label>
                  <textarea
                    v-model="form.message"
                    required
                    rows="5"
                    class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>

                <div class="flex items-center gap-4">
                  <button
                    type="submit"
                    class="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white rounded-xl font-semibold transition-all hover:-translate-y-1 hover:shadow-lg flex items-center gap-2"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                    Enviar Mensaje
                  </button>
                  <span class="text-gray-400 text-sm">* Campos requeridos</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Placeholder -->
    <section class="h-96 bg-gray-200 relative">
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center">
          <div class="w-16 h-16 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          </div>
          <p class="text-gray-600">Mapa de ubicación</p>
          <p class="text-gray-400 text-sm">Carretera Federal México-Pachuca, Santa Lucía</p>
        </div>
      </div>
    </section>
  </div>
</template>
