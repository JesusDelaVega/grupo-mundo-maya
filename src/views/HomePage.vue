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
            <img src="https://grupomundomaya.com/assets/img/2024sedenagafsacomm.png" alt="2024 SEDENA GAFSACOMM" class="h-28 sm:h-36 md:h-44 lg:h-52 w-auto" style="filter: brightness(0) invert(1);" />
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
            <img src="https://grupomundomaya.com/assets/img/Botones/LOGO VECTOR.png" alt="AIFA" class="h-[72px] object-contain" />
          </a>
          <a href="https://www.mexicana.com/" target="_blank" class="hover:opacity-80 transition-opacity hover:scale-105 transform duration-300">
            <img src="https://grupomundomaya.com/assets/img/Botones/mexicanaaz.png" alt="Mexicana" class="h-14 object-contain" />
          </a>
          <a href="https://mamutsantalucia.com/" target="_blank" class="hover:opacity-80 transition-opacity hover:scale-105 transform duration-300">
            <img src="https://mamutsantalucia.com/assets/images/logotipo.png" alt="Mamut" class="h-14 object-contain" style="filter: invert(1);" />
          </a>
          <a href="https://aitulum.com/es" target="_blank" rel="noopener noreferrer" class="hover:opacity-80 transition-opacity hover:scale-105 transform duration-300">
            <img src="https://grupomundomaya.com/assets/img/Botones/Copia de Versión vertical en color 4.png" alt="AI Tulum" class="h-14 object-contain" />
          </a>
          <a href="https://www.trenmaya.gob.mx/" target="_blank" class="hover:opacity-80 transition-opacity hover:scale-105 transform duration-300">
            <img src="https://grupomundomaya.com/assets/img/Botones/trnmy.png" alt="Tren Maya" class="h-[72px] object-contain" />
          </a>
          <router-link to="/servicios#aeropuertos" class="hover:opacity-80 transition-opacity hover:scale-105 transform duration-300">
            <img src="https://grupomundomaya.com/assets/img/Botones/logoaero.png" alt="Aeropuertos" class="h-[72px] object-contain" />
          </router-link>
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
