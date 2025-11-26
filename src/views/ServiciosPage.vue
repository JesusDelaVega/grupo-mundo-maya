<script setup lang="ts">
import { ref } from 'vue'

const lightboxOpen = ref(false)
const currentImage = ref('')
const currentTitle = ref('')

const openLightbox = (src: string, title: string) => {
  currentImage.value = src
  currentTitle.value = title
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}
</script>

<template>
  <div class="pt-20">
    <!-- Hero -->
    <section class="bg-gradient-to-br from-sky-900 to-slate-900 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">Nuestros Servicios</h1>
        <p class="text-xl text-sky-100 max-w-3xl">Infraestructura para México</p>
        <p class="text-lg text-sky-200 max-w-2xl mt-2">Operamos tres pilares fundamentales que conectan y fortalecen la economía nacional.</p>
      </div>
    </section>

    <!-- Tres Pilares con Imágenes -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-8">

          <!-- Servicios Turísticos -->
          <div class="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <div class="aspect-[4/5] bg-gradient-to-br from-amber-500 to-amber-700 p-6 md:p-8 flex flex-col">
              <!-- Icono Grande -->
              <div class="w-28 h-28 md:w-32 md:h-32 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <img src="https://grupomundomaya.com/assets/img/icono hoteles.png" alt="Hoteles" class="w-20 h-20 md:w-24 md:h-24 object-contain" />
              </div>
              <h3 class="text-2xl font-bold text-white text-center mb-4">Servicios Turísticos</h3>
              <p class="text-amber-100 text-center text-sm mb-6">6 hoteles temáticos en zonas arqueológicas: Palenque, Edzná, Nuevo Uxmal, Chichén Itzá, Tulum y Calakmul.</p>

              <!-- Estadísticas -->
              <div class="mt-auto space-y-3">
                <div class="flex items-center gap-3 bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                  <img src="https://grupomundomaya.com/assets/img/icono parques.png" alt="Parques" class="w-10 h-10" />
                  <div>
                    <span class="text-white font-bold">4 Parques y Museos</span>
                    <p class="text-amber-200 text-xs">Experiencias culturales</p>
                  </div>
                </div>
                <router-link to="/servicios#hoteles" class="flex items-center justify-center gap-2 bg-white text-amber-700 font-semibold py-3 rounded-xl hover:bg-amber-50 transition-colors">
                  Ver más
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </router-link>
              </div>
            </div>
          </div>

          <!-- Aeropuertos -->
          <div class="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <div class="aspect-[4/5] bg-gradient-to-br from-sky-600 to-sky-800 p-6 md:p-8 flex flex-col">
              <!-- Icono Grande -->
              <div class="w-28 h-28 md:w-32 md:h-32 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <img src="https://grupomundomaya.com/assets/img/iconavion.png" alt="Aeropuertos" class="w-20 h-20 md:w-24 md:h-24 object-contain" />
              </div>
              <h3 class="text-2xl font-bold text-white text-center mb-4">Aeropuertos</h3>
              <p class="text-sky-100 text-center text-sm mb-6">12 terminales aéreas incluyendo AIFA, Tulum, Chetumal, Palenque, Campeche y más.</p>

              <!-- Logos de marcas -->
              <div class="mt-auto space-y-3">
                <div class="flex items-center gap-3 bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                  <img src="https://grupomundomaya.com/assets/img/Botones/LOGO VECTOR.png" alt="AIFA" class="h-10 object-contain" />
                  <span class="text-white font-medium text-sm">AIFA Felipe Ángeles</span>
                </div>
                <div class="flex items-center gap-3 bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                  <img src="https://grupomundomaya.com/assets/img/Botones/mexicanaaz.png" alt="Mexicana" class="h-8 object-contain" />
                  <span class="text-white font-medium text-sm">Mexicana de Aviación</span>
                </div>
                <router-link to="/servicios#aeropuertos" class="flex items-center justify-center gap-2 bg-white text-sky-700 font-semibold py-3 rounded-xl hover:bg-sky-50 transition-colors">
                  Ver más
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </router-link>
              </div>
            </div>
          </div>

          <!-- Combustibles -->
          <div class="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <div class="aspect-[4/5] bg-gradient-to-br from-emerald-600 to-emerald-800 p-6 md:p-8 flex flex-col">
              <!-- Icono Grande -->
              <div class="w-28 h-28 md:w-32 md:h-32 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <img src="https://grupomundomaya.com/assets/img/iconcombustibles.png" alt="Combustibles" class="w-20 h-20 md:w-24 md:h-24 object-contain" />
              </div>
              <h3 class="text-2xl font-bold text-white text-center mb-4">Combustibles</h3>
              <p class="text-emerald-100 text-center text-sm mb-6">11 puntos de distribución estratégica de combustible de aviación a nivel nacional.</p>

              <!-- Info -->
              <div class="mt-auto space-y-3">
                <div class="flex items-center gap-3 bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                  <div>
                    <span class="text-white font-medium text-sm">Logística eficiente</span>
                    <p class="text-emerald-200 text-xs">Cobertura nacional</p>
                  </div>
                </div>
                <router-link to="/servicios#combustibles" class="flex items-center justify-center gap-2 bg-white text-emerald-700 font-semibold py-3 rounded-xl hover:bg-emerald-50 transition-colors">
                  Ver más
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </router-link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Galería de Mapas - Estilo Arte -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-4">Infraestructura Nacional</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Presencia en Todo México</h2>
          <p class="text-xl text-gray-600">Haz clic en cada mapa para verlo en grande</p>
        </div>

        <!-- Grid de Galería -->
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Mapa Aeropuertos -->
          <div
            @click="openLightbox('https://grupomundomaya.com/assets/img/MAPA AROPUERTOS JIG_NOMBRES_130625.png', '12 Aeropuertos')"
            class="group cursor-pointer"
          >
            <div class="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-sky-50">
              <div class="aspect-square p-6 flex items-center justify-center">
                <img
                  src="https://grupomundomaya.com/assets/img/MAPA AROPUERTOS JIG_NOMBRES_130625.png"
                  alt="Mapa de Aeropuertos"
                  class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-sky-900/90 via-sky-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div class="p-6 text-white">
                  <div class="flex items-center gap-2 mb-2">
                    <img src="https://grupomundomaya.com/assets/img/iconavion.png" alt="" class="w-8 h-8" />
                    <span class="text-3xl font-bold">12</span>
                  </div>
                  <h3 class="text-xl font-semibold">Aeropuertos</h3>
                  <p class="text-sky-200 text-sm mt-1">Clic para ampliar</p>
                </div>
              </div>
              <!-- Icono de zoom -->
              <div class="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                <svg class="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                </svg>
              </div>
            </div>
            <div class="mt-4 text-center">
              <h3 class="text-lg font-bold text-gray-900">Aeropuertos</h3>
              <p class="text-gray-500 text-sm">12 terminales aéreas</p>
            </div>
          </div>

          <!-- Mapa Hoteles -->
          <div
            @click="openLightbox('https://grupomundomaya.com/assets/img/MAPA HOTELES_Y PARQUES_110625 sin iconos.png', '6 Hoteles + 4 Parques')"
            class="group cursor-pointer"
          >
            <div class="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-amber-50">
              <div class="aspect-square p-6 flex items-center justify-center">
                <img
                  src="https://grupomundomaya.com/assets/img/MAPA HOTELES_Y PARQUES_110625 sin iconos.png"
                  alt="Mapa de Hoteles y Parques"
                  class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-amber-900/90 via-amber-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div class="p-6 text-white">
                  <div class="flex items-center gap-2 mb-2">
                    <img src="https://grupomundomaya.com/assets/img/icono hoteles.png" alt="" class="w-8 h-8" />
                    <span class="text-3xl font-bold">6+4</span>
                  </div>
                  <h3 class="text-xl font-semibold">Hoteles y Parques</h3>
                  <p class="text-amber-200 text-sm mt-1">Clic para ampliar</p>
                </div>
              </div>
              <div class="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                <svg class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                </svg>
              </div>
            </div>
            <div class="mt-4 text-center">
              <h3 class="text-lg font-bold text-gray-900">Hoteles y Parques</h3>
              <p class="text-gray-500 text-sm">6 hoteles + 4 parques temáticos</p>
            </div>
          </div>

          <!-- Mapa Combustibles -->
          <div
            @click="openLightbox('https://grupomundomaya.com/assets/img/MAPA COMB_GMM_SIN NOMB.png', '11 Puntos de Combustible')"
            class="group cursor-pointer"
          >
            <div class="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-emerald-50">
              <div class="aspect-square p-6 flex items-center justify-center">
                <img
                  src="https://grupomundomaya.com/assets/img/MAPA COMB_GMM_SIN NOMB.png"
                  alt="Mapa de Combustibles"
                  class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div class="p-6 text-white">
                  <div class="flex items-center gap-2 mb-2">
                    <img src="https://grupomundomaya.com/assets/img/iconcombustibles.png" alt="" class="w-8 h-8" />
                    <span class="text-3xl font-bold">11</span>
                  </div>
                  <h3 class="text-xl font-semibold">Puntos de Combustible</h3>
                  <p class="text-emerald-200 text-sm mt-1">Clic para ampliar</p>
                </div>
              </div>
              <div class="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                </svg>
              </div>
            </div>
            <div class="mt-4 text-center">
              <h3 class="text-lg font-bold text-gray-900">Combustibles</h3>
              <p class="text-gray-500 text-sm">11 instalaciones de suministro</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Detalle Servicios -->
    <section id="aeropuertos" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Aeropuertos -->
        <div class="mb-20">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center">
                <img src="https://grupomundomaya.com/assets/img/iconavion.png" alt="" class="w-8 h-8" />
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">Aeropuertos</h3>
                <p class="text-gray-500">12 terminales aéreas a nivel nacional</p>
              </div>
            </div>
            <a href="https://grupomundomaya.com/BoletinInformativoAeropuertos.html" target="_blank" class="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-500 text-white rounded-lg font-medium hover:bg-sky-600 transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              Boletín Informativo
            </a>
          </div>

          <!-- Aeropuertos Destacados -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <!-- Tulum -->
            <a href="https://aitulum.com/es" target="_blank" class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div class="relative h-48 overflow-hidden">
                <img src="https://grupomundomaya.com/assets/img/Botones/Copia de Versión vertical en color 4.png" alt="Aeropuerto de Tulum" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div class="absolute inset-0 bg-gradient-to-t from-sky-900/90 via-sky-900/40 to-transparent"></div>
                <div class="absolute top-4 left-4 flex gap-2">
                  <span class="px-3 py-1 bg-white/90 rounded-full text-xs font-semibold text-sky-700">Internacional</span>
                </div>
                <div class="absolute top-4 right-4">
                  <span class="text-white/90 text-sm font-mono bg-black/30 px-2 py-1 rounded">TQO</span>
                </div>
                <div class="absolute bottom-4 left-4 right-4">
                  <h4 class="text-xl font-bold text-white mb-1">Aeropuerto Internacional de Tulum</h4>
                  <p class="text-sky-200 text-sm">Felipe Carrillo Puerto • Quintana Roo</p>
                </div>
              </div>
              <div class="p-5">
                <div class="space-y-2 text-sm">
                  <div class="flex items-center gap-2 text-gray-600">
                    <svg class="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    <span>Conectado con Tren Maya</span>
                  </div>
                  <div class="flex items-center gap-2 text-gray-600">
                    <svg class="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                    <span>Operador: GAFSACOMM</span>
                  </div>
                </div>
                <div class="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span class="text-sky-600 text-sm font-medium">Ver vuelos y horarios</span>
                  <svg class="w-5 h-5 text-sky-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </div>
              </div>
            </a>

            <!-- Nuevo Laredo -->
            <a href="https://grupomundomaya.com/aeropuertos/aeropuerto_nuevo_laredo.html" target="_blank" class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div class="relative h-48 overflow-hidden">
                <img src="https://grupomundomaya.com/assets/img/aeropuerto_nuevo_laredo/foto NUEVO LAREDO.jpg" alt="Aeropuerto Nuevo Laredo" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                <div class="absolute top-4 left-4 flex gap-2">
                  <span class="px-3 py-1 bg-white/90 rounded-full text-xs font-semibold text-slate-700">Internacional</span>
                </div>
                <div class="absolute top-4 right-4">
                  <span class="text-white/90 text-sm font-mono bg-black/30 px-2 py-1 rounded">NLD</span>
                </div>
                <div class="absolute bottom-4 left-4 right-4">
                  <h4 class="text-xl font-bold text-white mb-1">Aeropuerto Quetzalcóatl</h4>
                  <p class="text-gray-300 text-sm">Nuevo Laredo • Tamaulipas</p>
                </div>
              </div>
              <div class="p-5">
                <div class="grid grid-cols-2 gap-3 text-sm mb-3">
                  <div class="text-gray-500"><span class="font-medium text-gray-700">299.84 ha</span> superficie</div>
                  <div class="text-gray-500"><span class="font-medium text-gray-700">2,000 m</span> pista</div>
                </div>
                <div class="flex flex-wrap gap-1">
                  <span class="px-2 py-1 bg-green-50 text-green-700 rounded text-xs">AFAC</span>
                  <span class="px-2 py-1 bg-green-50 text-green-700 rounded text-xs">PROFEPA</span>
                  <span class="px-2 py-1 bg-sky-50 text-sky-700 rounded text-xs">Frontera EE.UU.</span>
                </div>
              </div>
            </a>

            <!-- Nogales -->
            <a href="https://grupomundomaya.com/aeropuertos/aeropuerto_nogales.html" target="_blank" class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div class="relative h-48 overflow-hidden">
                <img src="https://grupomundomaya.com/assets/img/aeropuerto_nogales/foto NOGALES.jpg" alt="Aeropuerto Nogales" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div class="absolute inset-0 bg-gradient-to-t from-amber-900/90 via-amber-900/40 to-transparent"></div>
                <div class="absolute top-4 left-4 flex gap-2">
                  <span class="px-3 py-1 bg-white/90 rounded-full text-xs font-semibold text-amber-700">Internacional</span>
                </div>
                <div class="absolute top-4 right-4">
                  <span class="text-white/90 text-sm font-mono bg-black/30 px-2 py-1 rounded">NOG</span>
                </div>
                <div class="absolute bottom-4 left-4 right-4">
                  <h4 class="text-xl font-bold text-white mb-1">Aeropuerto de Nogales</h4>
                  <p class="text-amber-200 text-sm">Nogales • Sonora</p>
                </div>
              </div>
              <div class="p-5">
                <div class="grid grid-cols-2 gap-3 text-sm mb-3">
                  <div class="text-gray-500"><span class="font-medium text-gray-700">108.6 ha</span> superficie</div>
                  <div class="text-gray-500"><span class="font-medium text-gray-700">1,800 m</span> pista</div>
                </div>
                <div class="flex flex-wrap gap-1">
                  <span class="px-2 py-1 bg-amber-50 text-amber-700 rounded text-xs">Frontera Arizona</span>
                  <span class="px-2 py-1 bg-sky-50 text-sky-700 rounded text-xs">13.5 km ciudad</span>
                </div>
              </div>
            </a>
          </div>

          <!-- Más Aeropuertos -->
          <h4 class="text-lg font-semibold text-gray-700 mb-4 mt-10">Más aeropuertos de la red</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <!-- Ciudad Victoria -->
            <a href="https://grupomundomaya.com/aeropuertos/aeropuerto_cd-victoria.html" target="_blank" class="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-sky-300 transition-all">
              <div class="relative h-32 overflow-hidden">
                <img src="https://grupomundomaya.com/assets/img/aeropuerto_ciudad_victoria/foto CD VICTORIA.jpg" alt="Aeropuerto Cd. Victoria" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span class="absolute top-2 right-2 px-2 py-0.5 bg-sky-500 text-white rounded text-xs">Internacional</span>
                <span class="absolute bottom-2 left-2 text-white text-xs font-mono">CVM</span>
              </div>
              <div class="p-4">
                <h5 class="font-bold text-gray-900 group-hover:text-sky-600 transition-colors text-sm">Gral. Pedro José Méndez</h5>
                <p class="text-xs text-gray-500 mb-2">Ciudad Victoria, Tamaulipas</p>
                <div class="flex justify-between text-xs text-gray-500">
                  <span><strong class="text-gray-700">388.70 ha</strong></span>
                  <span><strong class="text-gray-700">2,200 m</strong> pista</span>
                </div>
                <div class="mt-2 pt-2 border-t border-gray-100 flex gap-1">
                  <span class="px-1.5 py-0.5 bg-green-50 text-green-700 rounded text-xs">AFAC</span>
                  <span class="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-xs">ACA-1</span>
                </div>
              </div>
            </a>

            <!-- Puebla -->
            <a href="https://grupomundomaya.com/aeropuertos/aeropuerto_puebla.html" target="_blank" class="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-sky-300 transition-all">
              <div class="relative h-32 overflow-hidden">
                <img src="https://grupomundomaya.com/assets/img/aeropuerto_puebla/foto PUEBLA.jpg" alt="Aeropuerto Puebla" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span class="absolute top-2 right-2 px-2 py-0.5 bg-sky-500 text-white rounded text-xs">Internacional</span>
                <span class="absolute bottom-2 left-2 text-white text-xs font-mono">PBC</span>
              </div>
              <div class="p-4">
                <h5 class="font-bold text-gray-900 group-hover:text-sky-600 transition-colors text-sm">Hermanos Serdán</h5>
                <p class="text-xs text-gray-500 mb-2">Puebla (Huejotzingo)</p>
                <div class="flex justify-between text-xs text-gray-500">
                  <span><strong class="text-gray-700">518.1 ha</strong></span>
                  <span><strong class="text-gray-700">3,605 m</strong> pista</span>
                </div>
                <div class="mt-2 pt-2 border-t border-gray-100 flex gap-1">
                  <span class="px-1.5 py-0.5 bg-green-50 text-green-700 rounded text-xs">AFAC</span>
                  <span class="px-1.5 py-0.5 bg-purple-50 text-purple-700 rounded text-xs">Volaris</span>
                </div>
              </div>
            </a>

            <!-- Uruapan -->
            <a href="https://grupomundomaya.com/aeropuertos/aeropuerto_uruapan.html" target="_blank" class="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-sky-300 transition-all">
              <div class="relative h-32 overflow-hidden">
                <img src="https://grupomundomaya.com/assets/img/aeropuerto_uruapan/foto URUAPAN.jpg" alt="Aeropuerto Uruapan" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span class="absolute top-2 right-2 px-2 py-0.5 bg-sky-500 text-white rounded text-xs">Internacional</span>
                <span class="absolute bottom-2 left-2 text-white text-xs font-mono">UPN</span>
              </div>
              <div class="p-4">
                <h5 class="font-bold text-gray-900 group-hover:text-sky-600 transition-colors text-sm">Lic. Ignacio López Rayón</h5>
                <p class="text-xs text-gray-500 mb-2">Uruapan, Michoacán</p>
                <div class="flex justify-between text-xs text-gray-500">
                  <span><strong class="text-gray-700">263.8 ha</strong></span>
                  <span><strong class="text-gray-700">2,400 m</strong> pista</span>
                </div>
                <div class="mt-2 pt-2 border-t border-gray-100 flex gap-1">
                  <span class="px-1.5 py-0.5 bg-green-50 text-green-700 rounded text-xs">AFAC</span>
                  <span class="px-1.5 py-0.5 bg-purple-50 text-purple-700 rounded text-xs">Volaris</span>
                </div>
              </div>
            </a>

            <!-- Tamuín -->
            <a href="https://grupomundomaya.com/aeropuertos/aeropuerto_tamuin.html" target="_blank" class="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-sky-300 transition-all">
              <div class="relative h-32 overflow-hidden">
                <img src="https://grupomundomaya.com/assets/img/aeropuerto_tamuin/foto TAMUIN.jpg" alt="Aeropuerto Tamuín" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span class="absolute top-2 right-2 px-2 py-0.5 bg-gray-500 text-white rounded text-xs">Regional</span>
                <span class="absolute bottom-2 left-2 text-white text-xs font-mono">TSL</span>
              </div>
              <div class="p-4">
                <h5 class="font-bold text-gray-900 group-hover:text-sky-600 transition-colors text-sm">Aeropuerto de Tamuín</h5>
                <p class="text-xs text-gray-500 mb-2">Tamuín, San Luis Potosí</p>
                <div class="flex justify-between text-xs text-gray-500">
                  <span><strong class="text-gray-700">122.52 ha</strong></span>
                  <span><strong class="text-gray-700">1,405 m</strong> pista</span>
                </div>
                <div class="mt-2 pt-2 border-t border-gray-100">
                  <span class="text-xs text-gray-400">Hub regional de negocios</span>
                </div>
              </div>
            </a>
          </div>

          <!-- Resto de Aeropuertos con imágenes -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <!-- Campeche -->
            <a href="https://grupomundomaya.com/aeropuertos/aeropuerto_campeche.html" target="_blank" class="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-sky-300 transition-all">
              <div class="relative h-32 overflow-hidden">
                <img src="https://grupomundomaya.com/assets/img/aeropuerto_campeche/foto CAMPECHE.jpg" alt="Aeropuerto Campeche" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span class="absolute top-2 right-2 px-2 py-0.5 bg-sky-500 text-white rounded text-xs">Internacional</span>
                <span class="absolute bottom-2 left-2 text-white text-xs font-mono">CPE</span>
              </div>
              <div class="p-4">
                <h5 class="font-bold text-gray-900 group-hover:text-sky-600 transition-colors text-sm">Ing. Alberto Acuña Ongay</h5>
                <p class="text-xs text-gray-500 mb-2">Campeche, Campeche</p>
                <div class="flex justify-between text-xs text-gray-500">
                  <span><strong class="text-gray-700">413.73 ha</strong></span>
                  <span><strong class="text-gray-700">2,500 m</strong> pista</span>
                </div>
                <div class="mt-2 pt-2 border-t border-gray-100 flex gap-1">
                  <span class="px-1.5 py-0.5 bg-sky-50 text-sky-700 rounded text-xs">9 km ciudad</span>
                  <span class="px-1.5 py-0.5 bg-amber-50 text-amber-700 rounded text-xs">B-727</span>
                </div>
              </div>
            </a>

            <!-- Chetumal -->
            <a href="https://grupomundomaya.com/aeropuertos/aeropuerto_chetumal.html" target="_blank" class="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-sky-300 transition-all">
              <div class="relative h-32 overflow-hidden">
                <img src="https://grupomundomaya.com/assets/img/aerochetumal/foto CHETUMAL.jpg" alt="Aeropuerto Chetumal" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span class="absolute top-2 right-2 px-2 py-0.5 bg-sky-500 text-white rounded text-xs">Internacional</span>
                <span class="absolute bottom-2 left-2 text-white text-xs font-mono">CTM</span>
              </div>
              <div class="p-4">
                <h5 class="font-bold text-gray-900 group-hover:text-sky-600 transition-colors text-sm">Aeropuerto de Chetumal</h5>
                <p class="text-xs text-gray-500 mb-2">Chetumal, Quintana Roo</p>
                <div class="flex justify-between text-xs text-gray-500">
                  <span><strong class="text-gray-700">230 ha</strong></span>
                  <span><strong class="text-gray-700">2,693 m</strong> pista</span>
                </div>
                <div class="mt-2 pt-2 border-t border-gray-100 flex gap-1">
                  <span class="px-1.5 py-0.5 bg-emerald-50 text-emerald-700 rounded text-xs">Frontera Belice</span>
                  <span class="px-1.5 py-0.5 bg-sky-50 text-sky-700 rounded text-xs">2 km ciudad</span>
                </div>
              </div>
            </a>

            <!-- Ixtepec -->
            <a href="https://grupomundomaya.com/aeropuertos/aeropuerto_ixtepec.html" target="_blank" class="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-sky-300 transition-all">
              <div class="relative h-32 overflow-hidden">
                <img src="https://grupomundomaya.com/assets/img/aeropuerto_ciudad_ixtepec/foto CD IXTEPEC.jpg" alt="Aeropuerto Ixtepec" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span class="absolute top-2 right-2 px-2 py-0.5 bg-slate-500 text-white rounded text-xs">Militar/Civil</span>
                <span class="absolute bottom-2 left-2 text-white text-xs font-mono">IZT</span>
              </div>
              <div class="p-4">
                <h5 class="font-bold text-gray-900 group-hover:text-sky-600 transition-colors text-sm">Base Aérea Militar N° 2</h5>
                <p class="text-xs text-gray-500 mb-2">Cd. Ixtepec, Oaxaca</p>
                <div class="flex justify-between text-xs text-gray-500">
                  <span><strong class="text-gray-700">125.9 ha</strong></span>
                  <span><strong class="text-gray-700">2,323 m</strong> pista</span>
                </div>
                <div class="mt-2 pt-2 border-t border-gray-100 flex gap-1">
                  <span class="px-1.5 py-0.5 bg-slate-100 text-slate-700 rounded text-xs">Gral. A. Cárdenas</span>
                </div>
              </div>
            </a>

            <!-- Palenque -->
            <a href="https://grupomundomaya.com/aeropuertos/aeropuerto_palenque.html" target="_blank" class="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-sky-300 transition-all">
              <div class="relative h-32 overflow-hidden">
                <img src="https://grupomundomaya.com/assets/img/aeropalenque/foto PALENQUE.jpg" alt="Aeropuerto Palenque" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span class="absolute top-2 right-2 px-2 py-0.5 bg-emerald-500 text-white rounded text-xs">Turístico</span>
                <span class="absolute bottom-2 left-2 text-white text-xs font-mono">PQM</span>
              </div>
              <div class="p-4">
                <h5 class="font-bold text-gray-900 group-hover:text-sky-600 transition-colors text-sm">Aeropuerto de Palenque</h5>
                <p class="text-xs text-gray-500 mb-2">Palenque, Chiapas</p>
                <div class="flex justify-between text-xs text-gray-500">
                  <span><strong class="text-gray-700">201.5 ha</strong></span>
                  <span><strong class="text-gray-700">2,450 m</strong> pista</span>
                </div>
                <div class="mt-2 pt-2 border-t border-gray-100 flex gap-1">
                  <span class="px-1.5 py-0.5 bg-green-50 text-green-700 rounded text-xs">DGAC</span>
                  <span class="px-1.5 py-0.5 bg-amber-50 text-amber-700 rounded text-xs">Zona Arqueológica</span>
                </div>
              </div>
            </a>
          </div>

          <!-- AIFA -->
          <div class="mt-6">
            <a href="https://aifa.aero/" target="_blank" class="group block bg-gradient-to-r from-sky-900 to-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all">
              <div class="flex flex-col md:flex-row items-center gap-6 p-6">
                <img src="https://grupomundomaya.com/assets/img/Botones/LOGO VECTOR.png" alt="AIFA" class="h-16 md:h-20 object-contain" />
                <div class="flex-1 text-center md:text-left">
                  <h5 class="text-xl font-bold text-white mb-1">Aeropuerto Internacional Felipe Ángeles (AIFA)</h5>
                  <p class="text-sky-200 text-sm">Santa Lucía, Estado de México • El aeropuerto más moderno de Latinoamérica</p>
                </div>
                <div class="flex items-center gap-2 text-white">
                  <span class="text-sm">Visitar sitio oficial</span>
                  <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </div>
              </div>
            </a>
          </div>
        </div>

        <!-- Hoteles -->
        <div id="hoteles" class="mb-20">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center">
                <img src="https://grupomundomaya.com/assets/img/icono hoteles.png" alt="" class="w-8 h-8" />
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">Hoteles Grupo Mundo Maya</h3>
                <p class="text-gray-500">6 hoteles temáticos en zonas arqueológicas • 1,136 habitaciones</p>
              </div>
            </div>
            <a href="https://www.hotelesgrupomundomaya.com/" target="_blank" class="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition-colors">
              Reservar ahora
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>

          <!-- Servicios comunes -->
          <div class="bg-amber-50 rounded-2xl p-6 mb-8">
            <p class="text-sm font-medium text-amber-800 mb-3">Servicios disponibles en todos los hoteles:</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700">Alberca</span>
              <span class="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700">Spa</span>
              <span class="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700">Temazcal</span>
              <span class="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700">Restaurante</span>
              <span class="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700">Bar</span>
              <span class="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700">Gimnasio</span>
              <span class="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700">WiFi</span>
              <span class="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700">A/C</span>
              <span class="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700">Terraza</span>
              <span class="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700">Hotel Inclusivo</span>
              <span class="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700">Concierge</span>
              <span class="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700">Estacionamiento</span>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Palenque -->
            <a href="https://grupomundomaya.com/servicios-turisticos/hoteles/palenque.html" target="_blank" class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div class="relative aspect-[4/3] overflow-hidden">
                <img src="https://lirp.cdn-website.com/4d849d80/dms3rep/multi/opt/Palenque-1920w.jpg" alt="Hotel Palenque" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div class="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-amber-700">160 hab.</div>
              </div>
              <div class="p-5">
                <h4 class="text-lg font-bold text-gray-900 mb-1 group-hover:text-amber-600 transition-colors">Hotel Palenque</h4>
                <p class="text-gray-500 text-sm mb-3">A 3.5 km de la Zona Arqueológica • Chiapas</p>
                <p class="text-gray-600 text-sm line-clamp-2">Ciudad maya prominente del siglo III. Clima cálido con cascadas y selva tropical.</p>
                <div class="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span>Tren Maya: 9 km</span>
                  <span>Aeropuerto: 10 km</span>
                </div>
              </div>
            </a>

            <!-- Edzná -->
            <a href="https://grupomundomaya.com/servicios-turisticos/hoteles/edzna.html" target="_blank" class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div class="relative aspect-[4/3] overflow-hidden">
                <img src="https://lirp.cdn-website.com/4d849d80/dms3rep/multi/opt/Edzna--1920w.jpg" alt="Hotel Edzná" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div class="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-amber-700">160 hab.</div>
              </div>
              <div class="p-5">
                <h4 class="text-lg font-bold text-gray-900 mb-1 group-hover:text-amber-600 transition-colors">Hotel Edzná</h4>
                <p class="text-gray-500 text-sm mb-3">A 1 km de la Zona Arqueológica • Campeche</p>
                <p class="text-gray-600 text-sm line-clamp-2">"Casa de los Itzáes". Acceso por Carreteras Federales 180 y 261.</p>
                <div class="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span>Tren Maya: 16.3 km</span>
                  <span>Aeropuerto: 45 km</span>
                </div>
              </div>
            </a>

            <!-- Nuevo Uxmal -->
            <a href="https://grupomundomaya.com/servicios-turisticos/hoteles/nuevo_uxmal.html" target="_blank" class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div class="relative aspect-[4/3] overflow-hidden">
                <img src="https://lirp.cdn-website.com/4d849d80/dms3rep/multi/opt/Nuevo+Uxmal-1920w.jpg" alt="Hotel Nuevo Uxmal" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div class="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-amber-700">160 hab.</div>
              </div>
              <div class="p-5">
                <h4 class="text-lg font-bold text-gray-900 mb-1 group-hover:text-amber-600 transition-colors">Hotel Nuevo Uxmal</h4>
                <p class="text-gray-500 text-sm mb-3">A 8.8 km de la Zona Arqueológica • Yucatán</p>
                <p class="text-gray-600 text-sm line-clamp-2">Arquitectura sostenible con materiales regionales y eficiencia energética.</p>
                <div class="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span>Tren Maya: 28 km</span>
                  <span>Aeropuerto: 75 km</span>
                </div>
              </div>
            </a>

            <!-- Chichén Itzá -->
            <a href="https://grupomundomaya.com/servicios-turisticos/hoteles/chichen-itza.html" target="_blank" class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div class="relative aspect-[4/3] overflow-hidden">
                <img src="https://lirp.cdn-website.com/4d849d80/dms3rep/multi/opt/H2+PORTAL+DE+KUKULKAN-1920w.png" alt="Hotel Chichén Itzá" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div class="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-amber-700">160 hab.</div>
                <div class="absolute top-4 left-4 px-3 py-1 bg-amber-500 rounded-full text-xs font-semibold text-white">UNESCO</div>
              </div>
              <div class="p-5">
                <h4 class="text-lg font-bold text-gray-900 mb-1 group-hover:text-amber-600 transition-colors">Hotel Chichén Itzá</h4>
                <p class="text-gray-500 text-sm mb-3">A 2.4 km de la Zona Arqueológica • Yucatán</p>
                <p class="text-gray-600 text-sm line-clamp-2">Patrimonio de la Humanidad UNESCO. Centro de atención turística con guías certificados.</p>
                <div class="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span>Tren Maya: 2.3 km</span>
                  <span>Aeropuerto: 121 km</span>
                </div>
              </div>
            </a>

            <!-- Tulum -->
            <a href="https://grupomundomaya.com/servicios-turisticos/hoteles/tulum.html" target="_blank" class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div class="relative aspect-[4/3] overflow-hidden">
                <img src="https://lirp.cdn-website.com/4d849d80/dms3rep/multi/opt/Tulum-1920w.jpg" alt="Hotel Tulum" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div class="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-amber-700">352 hab.</div>
                <div class="absolute top-4 left-4 px-3 py-1 bg-purple-500 rounded-full text-xs font-semibold text-white">Pueblo Mágico</div>
              </div>
              <div class="p-5">
                <h4 class="text-lg font-bold text-gray-900 mb-1 group-hover:text-amber-600 transition-colors">Hotel Tulum</h4>
                <p class="text-gray-500 text-sm mb-3">A 2.6 km de la Zona Arqueológica • Quintana Roo</p>
                <p class="text-gray-600 text-sm line-clamp-2">Ubicado en el Parque del Jaguar. 13.5 hectáreas entre relajación y aventura.</p>
                <div class="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span>Tren Maya: 3.8 km</span>
                  <span>Aeropuerto: 23.5 km</span>
                </div>
              </div>
            </a>

            <!-- Calakmul -->
            <a href="https://grupomundomaya.com/servicios-turisticos/hoteles/calakmul.html" target="_blank" class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div class="relative aspect-[4/3] overflow-hidden">
                <img src="https://lirp.cdn-website.com/4d849d80/dms3rep/multi/opt/Calakmul-1920w.jpg" alt="Hotel Calakmul" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div class="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-amber-700">144 hab.</div>
                <div class="absolute top-4 left-4 px-3 py-1 bg-amber-500 rounded-full text-xs font-semibold text-white">UNESCO</div>
              </div>
              <div class="p-5">
                <h4 class="text-lg font-bold text-gray-900 mb-1 group-hover:text-amber-600 transition-colors">Hotel Calakmul</h4>
                <p class="text-gray-500 text-sm mb-3">A 10 km de la Zona Arqueológica • Campeche</p>
                <p class="text-gray-600 text-sm line-clamp-2">Patrimonio Mundial UNESCO. Polígono Bonfil con 2.96 hectáreas de extensión.</p>
                <div class="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span>Tren Maya: 51 km</span>
                  <span>Aeropuerto: 224 km</span>
                </div>
              </div>
            </a>
          </div>

          <!-- Mapa de hoteles -->
          <div class="mt-10 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
            <img src="https://irp.cdn-website.com/4d849d80/dms3rep/multi/Mapa-ubicaci-C3-B3n-de-hoteles-f3f4569f.png" alt="Mapa de ubicación de hoteles" class="w-full md:w-1/2 max-w-md rounded-xl shadow-lg" />
            <div class="flex-1">
              <h4 class="text-xl font-bold text-gray-900 mb-3">Red de Hoteles en la Ruta Maya</h4>
              <p class="text-gray-600 mb-4">Todos nuestros hoteles están conectados con el Tren Maya y ubicados cerca de las zonas arqueológicas más importantes de la Península de Yucatán, Campeche y Chiapas.</p>
              <div class="flex flex-wrap gap-3">
                <a href="https://www.hotelesgrupomundomaya.com/" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition-colors text-sm">
                  Reservar ahora
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
                <a href="https://grupomundomaya.com/servicios-turisticos/hoteles/" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 border border-amber-500 text-amber-600 rounded-lg font-medium hover:bg-amber-50 transition-colors text-sm">
                  Más información
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Parques y Museos -->
        <div id="turismo">
          <div class="flex items-center gap-4 mb-8">
            <div class="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
              <img src="https://grupomundomaya.com/assets/img/icono parques.png" alt="" class="w-8 h-8" />
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900">Parques y Museos</h3>
              <p class="text-gray-500">Espacios culturales y recreativos</p>
            </div>
          </div>

          <!-- Parques Destacados -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <!-- Parque Nuevo Uxmal -->
            <a href="https://grupomundomaya.com/servicios-turisticos/parques/nuevo_uxmal.html" target="_blank" class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div class="h-44 relative overflow-hidden">
                <img src="https://www.gob.mx/cms/uploads/article/main_image/135581/BANNER_nuevo_uxmal.jpg" alt="Parque Nuevo Uxmal" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div class="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/30 to-transparent"></div>
                <span class="absolute top-4 right-4 px-3 py-1 bg-white/90 rounded-full text-xs font-semibold text-emerald-700">332.99 ha</span>
                <div class="absolute bottom-4 left-5">
                  <h4 class="text-xl font-bold text-white">Parque Nuevo Uxmal</h4>
                  <p class="text-emerald-200 text-sm">Santa Elena, Yucatán</p>
                </div>
              </div>
              <div class="p-5">
                <p class="text-gray-600 text-sm mb-4">Portal de entrada a la impresionante Ruta Maya con arquitectura del Clásico Tardío (800-1000 d.C.).</p>
                <div class="space-y-2 text-sm">
                  <div class="flex items-center gap-2 text-gray-500">
                    <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    <span>Lun-Dom 8:00 - 17:00</span>
                  </div>
                  <div class="flex items-center gap-2 text-gray-500">
                    <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
                    <span>Observatorio astronómico</span>
                  </div>
                </div>
                <div class="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs">Camping</span>
                  <span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs">Senderismo</span>
                  <span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs">Ciclismo</span>
                  <span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs">Rituales Mayas</span>
                </div>
              </div>
            </a>

            <!-- Parque La Plancha -->
            <a href="https://grupomundomaya.com/servicios-turisticos/parques/la_plancha.html" target="_blank" class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div class="h-44 relative overflow-hidden">
                <img src="https://www.gob.mx/cms/uploads/article/main_image/135584/BANNER_la_plancha_corto.jpg" alt="Parque La Plancha" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div class="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/30 to-transparent"></div>
                <span class="absolute top-4 right-4 px-3 py-1 bg-white/90 rounded-full text-xs font-semibold text-purple-700">20 ha</span>
                <div class="absolute bottom-4 left-5">
                  <h4 class="text-xl font-bold text-white">Parque La Plancha</h4>
                  <p class="text-purple-200 text-sm">Centro de Mérida, Yucatán</p>
                </div>
              </div>
              <div class="p-5">
                <p class="text-gray-600 text-sm mb-4">Antigua Estación Central del Ferrocarril (1920-1974) transformada en espacio recreativo y cultural.</p>
                <div class="space-y-2 text-sm">
                  <div class="flex items-center gap-2 text-gray-500">
                    <svg class="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    <span>Lun-Dom 7:00 - 23:00</span>
                  </div>
                  <div class="flex items-center gap-2 text-gray-500">
                    <svg class="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                    <span>Calle 47, esq. Av. 1o de Mayo</span>
                  </div>
                </div>
                <div class="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs">Anfiteatro</span>
                  <span class="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs">Skatepark</span>
                  <span class="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs">300+ estacionamientos</span>
                  <span class="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs">Pet Friendly</span>
                </div>
              </div>
            </a>

            <!-- Parque del Jaguar -->
            <a href="https://grupomundomaya.com/servicios-turisticos/parques/jaguar.html" target="_blank" class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div class="h-44 relative overflow-hidden">
                <img src="https://www.gob.mx/cms/uploads/article/main_image/135582/BANNER_P_JAGUAR_2.jpg" alt="Parque del Jaguar" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div class="absolute inset-0 bg-gradient-to-t from-amber-900/90 via-amber-900/30 to-transparent"></div>
                <span class="absolute top-4 right-4 px-3 py-1 bg-white/90 rounded-full text-xs font-semibold text-amber-700">13.5 ha</span>
                <div class="absolute bottom-4 left-5">
                  <h4 class="text-xl font-bold text-white">Parque del Jaguar</h4>
                  <p class="text-amber-200 text-sm">Tulum, Quintana Roo</p>
                </div>
              </div>
              <div class="p-5">
                <p class="text-gray-600 text-sm mb-4">Experiencia entre relajación y aventura a 2.6 km de la Zona Arqueológica de Tulum.</p>
                <div class="space-y-2 text-sm">
                  <div class="flex items-center gap-2 text-gray-500">
                    <svg class="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                    <span>Conectado con Hotel Tulum</span>
                  </div>
                  <div class="flex items-center gap-2 text-gray-500">
                    <svg class="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    <span>Tren Maya: 3.8 km</span>
                  </div>
                </div>
                <div class="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-amber-50 text-amber-700 rounded text-xs">Pueblo Mágico</span>
                  <span class="px-2 py-1 bg-amber-50 text-amber-700 rounded text-xs">Ecoturismo</span>
                  <span class="px-2 py-1 bg-amber-50 text-amber-700 rounded text-xs">Aventura</span>
                </div>
              </div>
            </a>

            <!-- Museo Mamut Santa Lucía -->
            <a href="https://mamutsantalucia.com/" target="_blank" class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div class="h-44 relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                <img src="https://mamutsantalucia.com/assets/images/logotipo.png" alt="Museo Mamut" class="absolute inset-0 w-full h-full object-contain p-8 opacity-30" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>
                <span class="absolute top-4 right-4 px-3 py-1 bg-amber-500 rounded-full text-xs font-semibold text-white">Paleontología</span>
                <div class="absolute bottom-4 left-5">
                  <h4 class="text-xl font-bold text-white">Museo Mamut Quinametzin</h4>
                  <p class="text-slate-300 text-sm">Santa Lucía, Estado de México</p>
                </div>
              </div>
              <div class="p-5">
                <p class="text-gray-600 text-sm mb-4">Museo Paleontológico de Santa Lucía con hallazgos de mamuts y fauna del Pleistoceno.</p>
                <div class="space-y-2 text-sm">
                  <div class="flex items-center gap-2 text-gray-500">
                    <svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                    <span>Junto al AIFA</span>
                  </div>
                  <div class="flex items-center gap-2 text-gray-500">
                    <svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
                    <span>Excavaciones activas</span>
                  </div>
                </div>
                <div class="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">Mamuts</span>
                  <span class="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">Fósiles</span>
                  <span class="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">Pleistoceno</span>
                </div>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>

    <!-- Combustibles -->
    <section id="combustibles" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center">
              <img src="https://grupomundomaya.com/assets/img/iconcombustibles.png" alt="" class="w-8 h-8" />
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900">Combustibles de Aviación</h3>
              <p class="text-gray-500">11 estaciones de suministro • Turbosina y Gasavión</p>
            </div>
          </div>
          <a href="mailto:facturacionhidrocarburos@gafsacomm.com" class="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-colors">
            Contactar para suministro
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </a>
        </div>

        <!-- Info Banner -->
        <div class="bg-emerald-50 rounded-2xl p-6 mb-8">
          <div class="flex flex-col md:flex-row md:items-center gap-4">
            <div class="flex-1">
              <p class="text-sm font-medium text-emerald-800 mb-2">Operador: GAFSACOMM</p>
              <p class="text-emerald-700 text-sm">Grupo Aeroportuario, Ferroviario, de Servicios Auxiliares y Conexos Olmeca-Maya-Mexica, S.A. de C.V.</p>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-white rounded-full text-xs font-medium text-emerald-700">Turbosina</span>
              <span class="px-3 py-1 bg-white rounded-full text-xs font-medium text-emerald-700">Gasavión</span>
              <span class="px-3 py-1 bg-white rounded-full text-xs font-medium text-emerald-700">Servicio Aeroportuario</span>
            </div>
          </div>
        </div>

        <!-- Enlaces Importantes -->
        <div class="flex flex-wrap gap-4 mb-8">
          <a href="https://grupomundomaya.com/BoletinInformativo.html" target="_blank" class="inline-flex items-center gap-2 px-5 py-3 bg-white border-2 border-emerald-500 text-emerald-700 rounded-xl font-medium hover:bg-emerald-50 transition-colors shadow-sm">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            Boletín Informativo
          </a>
          <a href="https://grupomundomaya.com/tarifas.html" target="_blank" class="inline-flex items-center gap-2 px-5 py-3 bg-white border-2 border-emerald-500 text-emerald-700 rounded-xl font-medium hover:bg-emerald-50 transition-colors shadow-sm">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Tarifas de Combustible
          </a>
        </div>

        <!-- Grid de Estaciones -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <!-- Nogales -->
          <a href="https://grupomundomaya.com/combustibles/nogales.html" target="_blank" class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <div class="h-24 bg-gradient-to-br from-emerald-600 to-emerald-800 p-4 relative">
              <span class="absolute top-3 right-3 px-2 py-1 bg-white/20 rounded-full text-xs font-semibold text-white font-mono">NOG</span>
              <div class="absolute bottom-3 left-4">
                <h4 class="text-lg font-bold text-white group-hover:text-emerald-200 transition-colors">Combustibles Nogales</h4>
                <p class="text-emerald-100 text-sm">Sonora</p>
              </div>
            </div>
            <div class="p-4">
              <p class="text-gray-600 text-sm mb-3 line-clamp-2">km 13.5 Carretera Internacional Nogales, C.P. 84000</p>
              <div class="space-y-2 text-xs">
                <div class="flex items-center gap-2 text-gray-500">
                  <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span>Lun-Vie 9:00 - 16:00</span>
                </div>
                <div class="flex items-center gap-2 text-gray-500">
                  <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
                  <span>1 tanque: 60,000 L</span>
                </div>
              </div>
              <div class="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                <span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs">Turbosina</span>
                <svg class="w-4 h-4 text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </div>
            </div>
          </a>

          <!-- Nuevo Laredo -->
          <a href="https://grupomundomaya.com/combustibles/nuevo_laredo.html" target="_blank" class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <div class="h-24 bg-gradient-to-br from-emerald-600 to-emerald-800 p-4 relative">
              <span class="absolute top-3 right-3 px-2 py-1 bg-white/20 rounded-full text-xs font-semibold text-white font-mono">NLD</span>
              <div class="absolute bottom-3 left-4">
                <h4 class="text-lg font-bold text-white group-hover:text-emerald-200 transition-colors">Combustibles Nuevo Laredo</h4>
                <p class="text-emerald-100 text-sm">Tamaulipas</p>
              </div>
            </div>
            <div class="p-4">
              <p class="text-gray-600 text-sm mb-3 line-clamp-2">Carretera Piedras Negras km 5, C.P. 88000</p>
              <div class="space-y-2 text-xs">
                <div class="flex items-center gap-2 text-gray-500">
                  <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span>Lun-Vie 9:00 - 16:00</span>
                </div>
                <div class="flex items-center gap-2 text-gray-500">
                  <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
                  <span>5 tanques: 300,000 L total</span>
                </div>
              </div>
              <div class="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                <span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs">Turbosina</span>
                <svg class="w-4 h-4 text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </div>
            </div>
          </a>

          <!-- Ciudad Victoria -->
          <a href="https://grupomundomaya.com/combustibles/cd_victoria.html" target="_blank" class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <div class="h-24 bg-gradient-to-br from-emerald-600 to-emerald-800 p-4 relative">
              <span class="absolute top-3 right-3 px-2 py-1 bg-white/20 rounded-full text-xs font-semibold text-white font-mono">CVM</span>
              <div class="absolute bottom-3 left-4">
                <h4 class="text-lg font-bold text-white group-hover:text-emerald-200 transition-colors">Combustibles Cd. Victoria</h4>
                <p class="text-emerald-100 text-sm">Tamaulipas</p>
              </div>
            </div>
            <div class="p-4">
              <p class="text-gray-600 text-sm mb-3 line-clamp-2">Carretera a Soto la Marina km. 18.5, Güemez</p>
              <div class="space-y-2 text-xs">
                <div class="flex items-center gap-2 text-gray-500">
                  <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span>Lun-Vie 9:00 - 16:00</span>
                </div>
                <div class="flex items-center gap-2 text-gray-500">
                  <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
                  <span>Turbosina: 280,000 L • Gasavión: 70,000 L</span>
                </div>
              </div>
              <div class="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                <div class="flex gap-1">
                  <span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs">Turbosina</span>
                  <span class="px-2 py-1 bg-sky-50 text-sky-700 rounded text-xs">Gasavión</span>
                </div>
                <svg class="w-4 h-4 text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </div>
            </div>
          </a>

          <!-- Tamuín -->
          <a href="https://grupomundomaya.com/combustibles/tamuin.html" target="_blank" class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <div class="h-24 bg-gradient-to-br from-emerald-600 to-emerald-800 p-4 relative">
              <span class="absolute top-3 right-3 px-2 py-1 bg-white/20 rounded-full text-xs font-semibold text-white font-mono">TSL</span>
              <div class="absolute bottom-3 left-4">
                <h4 class="text-lg font-bold text-white group-hover:text-emerald-200 transition-colors">Combustibles Tamuín</h4>
                <p class="text-emerald-100 text-sm">San Luis Potosí</p>
              </div>
            </div>
            <div class="p-4">
              <p class="text-gray-600 text-sm mb-3 line-clamp-2">Aeropuerto Internacional Tamuín, Carretera estación de Palmas KM 5</p>
              <div class="space-y-2 text-xs">
                <div class="flex items-center gap-2 text-gray-500">
                  <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span>7:00 - 19:00 hrs</span>
                </div>
                <div class="flex items-center gap-2 text-gray-500">
                  <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
                  <span>Aeropuerto Internacional</span>
                </div>
              </div>
              <div class="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                <span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs">Turbosina</span>
                <svg class="w-4 h-4 text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </div>
            </div>
          </a>

          <!-- Uruapan -->
          <a href="https://grupomundomaya.com/combustibles/uruapan.html" target="_blank" class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <div class="h-24 bg-gradient-to-br from-emerald-600 to-emerald-800 p-4 relative">
              <span class="absolute top-3 right-3 px-2 py-1 bg-white/20 rounded-full text-xs font-semibold text-white font-mono">UPN</span>
              <div class="absolute bottom-3 left-4">
                <h4 class="text-lg font-bold text-white group-hover:text-emerald-200 transition-colors">Combustibles Uruapan</h4>
                <p class="text-emerald-100 text-sm">Michoacán</p>
              </div>
            </div>
            <div class="p-4">
              <p class="text-gray-600 text-sm mb-3 line-clamp-2">Av. Latinoamericana S/N, Fracc. San José Obrero, C.P. 60160</p>
              <div class="space-y-2 text-xs">
                <div class="flex items-center gap-2 text-gray-500">
                  <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span>Lun-Vie 9:00 - 16:00</span>
                </div>
                <div class="flex items-center gap-2 text-gray-500">
                  <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
                  <span>3 tanques: 240,000 L total</span>
                </div>
              </div>
              <div class="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                <span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs">Turbosina</span>
                <svg class="w-4 h-4 text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </div>
            </div>
          </a>

          <!-- Puebla -->
          <a href="https://grupomundomaya.com/combustibles/puebla.html" target="_blank" class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <div class="h-24 bg-gradient-to-br from-emerald-600 to-emerald-800 p-4 relative">
              <span class="absolute top-3 right-3 px-2 py-1 bg-white/20 rounded-full text-xs font-semibold text-white font-mono">PBC</span>
              <div class="absolute bottom-3 left-4">
                <h4 class="text-lg font-bold text-white group-hover:text-emerald-200 transition-colors">Combustibles Puebla</h4>
                <p class="text-emerald-100 text-sm">Puebla</p>
              </div>
            </div>
            <div class="p-4">
              <p class="text-gray-600 text-sm mb-3 line-clamp-2">Aeropuerto Internacional "Hermanos Serdán", Carretera Federal México-Puebla km 91.5</p>
              <div class="space-y-2 text-xs">
                <div class="flex items-center gap-2 text-gray-500">
                  <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span>7:00 - 19:00 hrs</span>
                </div>
                <div class="flex items-center gap-2 text-gray-500">
                  <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
                  <span>Aeropuerto Internacional</span>
                </div>
              </div>
              <div class="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                <div class="flex gap-1">
                  <span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs">Turbosina</span>
                  <span class="px-2 py-1 bg-sky-50 text-sky-700 rounded text-xs">Gasavión</span>
                </div>
                <svg class="w-4 h-4 text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </div>
            </div>
          </a>

          <!-- Ixtepec -->
          <a href="https://grupomundomaya.com/combustibles/ixtepec.html" target="_blank" class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <div class="h-24 bg-gradient-to-br from-emerald-600 to-emerald-800 p-4 relative">
              <span class="absolute top-3 right-3 px-2 py-1 bg-white/20 rounded-full text-xs font-semibold text-white font-mono">IZT</span>
              <div class="absolute bottom-3 left-4">
                <h4 class="text-lg font-bold text-white group-hover:text-emerald-200 transition-colors">Combustibles Cd. Ixtepec</h4>
                <p class="text-emerald-100 text-sm">Oaxaca</p>
              </div>
            </div>
            <div class="p-4">
              <p class="text-gray-600 text-sm mb-3 line-clamp-2">Carretera Panamericana Juchitán-Tehuantepec, km 264, Base Aérea Militar No. 2</p>
              <div class="space-y-2 text-xs">
                <div class="flex items-center gap-2 text-gray-500">
                  <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span>Lun-Vie 9:00 - 16:00</span>
                </div>
                <div class="flex items-center gap-2 text-gray-500">
                  <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  <span>Base Aérea Militar</span>
                </div>
              </div>
              <div class="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                <span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs">Turbosina</span>
                <svg class="w-4 h-4 text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </div>
            </div>
          </a>

          <!-- Palenque -->
          <a href="https://grupomundomaya.com/combustibles/palenque.html" target="_blank" class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <div class="h-24 bg-gradient-to-br from-emerald-600 to-emerald-800 p-4 relative">
              <span class="absolute top-3 right-3 px-2 py-1 bg-white/20 rounded-full text-xs font-semibold text-white font-mono">PQM</span>
              <div class="absolute bottom-3 left-4">
                <h4 class="text-lg font-bold text-white group-hover:text-emerald-200 transition-colors">Combustibles Palenque</h4>
                <p class="text-emerald-100 text-sm">Chiapas</p>
              </div>
            </div>
            <div class="p-4">
              <p class="text-gray-600 text-sm mb-3 line-clamp-2">Aeropuerto Internacional de Palenque, Carretera Catazajá rancho nuevo km. 24.5</p>
              <div class="space-y-2 text-xs">
                <div class="flex items-center gap-2 text-gray-500">
                  <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span>7:00 - 19:00 hrs</span>
                </div>
                <div class="flex items-center gap-2 text-gray-500">
                  <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
                  <span>Aeropuerto Internacional</span>
                </div>
              </div>
              <div class="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                <span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs">Turbosina</span>
                <svg class="w-4 h-4 text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </div>
            </div>
          </a>

          <!-- Campeche -->
          <a href="https://grupomundomaya.com/combustibles/campeche.html" target="_blank" class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <div class="h-24 bg-gradient-to-br from-emerald-600 to-emerald-800 p-4 relative">
              <span class="absolute top-3 right-3 px-2 py-1 bg-white/20 rounded-full text-xs font-semibold text-white font-mono">CPE</span>
              <div class="absolute bottom-3 left-4">
                <h4 class="text-lg font-bold text-white group-hover:text-emerald-200 transition-colors">Combustibles Campeche</h4>
                <p class="text-emerald-100 text-sm">Campeche</p>
              </div>
            </div>
            <div class="p-4">
              <p class="text-gray-600 text-sm mb-3 line-clamp-2">Av. López Portillo X Carretera Campeche-China S/N, Colonia Aviación</p>
              <div class="space-y-2 text-xs">
                <div class="flex items-center gap-2 text-gray-500">
                  <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span>Lun-Vie 9:00 - 16:00</span>
                </div>
                <div class="flex items-center gap-2 text-gray-500">
                  <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
                  <span>Turbosina: 160,000 L • Gasavión: 60,000 L</span>
                </div>
              </div>
              <div class="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                <div class="flex gap-1">
                  <span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs">Turbosina</span>
                  <span class="px-2 py-1 bg-sky-50 text-sky-700 rounded text-xs">Gasavión</span>
                </div>
                <svg class="w-4 h-4 text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </div>
            </div>
          </a>

          <!-- Chetumal -->
          <a href="https://grupomundomaya.com/combustibles/chetumal.html" target="_blank" class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <div class="h-24 bg-gradient-to-br from-emerald-600 to-emerald-800 p-4 relative">
              <span class="absolute top-3 right-3 px-2 py-1 bg-white/20 rounded-full text-xs font-semibold text-white font-mono">CTM</span>
              <div class="absolute bottom-3 left-4">
                <h4 class="text-lg font-bold text-white group-hover:text-emerald-200 transition-colors">Combustibles Chetumal</h4>
                <p class="text-emerald-100 text-sm">Quintana Roo</p>
              </div>
            </div>
            <div class="p-4">
              <p class="text-gray-600 text-sm mb-3 line-clamp-2">Aeropuerto Internacional de Chetumal, Prolongación Av. Revolución 660, Col. Industrial</p>
              <div class="space-y-2 text-xs">
                <div class="flex items-center gap-2 text-gray-500">
                  <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span>7:00 - 19:00 hrs</span>
                </div>
                <div class="flex items-center gap-2 text-gray-500">
                  <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
                  <span>Aeropuerto Internacional</span>
                </div>
              </div>
              <div class="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                <span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs">Turbosina</span>
                <svg class="w-4 h-4 text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </div>
            </div>
          </a>

          <!-- Tulum -->
          <a href="https://grupomundomaya.com/combustibles/tulum.html" target="_blank" class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <div class="h-24 bg-gradient-to-br from-emerald-600 to-emerald-800 p-4 relative">
              <span class="absolute top-3 right-3 px-2 py-1 bg-amber-500 rounded-full text-xs font-semibold text-white">Nuevo</span>
              <div class="absolute bottom-3 left-4">
                <h4 class="text-lg font-bold text-white group-hover:text-emerald-200 transition-colors">Combustibles Tulum</h4>
                <p class="text-emerald-100 text-sm">Quintana Roo</p>
              </div>
            </div>
            <div class="p-4">
              <p class="text-gray-600 text-sm mb-3 line-clamp-2">Carretera Federal 307 Km.201, ejido de Chunyaxche, Felipe Carrillo Puerto</p>
              <div class="space-y-2 text-xs">
                <div class="flex items-center gap-2 text-gray-500">
                  <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span>7:00 - 19:00 hrs</span>
                </div>
                <div class="flex items-center gap-2 text-gray-500">
                  <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
                  <span>Aeropuerto Internacional Tulum</span>
                </div>
              </div>
              <div class="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                <span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs">Turbosina</span>
                <svg class="w-4 h-4 text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </div>
            </div>
          </a>

        </div>

        <!-- Mapa de combustibles -->
        <div class="mt-10 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
          <div
            @click="openLightbox('https://grupomundomaya.com/assets/img/MAPA COMB_GMM_SIN NOMB.png', 'Red de Combustibles')"
            class="w-full md:w-1/2 max-w-md cursor-pointer group"
          >
            <img src="https://grupomundomaya.com/assets/img/MAPA COMB_GMM_SIN NOMB.png" alt="Mapa de combustibles" class="w-full rounded-xl shadow-lg group-hover:shadow-2xl transition-all" />
            <p class="text-center text-sm text-emerald-600 mt-2 group-hover:text-emerald-700">Clic para ampliar</p>
          </div>
          <div class="flex-1">
            <h4 class="text-xl font-bold text-gray-900 mb-3">Red Nacional de Combustibles de Aviación</h4>
            <p class="text-gray-600 mb-4">11 estaciones estratégicamente ubicadas para garantizar el suministro de turbosina y gasavión en los principales aeropuertos del país.</p>
            <div class="space-y-2 mb-4">
              <div class="flex items-center gap-2 text-sm text-gray-600">
                <svg class="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span>Operación en aeropuertos internacionales</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-gray-600">
                <svg class="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span>Servicio a aerolíneas comerciales y privadas</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-gray-600">
                <svg class="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span>Facturación electrónica disponible</span>
              </div>
            </div>
            <a href="mailto:facturacionhidrocarburos@gafsacomm.com" class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-colors text-sm">
              Solicitar cotización
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Marcas Asociadas -->
    <section class="py-16 bg-white border-t border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">Empresas del Grupo</h2>
        <div class="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <a href="https://aifa.aero/" target="_blank" class="hover:opacity-80 transition-opacity hover:scale-105 transform duration-300">
            <img src="https://grupomundomaya.com/assets/img/Botones/LOGO VECTOR.png" alt="AIFA" class="h-16 md:h-20 object-contain" />
          </a>
          <a href="https://www.mexicana.com/" target="_blank" class="hover:opacity-80 transition-opacity hover:scale-105 transform duration-300">
            <img src="https://grupomundomaya.com/assets/img/Botones/mexicanaaz.png" alt="Mexicana" class="h-16 md:h-20 object-contain" />
          </a>
          <a href="https://mamutsantalucia.com/" target="_blank" rel="noopener noreferrer" class="hover:opacity-80 transition-opacity hover:scale-105 transform duration-300">
            <img src="https://grupomundomaya.com/assets/img/Botones/mmts.png" alt="Mamut" class="h-20 md:h-24 object-contain" />
          </a>
          <a href="https://aitulum.com/es" target="_blank" rel="noopener noreferrer" class="hover:opacity-80 transition-opacity hover:scale-105 transform duration-300">
            <img src="https://grupomundomaya.com/assets/img/Botones/Copia de Versión vertical en color 4.png" alt="AI Tulum" class="h-16 md:h-20 object-contain" />
          </a>
          <a href="https://www.trenmaya.gob.mx/" target="_blank" rel="noopener noreferrer" class="hover:opacity-80 transition-opacity hover:scale-105 transform duration-300">
            <img src="https://grupomundomaya.com/assets/img/Botones/trnmy.png" alt="Tren Maya" class="h-16 md:h-20 object-contain" />
          </a>
          <a href="#aeropuertos" class="hover:opacity-80 transition-opacity hover:scale-105 transform duration-300">
            <img src="https://grupomundomaya.com/assets/img/Botones/logoaero.png" alt="Aeropuertos" class="h-16 md:h-20 object-contain" />
          </a>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="lightboxOpen"
          class="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          @click="closeLightbox"
        >
          <!-- Botón cerrar -->
          <button
            @click="closeLightbox"
            class="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <!-- Título -->
          <div class="absolute top-6 left-6 text-white">
            <h3 class="text-xl font-bold">{{ currentTitle }}</h3>
            <p class="text-white/60 text-sm">Clic fuera para cerrar</p>
          </div>

          <!-- Imagen grande -->
          <img
            :src="currentImage"
            :alt="currentTitle"
            class="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            @click.stop
          />
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
