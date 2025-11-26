<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const logoRef = ref<HTMLElement | null>(null)
const sloganRef = ref<HTMLElement | null>(null)
const textRef = ref<HTMLElement | null>(null)
const buttonsRef = ref<HTMLElement | null>(null)

onMounted(() => {
  // Timeline de animación del hero
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  tl.from(logoRef.value, {
    opacity: 0,
    y: -30,
    duration: 0.8
  })
  .from(sloganRef.value, {
    opacity: 0,
    y: 30,
    scale: 0.9,
    duration: 1
  }, '-=0.4')
  .from(textRef.value, {
    opacity: 0,
    y: 20,
    duration: 0.8
  }, '-=0.5')
  .from(buttonsRef.value, {
    opacity: 0,
    y: 20,
    duration: 0.6
  }, '-=0.4')
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section ref="heroRef" class="relative min-h-screen flex items-center bg-gradient-to-br from-sky-900 via-sky-800 to-slate-900 overflow-hidden">
      <div class="absolute inset-0 bg-black/30"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div class="max-w-5xl mx-auto text-center">
          <!-- Logo SEDENA 2024 -->
          <div ref="logoRef" class="flex items-center justify-center mb-6">
            <img src="https://grupomundomaya.com/assets/img/2024sedenagafsacomm.png" alt="2024 SEDENA GAFSACOMM" class="h-52" style="filter: brightness(0) invert(1);" />
          </div>
          <!-- Slogan - pequeño, 1/4 del tamaño -->
          <div ref="sloganRef" class="mb-8 flex justify-center">
            <img src="https://grupomundomaya.com/assets/img/Botones/Unimos el cielo y la tierra eslogan.png" alt="Unimos el cielo y la tierra" class="h-12 md:h-14 lg:h-16" />
          </div>
          <p ref="textRef" class="text-xl text-sky-100 mb-8 leading-relaxed">
            Administramos y operamos infraestructura estratégica nacional: aeropuertos, hoteles y servicios de combustible para el desarrollo de México.
          </p>
          <div ref="buttonsRef" class="flex flex-wrap gap-4 justify-center">
            <router-link to="/servicios" class="group px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold transition-all hover:-translate-y-1 hover:shadow-xl shadow-amber-500/30 flex items-center gap-2">
              Explorar Servicios
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </router-link>
            <router-link to="/nosotros" class="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-xl font-semibold transition-all backdrop-blur hover:border-white/50">
              Conocer Más
            </router-link>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
      </div>
    </section>

    <!-- Marcas/Subsidiarias -->
    <section class="py-12 bg-white border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap items-center justify-center gap-10 md:gap-14">
          <a href="https://aifa.aero/" target="_blank" class="hover:opacity-80 transition-opacity hover:scale-105 transform duration-300">
            <img src="https://grupomundomaya.com/assets/img/Botones/LOGO VECTOR.png" alt="AIFA" class="h-14 object-contain" />
          </a>
          <a href="https://www.mexicana.com/" target="_blank" class="hover:opacity-80 transition-opacity hover:scale-105 transform duration-300">
            <img src="https://grupomundomaya.com/assets/img/Botones/mexicanaaz.png" alt="Mexicana" class="h-14 object-contain" />
          </a>
          <a href="https://mamutsantalucia.com/" target="_blank" class="hover:opacity-80 transition-opacity hover:scale-105 transform duration-300">
            <img src="https://mamutsantalucia.com/assets/images/logotipo.png" alt="Mamut" class="h-14 object-contain" style="filter: invert(1);" />
          </a>
          <a href="#" class="hover:opacity-80 transition-opacity hover:scale-105 transform duration-300">
            <img src="https://grupomundomaya.com/assets/img/Botones/Copia de Versión vertical en color 4.png" alt="AI Tulum" class="h-14 object-contain" />
          </a>
          <a href="https://www.trenmaya.gob.mx/" target="_blank" class="hover:opacity-80 transition-opacity hover:scale-105 transform duration-300">
            <img src="https://grupomundomaya.com/assets/img/Botones/trnmy.png" alt="Tren Maya" class="h-14 object-contain" />
          </a>
          <a href="#" class="hover:opacity-80 transition-opacity hover:scale-105 transform duration-300">
            <img src="https://grupomundomaya.com/assets/img/Botones/logoaero.png" alt="Aeropuertos" class="h-14 object-contain" />
          </a>
        </div>
      </div>
    </section>

    <!-- Misión, Visión, Objetivo -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-4">Nosotros</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Nuestro Propósito</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Misión -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
            <div class="w-24 h-24 mx-auto mb-6">
              <img src="https://grupomundomaya.com/assets/img/img_mision.png" alt="Misión" class="w-full h-full object-contain" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Misión</h3>
            <p class="text-sm text-sky-600 font-medium mb-4">Administrar, controlar, supervisar, operar y explotar bienes nacionales</p>
            <p class="text-gray-600 text-sm leading-relaxed">
              Administrar, controlar, supervisar, operar y explotar bienes nacionales y sociedades de actividades económicas diversas, coadyuvando a su crecimiento, desarrollo, rentabilidad, sostenibilidad y excelencia bajo la rectoría del Estado.
            </p>
            <div class="mt-4 pt-4 border-t border-gray-100">
              <span class="text-xs text-gray-400 font-medium">Compromiso institucional</span>
            </div>
          </div>

          <!-- Visión -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
            <div class="w-24 h-24 mx-auto mb-6">
              <img src="https://grupomundomaya.com/assets/img/img_vision.png" alt="Visión" class="w-full h-full object-contain" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Visión</h3>
            <p class="text-sm text-amber-600 font-medium mb-4">Ser reconocidos como la Entidad Paraestatal más importante</p>
            <p class="text-gray-600 text-sm leading-relaxed">
              Ser reconocidos como la Entidad Paraestatal más importante de México, referente de excelencia en las diversas actividades económicas en las que participa el Grupo Mundo Maya.
            </p>
            <div class="mt-4 pt-4 border-t border-gray-100">
              <span class="text-xs text-gray-400 font-medium">Liderazgo nacional</span>
            </div>
          </div>

          <!-- Objetivo -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
            <div class="w-24 h-24 mx-auto mb-6">
              <img src="https://grupomundomaya.com/assets/img/img_objetivo.png" alt="Objetivo" class="w-full h-full object-contain" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Objetivo</h3>
            <p class="text-sm text-emerald-600 font-medium mb-4">Contribuir al Desarrollo Nacional</p>
            <p class="text-gray-600 text-sm leading-relaxed">
              Contribuir al Desarrollo Nacional mediante estrategias orientadas a la mejora continua de las actividades económicas desempeñadas por el Grupo.
            </p>
            <div class="mt-4 pt-4 border-t border-gray-100">
              <span class="text-xs text-gray-400 font-medium">Crecimiento sostenible</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Servicios Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">Nuestros Servicios</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Infraestructura para México</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">Operamos tres pilares fundamentales que conectan y fortalecen la economía nacional.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Turismo -->
          <div class="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
            <div class="h-56 relative overflow-hidden bg-gradient-to-br from-amber-500 to-amber-600">
              <div class="absolute inset-0 flex items-center justify-center">
                <img src="https://grupomundomaya.com/assets/img/icono hoteles.png" alt="Hoteles" class="w-24 h-24 opacity-90" />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div class="absolute bottom-4 left-4 right-4">
                <span class="text-white font-bold text-xl">6 Hoteles</span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Servicios Turísticos</h3>
              <p class="text-gray-600 mb-4">Hoteles temáticos en zonas arqueológicas: Palenque, Edzná, Nuevo Uxmal, Chichén Itzá, Tulum y Calakmul.</p>
              <ul class="space-y-2 text-sm text-gray-500 mb-6">
                <li class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-amber-500 rotate-45"></div>
                  4 Parques y Museos
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-amber-500 rotate-45"></div>
                  Experiencias culturales
                </li>
              </ul>
              <router-link to="/servicios" class="inline-flex items-center px-4 py-2 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600 transition-colors">
                Ver más
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </router-link>
            </div>
          </div>

          <!-- Aeropuertos -->
          <div class="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
            <div class="h-56 relative overflow-hidden bg-gradient-to-br from-sky-500 to-sky-600">
              <div class="absolute inset-0 flex items-center justify-center">
                <img src="https://grupomundomaya.com/assets/img/iconavion.png" alt="Avión" class="w-24 h-24 opacity-90" />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div class="absolute bottom-4 left-4 right-4">
                <span class="text-white font-bold text-xl">12 Aeropuertos</span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Aeropuertos</h3>
              <p class="text-gray-600 mb-4">Terminales aéreas incluyendo AIFA, Tulum, Chetumal, Palenque, Campeche y más.</p>
              <ul class="space-y-2 text-sm text-gray-500 mb-6">
                <li class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-sky-500 rotate-45"></div>
                  AIFA Felipe Ángeles
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-sky-500 rotate-45"></div>
                  Mexicana de Aviación
                </li>
              </ul>
              <router-link to="/servicios" class="inline-flex items-center px-4 py-2 bg-sky-600 text-white rounded-lg font-semibold hover:bg-sky-700 transition-colors">
                Ver más
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </router-link>
            </div>
          </div>

          <!-- Combustibles -->
          <div class="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
            <div class="h-56 relative overflow-hidden bg-gradient-to-br from-emerald-500 to-emerald-600">
              <div class="absolute inset-0 flex items-center justify-center">
                <img src="https://grupomundomaya.com/assets/img/iconcombustibles.png" alt="Combustibles" class="w-24 h-24 opacity-90" />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div class="absolute bottom-4 left-4 right-4">
                <span class="text-white font-bold text-xl">11 Puntos</span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Combustibles</h3>
              <p class="text-gray-600 mb-4">Distribución estratégica de combustible de aviación a nivel nacional.</p>
              <ul class="space-y-2 text-sm text-gray-500 mb-6">
                <li class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-emerald-500 rotate-45"></div>
                  Logística eficiente
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-emerald-500 rotate-45"></div>
                  Cobertura nacional
                </li>
              </ul>
              <router-link to="/servicios" class="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                Ver más
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mapa de Ubicaciones -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">Cobertura Nacional</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Presencia en Todo México</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">Infraestructura estratégica distribuida en los puntos más importantes del país.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Aeropuertos Map Card -->
          <router-link to="/servicios#aeropuertos" class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer block">
            <div class="h-56 bg-sky-50 flex items-center justify-center p-4">
              <img src="https://grupomundomaya.com/assets/img/MAPA AROPUERTOS JIG_NOMBRES_130625.png" alt="Mapa de Aeropuertos" class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="p-6">
              <h3 class="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                <img src="https://grupomundomaya.com/assets/img/iconavion.png" alt="Avión" class="w-6 h-6" />
                12 Aeropuertos
              </h3>
              <p class="text-gray-600 text-sm">Nogales, Nuevo Laredo, Cd. Victoria, Tamuín, Uruapan, Puebla, Ixtepec, Palenque, Campeche, Chetumal, Tulum, Del Norte</p>
              <span class="inline-flex items-center text-sky-600 font-medium text-sm mt-3 group-hover:text-sky-700">
                Ver más
                <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </span>
            </div>
          </router-link>

          <!-- Hoteles Map Card -->
          <router-link to="/servicios#turismo" class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer block">
            <div class="h-56 bg-amber-50 flex items-center justify-center p-4">
              <img src="https://grupomundomaya.com/assets/img/MAPA HOTELES_Y PARQUES_110625 sin iconos.png" alt="Mapa de Hoteles y Parques" class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="p-6">
              <h3 class="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                <img src="https://grupomundomaya.com/assets/img/icono hoteles.png" alt="Hoteles" class="w-6 h-6" />
                6 Hoteles + 4 Parques
              </h3>
              <p class="text-gray-600 text-sm">Palenque, Edzná, Nuevo Uxmal, Chichén Itzá, Tulum, Calakmul y parques temáticos</p>
              <span class="inline-flex items-center text-amber-600 font-medium text-sm mt-3 group-hover:text-amber-700">
                Ver más
                <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </span>
            </div>
          </router-link>

          <!-- Combustibles Map Card -->
          <router-link to="/servicios#combustibles" class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer block">
            <div class="h-56 bg-emerald-50 flex items-center justify-center p-4">
              <img src="https://grupomundomaya.com/assets/img/MAPA COMB_GMM_SIN NOMB.png" alt="Mapa de Combustibles" class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="p-6">
              <h3 class="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                <img src="https://grupomundomaya.com/assets/img/iconcombustibles.png" alt="Combustibles" class="w-6 h-6" />
                11 Puntos de Combustible
              </h3>
              <p class="text-gray-600 text-sm">Distribución estratégica de combustible de aviación en ubicaciones clave</p>
              <span class="inline-flex items-center text-emerald-600 font-medium text-sm mt-3 group-hover:text-emerald-700">
                Ver más
                <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </span>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Timeline - Estilo Maya Animado -->
    <section class="py-24 bg-gradient-to-br from-slate-50 to-amber-50/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4 border border-amber-200">Nuestra Historia</span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Impulsando el desarrollo de México</h2>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              Grupo Mundo Maya es una entidad paraestatal mexicana establecida el 13 de abril de 2022, cuya misión es administrar infraestructura estratégica nacional bajo dirección estatal.
            </p>
            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              Contribuimos activamente al bienestar social y desarrollo económico del país a través de la gestión eficiente de aeropuertos, hoteles y servicios de combustible.
            </p>
            <router-link to="/nosotros" class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5">
              Conocer Nuestra Historia
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </router-link>
          </div>

          <div class="relative">
            <!-- Card con estilo Maya -->
            <div class="bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900 rounded-3xl p-8 text-white border border-amber-500/20 shadow-2xl">
              <!-- Decoración superior -->
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 rounded-t-3xl"></div>

              <h3 class="text-xl font-bold mb-8 flex items-center">
                <div class="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center mr-3">
                  <svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                Línea del Tiempo
              </h3>

              <!-- Timeline con línea vertical -->
              <div class="relative">
                <!-- Línea vertical -->
                <div class="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-amber-400 via-sky-400 to-amber-400"></div>

                <div class="space-y-8">
                  <!-- Evento 1 -->
                  <div class="group flex items-start relative pl-8">
                    <div class="absolute left-0 w-4 h-4 bg-amber-400 rounded-full border-4 border-slate-900 group-hover:scale-125 transition-transform"></div>
                    <div class="bg-white/5 rounded-xl p-4 flex-1 group-hover:bg-white/10 transition-colors border border-transparent group-hover:border-amber-400/30">
                      <div class="text-amber-400 text-sm font-bold">10 Febrero 2022</div>
                      <div class="font-semibold text-lg">Anuncio de Creación</div>
                      <div class="text-sky-200 text-sm">El Presidente anuncia la creación de la entidad</div>
                    </div>
                  </div>

                  <!-- Evento 2 -->
                  <div class="group flex items-start relative pl-8">
                    <div class="absolute left-0 w-4 h-4 bg-sky-400 rounded-full border-4 border-slate-900 group-hover:scale-125 transition-transform"></div>
                    <div class="bg-white/5 rounded-xl p-4 flex-1 group-hover:bg-white/10 transition-colors border border-transparent group-hover:border-sky-400/30">
                      <div class="text-sky-400 text-sm font-bold">13 Abril 2022</div>
                      <div class="font-semibold text-lg">Constitución Oficial</div>
                      <div class="text-sky-200 text-sm">Publicación en el Diario Oficial de la Federación</div>
                    </div>
                  </div>

                  <!-- Evento 3 -->
                  <div class="group flex items-start relative pl-8">
                    <div class="absolute left-0 w-4 h-4 bg-emerald-400 rounded-full border-4 border-slate-900 group-hover:scale-125 transition-transform"></div>
                    <div class="bg-white/5 rounded-xl p-4 flex-1 group-hover:bg-white/10 transition-colors border border-transparent group-hover:border-emerald-400/30">
                      <div class="text-emerald-400 text-sm font-bold">2022-2024</div>
                      <div class="font-semibold text-lg">Expansión y Consolidación</div>
                      <div class="text-sky-200 text-sm">Integración de aeropuertos y servicios turísticos</div>
                    </div>
                  </div>

                  <!-- Evento 4 - Actual -->
                  <div class="group flex items-start relative pl-8">
                    <div class="absolute left-0 w-4 h-4 bg-amber-400 rounded-full border-4 border-slate-900 animate-pulse"></div>
                    <div class="bg-amber-500/10 rounded-xl p-4 flex-1 border border-amber-400/30">
                      <div class="text-amber-400 text-sm font-bold flex items-center gap-2">
                        2025
                        <span class="px-2 py-0.5 bg-amber-400 text-slate-900 text-xs rounded-full font-bold">ACTUAL</span>
                      </div>
                      <div class="font-semibold text-lg">Crecimiento Continuo</div>
                      <div class="text-sky-200 text-sm">12 aeropuertos, 6 hoteles, 11 puntos de combustible</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-sky-900 to-slate-900 relative overflow-hidden">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>

      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">¿Tienes alguna pregunta?</h2>
        <p class="text-xl text-sky-200 mb-8">Estamos aquí para ayudarte con información sobre nuestros servicios y operaciones.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contacto" class="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold transition-all hover:-translate-y-1 hover:shadow-xl">
            Enviar Mensaje
          </router-link>
          <a href="tel:+555966890113" class="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-xl font-semibold transition-all backdrop-blur flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            +55 5966 890113
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
