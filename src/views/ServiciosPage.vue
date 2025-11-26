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
          <div class="flex items-center gap-4 mb-8">
            <div class="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center">
              <img src="https://grupomundomaya.com/assets/img/iconavion.png" alt="" class="w-8 h-8" />
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900">Aeropuertos</h3>
              <p class="text-gray-500">12 terminales aéreas a nivel nacional</p>
            </div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div class="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <span class="text-sm font-medium text-gray-700">Nogales</span>
            </div>
            <div class="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <span class="text-sm font-medium text-gray-700">Nuevo Laredo</span>
            </div>
            <div class="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <span class="text-sm font-medium text-gray-700">Cd. Victoria</span>
            </div>
            <div class="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <span class="text-sm font-medium text-gray-700">Tamuín</span>
            </div>
            <div class="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <span class="text-sm font-medium text-gray-700">Uruapan</span>
            </div>
            <div class="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <span class="text-sm font-medium text-gray-700">Puebla</span>
            </div>
            <div class="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <span class="text-sm font-medium text-gray-700">Ixtepec</span>
            </div>
            <div class="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <span class="text-sm font-medium text-gray-700">Palenque</span>
            </div>
            <div class="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <span class="text-sm font-medium text-gray-700">Campeche</span>
            </div>
            <div class="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <span class="text-sm font-medium text-gray-700">Chetumal</span>
            </div>
            <div class="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <span class="text-sm font-medium text-gray-700">Tulum</span>
            </div>
            <div class="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <span class="text-sm font-medium text-gray-700">Del Norte</span>
            </div>
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
                <h3 class="text-2xl font-bold text-gray-900">Hoteles Temáticos</h3>
                <p class="text-gray-500">6 hoteles en zonas arqueológicas</p>
              </div>
            </div>
            <a href="https://www.hotelesgrupomundomaya.com/" target="_blank" class="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition-colors">
              Reservar ahora
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Palenque -->
            <a href="https://www.hotelesgrupomundomaya.com/" target="_blank" class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div class="aspect-[4/3]">
                <img src="https://lirp.cdn-website.com/4d849d80/dms3rep/multi/opt/Palenque-1920w.jpg" alt="Hotel Palenque" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <h4 class="text-xl font-bold text-white mb-1">Palenque</h4>
                <p class="text-white/80 text-sm">Zona Arqueológica de Palenque, Chiapas</p>
              </div>
            </a>
            <!-- Edzná -->
            <a href="https://www.hotelesgrupomundomaya.com/" target="_blank" class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div class="aspect-[4/3]">
                <img src="https://lirp.cdn-website.com/4d849d80/dms3rep/multi/opt/Edzna--1920w.jpg" alt="Hotel Edzná" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <h4 class="text-xl font-bold text-white mb-1">Edzná</h4>
                <p class="text-white/80 text-sm">Zona Arqueológica de Edzná, Campeche</p>
              </div>
            </a>
            <!-- Nuevo Uxmal -->
            <a href="https://www.hotelesgrupomundomaya.com/" target="_blank" class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div class="aspect-[4/3]">
                <img src="https://lirp.cdn-website.com/4d849d80/dms3rep/multi/opt/Nuevo+Uxmal-1920w.jpg" alt="Hotel Nuevo Uxmal" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <h4 class="text-xl font-bold text-white mb-1">Nuevo Uxmal</h4>
                <p class="text-white/80 text-sm">Zona Arqueológica de Uxmal, Yucatán</p>
              </div>
            </a>
            <!-- Chichén Itzá -->
            <a href="https://www.hotelesgrupomundomaya.com/" target="_blank" class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div class="aspect-[4/3]">
                <img src="https://lirp.cdn-website.com/4d849d80/dms3rep/multi/opt/H2+PORTAL+DE+KUKULKAN-1920w.png" alt="Hotel Chichén Itzá" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <h4 class="text-xl font-bold text-white mb-1">Chichén Itzá</h4>
                <p class="text-white/80 text-sm">Zona Arqueológica de Chichén Itzá, Yucatán</p>
              </div>
            </a>
            <!-- Tulum -->
            <a href="https://www.hotelesgrupomundomaya.com/" target="_blank" class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div class="aspect-[4/3]">
                <img src="https://lirp.cdn-website.com/4d849d80/dms3rep/multi/opt/Tulum-1920w.jpg" alt="Hotel Tulum" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <h4 class="text-xl font-bold text-white mb-1">Tulum</h4>
                <p class="text-white/80 text-sm">Zona Arqueológica de Tulum, Quintana Roo</p>
              </div>
            </a>
            <!-- Calakmul -->
            <a href="https://www.hotelesgrupomundomaya.com/" target="_blank" class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div class="aspect-[4/3]">
                <img src="https://lirp.cdn-website.com/4d849d80/dms3rep/multi/opt/Calakmul-1920w.jpg" alt="Hotel Calakmul" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <h4 class="text-xl font-bold text-white mb-1">Calakmul</h4>
                <p class="text-white/80 text-sm">Zona Arqueológica de Calakmul, Campeche</p>
              </div>
            </a>
          </div>
          <!-- Mapa de hoteles -->
          <div class="mt-10 bg-gray-100 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
            <img src="https://irp.cdn-website.com/4d849d80/dms3rep/multi/Mapa-ubicaci-C3-B3n-de-hoteles-f3f4569f.png" alt="Mapa de ubicación de hoteles" class="w-full md:w-1/2 max-w-md rounded-xl" />
            <div class="flex-1">
              <h4 class="text-xl font-bold text-gray-900 mb-3">Ubicaciones Estratégicas</h4>
              <p class="text-gray-600 mb-4">Nuestros 6 hoteles temáticos están ubicados en las zonas arqueológicas más importantes de la Península de Yucatán y Chiapas, ofreciendo una experiencia única de conexión con la cultura maya.</p>
              <a href="https://www.hotelesgrupomundomaya.com/" target="_blank" class="inline-flex items-center gap-2 text-amber-600 font-medium hover:text-amber-700 transition-colors">
                Ver todos los hoteles
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Parques y Museos -->
        <div>
          <div class="flex items-center gap-4 mb-8">
            <div class="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
              <img src="https://grupomundomaya.com/assets/img/icono parques.png" alt="" class="w-8 h-8" />
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900">Parques y Museos</h3>
              <p class="text-gray-500">Espacios culturales y recreativos</p>
            </div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <span class="text-sm font-medium text-gray-700">Museo del Mamut</span>
            </div>
            <div class="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <span class="text-sm font-medium text-gray-700">Museo Quinametzin</span>
            </div>
            <div class="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <span class="text-sm font-medium text-gray-700">Museo Ferrocarriles</span>
            </div>
            <div class="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <span class="text-sm font-medium text-gray-700">Parques Temáticos</span>
            </div>
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
          <a href="#" class="hover:opacity-80 transition-opacity hover:scale-105 transform duration-300">
            <img src="https://grupomundomaya.com/assets/img/Botones/mmts.png" alt="Mamut" class="h-20 md:h-24 object-contain" />
          </a>
          <a href="#" class="hover:opacity-80 transition-opacity hover:scale-105 transform duration-300">
            <img src="https://grupomundomaya.com/assets/img/Botones/Copia de Versión vertical en color 4.png" alt="AI Tulum" class="h-16 md:h-20 object-contain" />
          </a>
          <a href="https://www.trenmaya.gob.mx/" target="_blank" class="hover:opacity-80 transition-opacity hover:scale-105 transform duration-300">
            <img src="https://grupomundomaya.com/assets/img/Botones/trnmy.png" alt="Tren Maya" class="h-16 md:h-20 object-contain" />
          </a>
          <a href="#" class="hover:opacity-80 transition-opacity hover:scale-105 transform duration-300">
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
