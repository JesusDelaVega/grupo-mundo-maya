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

const contactInfo = [
  {
    icon: 'pi pi-phone',
    title: 'Teléfono',
    value: '+52 55 5555 5555',
    link: 'tel:+525555555555',
    color: 'sky'
  },
  {
    icon: 'pi pi-envelope',
    title: 'Correo Electrónico',
    value: 'contacto@grupomundomaya.com',
    link: 'mailto:contacto@grupomundomaya.com',
    color: 'amber'
  },
  {
    icon: 'pi pi-map-marker',
    title: 'Dirección',
    value: 'Ciudad de México, México',
    link: '#',
    color: 'emerald'
  },
  {
    icon: 'pi pi-clock',
    title: 'Horario de Atención',
    value: 'Lunes a Viernes: 9:00 - 18:00',
    link: null,
    color: 'purple'
  }
]

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
  // Handle form submission
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative pt-32 pb-20 bg-gradient-to-br from-sky-900 via-sky-800 to-slate-900 overflow-hidden">
      <div class="absolute inset-0 maya-pattern opacity-20"></div>

      <div class="relative container mx-auto px-6">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-sky-200 rounded-full text-sm font-medium mb-6">
            <i class="pi pi-envelope"></i>
            Contacto
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Contáctanos
          </h1>
          <p class="text-xl text-sky-100/80 leading-relaxed">
            Estamos aquí para ayudarte. Envíanos un mensaje y nuestro equipo te responderá a la brevedad.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-3 gap-12">
          <!-- Contact Info -->
          <div class="lg:col-span-1">
            <h2 class="text-2xl font-bold text-slate-800 mb-6">Información de Contacto</h2>
            <p class="text-slate-600 mb-8">
              Puedes comunicarte con nosotros a través de los siguientes medios o completando el formulario.
            </p>

            <div class="space-y-4">
              <a
                v-for="info in contactInfo"
                :key="info.title"
                :href="info.link || '#'"
                :class="[
                  'flex items-start gap-4 p-4 bg-white rounded-xl transition-all duration-300',
                  info.link ? 'hover:shadow-card cursor-pointer' : 'cursor-default'
                ]"
              >
                <div
                  :class="[
                    'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0',
                    info.color === 'sky' ? 'bg-sky-100 text-sky-600' : '',
                    info.color === 'amber' ? 'bg-amber-100 text-amber-600' : '',
                    info.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' : '',
                    info.color === 'purple' ? 'bg-purple-100 text-purple-600' : ''
                  ]"
                >
                  <i :class="[info.icon, 'text-xl']"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-slate-800">{{ info.title }}</h3>
                  <p class="text-slate-600 text-sm mt-1">{{ info.value }}</p>
                </div>
              </a>
            </div>

            <!-- Social Links -->
            <div class="mt-8 pt-8 border-t border-slate-200">
              <h3 class="font-semibold text-slate-800 mb-4">Síguenos</h3>
              <div class="flex gap-3">
                <a
                  v-for="social in ['facebook', 'twitter', 'instagram', 'youtube']"
                  :key="social"
                  href="#"
                  class="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-slate-600 hover:bg-sky-600 hover:text-white transition-all duration-300"
                >
                  <i :class="['pi', `pi-${social}`]"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-2">
            <div class="bg-white p-8 rounded-2xl shadow-card">
              <h2 class="text-2xl font-bold text-slate-800 mb-2">Envíanos un mensaje</h2>
              <p class="text-slate-600 mb-8">Completa el formulario y te responderemos a la brevedad.</p>

              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-slate-700 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      v-model="form.name"
                      type="text"
                      required
                      class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-slate-700 mb-2">
                      Correo electrónico *
                    </label>
                    <input
                      v-model="form.email"
                      type="email"
                      required
                      class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-slate-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      v-model="form.phone"
                      type="tel"
                      class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                      placeholder="+52 55 1234 5678"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-slate-700 mb-2">
                      Asunto *
                    </label>
                    <select
                      v-model="form.subject"
                      required
                      class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 bg-white"
                    >
                      <option value="">Selecciona un asunto</option>
                      <option v-for="subject in subjects" :key="subject" :value="subject">
                        {{ subject }}
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    v-model="form.message"
                    required
                    rows="5"
                    class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>

                <div class="flex items-center gap-4">
                  <button
                    type="submit"
                    class="px-8 py-4 bg-gradient-to-r from-sky-600 to-sky-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-sky-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                  >
                    <i class="pi pi-send"></i>
                    Enviar Mensaje
                  </button>
                  <span class="text-slate-400 text-sm">* Campos requeridos</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section (Placeholder) -->
    <section class="h-96 bg-slate-200 relative">
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center">
          <div class="w-16 h-16 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <i class="pi pi-map-marker text-2xl"></i>
          </div>
          <p class="text-slate-600">Mapa de ubicación</p>
          <p class="text-slate-400 text-sm">Ciudad de México, México</p>
        </div>
      </div>
    </section>
  </div>
</template>
