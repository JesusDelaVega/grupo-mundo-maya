<script setup lang="ts">
const services = [
  {
    id: 'turismo',
    icon: 'pi pi-building',
    title: 'Servicios Turísticos',
    subtitle: 'Experiencias únicas en el corazón de México',
    description: 'Operamos hoteles temáticos de primer nivel ubicados estratégicamente cerca de las zonas arqueológicas más importantes de México, ofreciendo a los visitantes una experiencia cultural inmersiva.',
    color: 'amber',
    features: [
      { icon: 'pi pi-home', title: 'Hoteles Temáticos', desc: 'Alojamiento de calidad con diseño inspirado en la cultura maya' },
      { icon: 'pi pi-map-marker', title: 'Ubicaciones Privilegiadas', desc: 'Palenque, Chichén Itzá, Tulum y más destinos' },
      { icon: 'pi pi-star', title: 'Experiencias Culturales', desc: 'Tours y actividades que conectan con la historia' },
      { icon: 'pi pi-leaf', title: 'Turismo Sustentable', desc: 'Compromiso con el medio ambiente y comunidades locales' }
    ],
    locations: ['Palenque', 'Chichén Itzá', 'Tulum', 'Calakmul', 'Uxmal'],
    image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1200'
  },
  {
    id: 'aeropuertos',
    icon: 'pi pi-send',
    title: 'Aeropuertos',
    subtitle: 'Conectando México con el mundo',
    description: 'Gestionamos y operamos 11 terminales aéreas distribuidas a nivel nacional, incluyendo el Aeropuerto Internacional Felipe Ángeles, garantizando operaciones seguras y eficientes.',
    color: 'sky',
    features: [
      { icon: 'pi pi-send', title: '11 Terminales Aéreas', desc: 'Red aeroportuaria distribuida nacionalmente' },
      { icon: 'pi pi-verified', title: 'AIFA', desc: 'Aeropuerto Internacional Felipe Ángeles' },
      { icon: 'pi pi-box', title: 'Servicios de Carga', desc: 'Logística aérea para comercio e industria' },
      { icon: 'pi pi-shield', title: 'Seguridad', desc: 'Estándares internacionales de seguridad aeroportuaria' }
    ],
    locations: ['AIFA Felipe Ángeles', 'Chetumal', 'Palenque', 'Campeche', 'Tepic'],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200'
  },
  {
    id: 'combustibles',
    icon: 'pi pi-bolt',
    title: 'Combustibles',
    subtitle: 'Energía para el desarrollo nacional',
    description: 'Operamos instalaciones de suministro de combustible en ubicaciones estratégicas, apoyando la infraestructura de transporte y la conectividad nacional.',
    color: 'emerald',
    features: [
      { icon: 'pi pi-map', title: 'Distribución Estratégica', desc: 'Ubicaciones clave en todo el país' },
      { icon: 'pi pi-send', title: 'Combustible Aviación', desc: 'Suministro para operaciones aeroportuarias' },
      { icon: 'pi pi-truck', title: 'Logística', desc: 'Cadena de suministro eficiente' },
      { icon: 'pi pi-check-circle', title: 'Calidad', desc: 'Estándares de calidad garantizados' }
    ],
    locations: ['Múltiples ubicaciones nacionales'],
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200'
  }
]

const getColorClasses = (color: string) => {
  const colorMap = {
    amber: {
      gradient: 'from-amber-500 to-amber-400',
      bg: 'bg-amber-500',
      text: 'text-amber-500',
      light: 'bg-amber-50'
    },
    sky: {
      gradient: 'from-sky-500 to-sky-400',
      bg: 'bg-sky-500',
      text: 'text-sky-500',
      light: 'bg-sky-50'
    },
    emerald: {
      gradient: 'from-emerald-500 to-emerald-400',
      bg: 'bg-emerald-500',
      text: 'text-emerald-500',
      light: 'bg-emerald-50'
    }
  } as const

  type ColorKey = keyof typeof colorMap
  const key = (color in colorMap ? color : 'sky') as ColorKey
  return colorMap[key]
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative pt-32 pb-20 bg-gradient-to-br from-sky-900 via-sky-800 to-slate-900 overflow-hidden">
      <div class="absolute inset-0 maya-pattern opacity-20"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>

      <div class="relative container mx-auto px-6">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-sky-200 rounded-full text-sm font-medium mb-6">
            <i class="pi pi-briefcase"></i>
            Servicios
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestros Servicios
          </h1>
          <p class="text-xl text-sky-100/80 leading-relaxed">
            Operamos tres pilares fundamentales que conectan y fortalecen la economía y el turismo de México.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Detail -->
    <div v-for="(service, index) in services" :key="service.id">
      <section
        :id="service.id"
        :class="['section', index % 2 === 0 ? 'bg-white' : 'bg-slate-50']"
      >
        <div class="container mx-auto px-6">
          <div :class="['grid lg:grid-cols-2 gap-16 items-center', index % 2 !== 0 ? 'lg:flex-row-reverse' : '']">
            <!-- Content -->
            <div :class="[index % 2 !== 0 ? 'lg:order-2' : '']">
              <div :class="['inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4', getColorClasses(service.color).light, getColorClasses(service.color).text]">
                <i :class="service.icon"></i>
                {{ service.subtitle }}
              </div>
              <h2 class="text-3xl font-bold text-slate-800 mb-4">{{ service.title }}</h2>
              <p class="text-slate-600 mb-8 leading-relaxed text-lg">{{ service.description }}</p>

              <!-- Features Grid -->
              <div class="grid sm:grid-cols-2 gap-4 mb-8">
                <div
                  v-for="feature in service.features"
                  :key="feature.title"
                  class="flex gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-sky-200 hover:shadow-card transition-all duration-300"
                >
                  <div :class="['w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0', getColorClasses(service.color).light, getColorClasses(service.color).text]">
                    <i :class="feature.icon"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-slate-800 text-sm">{{ feature.title }}</h4>
                    <p class="text-slate-500 text-xs mt-1">{{ feature.desc }}</p>
                  </div>
                </div>
              </div>

              <!-- Locations -->
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="location in service.locations"
                  :key="location"
                  class="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full text-sm"
                >
                  <i class="pi pi-map-marker mr-1 text-xs"></i>
                  {{ location }}
                </span>
              </div>
            </div>

            <!-- Image -->
            <div :class="['relative', index % 2 !== 0 ? 'lg:order-1' : '']">
              <div class="relative rounded-2xl overflow-hidden shadow-elegant">
                <img
                  :src="service.image"
                  :alt="service.title"
                  class="w-full aspect-[4/3] object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <!-- Decorative element -->
              <div :class="['absolute -z-10 w-full h-full rounded-2xl top-6 -right-6', getColorClasses(service.color).bg, 'opacity-20']"></div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- CTA -->
    <section class="section bg-gradient-to-br from-sky-900 to-slate-900 text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-4">¿Necesitas más información?</h2>
        <p class="text-sky-200/80 mb-8 max-w-2xl mx-auto">
          Nuestro equipo está disponible para responder tus preguntas sobre cualquiera de nuestros servicios.
        </p>
        <router-link
          to="/contacto"
          class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-400 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-1 transition-all duration-300"
        >
          <i class="pi pi-envelope"></i>
          Contactar
        </router-link>
      </div>
    </section>
  </div>
</template>
