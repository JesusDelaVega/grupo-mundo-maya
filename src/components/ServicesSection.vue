<script setup lang="ts">
const services = [
  {
    id: 'turismo',
    icon: 'pi pi-building',
    title: 'Servicios Turísticos',
    description: 'Hoteles temáticos de primer nivel en las zonas arqueológicas más importantes de México: Palenque, Chichén Itzá, Tulum y más.',
    color: 'amber',
    features: ['Hoteles temáticos', 'Parques arqueológicos', 'Experiencias culturales', 'Turismo sustentable'],
    image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800'
  },
  {
    id: 'aeropuertos',
    icon: 'pi pi-send',
    title: 'Aeropuertos',
    description: 'Gestión y operación de 11 terminales aéreas distribuidas a nivel nacional, incluyendo el Aeropuerto Internacional Felipe Ángeles.',
    color: 'sky',
    features: ['11 terminales aéreas', 'AIFA Felipe Ángeles', 'Servicios de carga', 'Conectividad nacional'],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800'
  },
  {
    id: 'combustibles',
    icon: 'pi pi-bolt',
    title: 'Combustibles',
    description: 'Operaciones de suministro de combustible en ubicaciones estratégicas para apoyar la infraestructura nacional.',
    color: 'emerald',
    features: ['Distribución estratégica', 'Abastecimiento aeroportuario', 'Logística eficiente', 'Cobertura nacional'],
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800'
  }
]

const getColorClasses = (color: string) => {
  const colorMap = {
    amber: {
      bg: 'bg-amber-500',
      text: 'text-amber-500',
      border: 'border-amber-500/30',
      light: 'bg-amber-50'
    },
    sky: {
      bg: 'bg-sky-500',
      text: 'text-sky-500',
      border: 'border-sky-500/30',
      light: 'bg-sky-50'
    },
    emerald: {
      bg: 'bg-emerald-500',
      text: 'text-emerald-500',
      border: 'border-emerald-500/30',
      light: 'bg-emerald-50'
    }
  } as const

  type ColorKey = keyof typeof colorMap
  const key = (color in colorMap ? color : 'sky') as ColorKey
  return colorMap[key]
}
</script>

<template>
  <section class="section bg-slate-50 maya-pattern">
    <div class="container mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-4">
          <i class="pi pi-star"></i>
          Nuestros Servicios
        </div>
        <h2 class="section-title">Infraestructura para México</h2>
        <p class="section-subtitle">
          Operamos tres pilares fundamentales que conectan y fortalecen la economía y el turismo nacional.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.id"
          :id="service.id"
          class="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2"
        >
          <!-- Image -->
          <div class="relative h-48 overflow-hidden">
            <img
              :src="service.image"
              :alt="service.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div
              :class="[
                'absolute top-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center text-white',
                getColorClasses(service.color).bg
              ]"
            >
              <i :class="[service.icon, 'text-xl']"></i>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-slate-800 mb-3 group-hover:text-sky-700 transition-colors">
              {{ service.title }}
            </h3>
            <p class="text-slate-600 text-sm mb-4 leading-relaxed">
              {{ service.description }}
            </p>

            <!-- Features -->
            <ul class="space-y-2 mb-6">
              <li
                v-for="feature in service.features"
                :key="feature"
                class="flex items-center gap-2 text-sm text-slate-500"
              >
                <i :class="['pi pi-check-circle', getColorClasses(service.color).text]"></i>
                {{ feature }}
              </li>
            </ul>

            <!-- CTA -->
            <router-link
              :to="`/servicios#${service.id}`"
              :class="[
                'inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3',
                getColorClasses(service.color).text
              ]"
            >
              Conocer más
              <i class="pi pi-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-12">
        <router-link
          to="/servicios"
          class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-600 to-sky-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-sky-500/30 hover:-translate-y-1 transition-all duration-300"
        >
          Ver Todos los Servicios
          <i class="pi pi-arrow-right"></i>
        </router-link>
      </div>
    </div>
  </section>
</template>
