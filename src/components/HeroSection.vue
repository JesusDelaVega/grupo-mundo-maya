<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

const stats = [
  { value: '11', label: 'Aeropuertos', icon: 'pi pi-send' },
  { value: '15+', label: 'Hoteles', icon: 'pi pi-building' },
  { value: '20+', label: 'Estados', icon: 'pi pi-map' },
  { value: '24/7', label: 'Servicio', icon: 'pi pi-clock' },
]

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Background with gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-sky-900 via-sky-800 to-slate-900">
      <!-- Decorative patterns -->
      <div class="absolute inset-0 maya-pattern opacity-30"></div>

      <!-- Animated circles -->
      <div class="absolute top-20 left-10 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float" style="animation-delay: 1s;"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-400/5 rounded-full blur-3xl"></div>
    </div>

    <!-- Content -->
    <div class="relative container mx-auto px-6 py-32 lg:py-40">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Text Content -->
        <div
          :class="[
            'transition-all duration-1000',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sky-200 text-sm font-medium mb-8">
            <span class="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
            Gobierno de México
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Unimos el
            <span class="text-gradient">cielo</span>
            y la
            <span class="text-gradient">tierra</span>
          </h1>

          <p class="text-xl text-sky-100/80 mb-8 leading-relaxed max-w-xl">
            Administramos y operamos infraestructura estratégica nacional para contribuir al bienestar social y desarrollo económico de México.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-4 mb-12">
            <router-link
              to="/servicios"
              class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-400 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-1 transition-all duration-300"
            >
              <i class="pi pi-compass"></i>
              Explorar Servicios
            </router-link>
            <router-link
              to="/nosotros"
              class="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
            >
              <i class="pi pi-info-circle"></i>
              Conocer Más
            </router-link>
          </div>

          <!-- Trust badges -->
          <div class="flex items-center gap-6 text-sky-200/60 text-sm">
            <div class="flex items-center gap-2">
              <i class="pi pi-verified text-amber-400"></i>
              Entidad Paraestatal
            </div>
            <div class="flex items-center gap-2">
              <i class="pi pi-shield text-amber-400"></i>
              Transparencia
            </div>
          </div>
        </div>

        <!-- Stats Cards -->
        <div
          :class="[
            'transition-all duration-1000 delay-300',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="(stat, index) in stats"
              :key="stat.label"
              :class="[
                'p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/15 hover:scale-105 transition-all duration-300 cursor-default',
                index === 0 ? 'hover:border-sky-400/50' : '',
                index === 1 ? 'hover:border-amber-400/50 mt-8' : '',
                index === 2 ? 'hover:border-emerald-400/50' : '',
                index === 3 ? 'hover:border-purple-400/50 mt-8' : ''
              ]"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              <div
                :class="[
                  'w-12 h-12 rounded-xl flex items-center justify-center mb-4',
                  index === 0 ? 'bg-sky-500/20 text-sky-400' : '',
                  index === 1 ? 'bg-amber-500/20 text-amber-400' : '',
                  index === 2 ? 'bg-emerald-500/20 text-emerald-400' : '',
                  index === 3 ? 'bg-purple-500/20 text-purple-400' : ''
                ]"
              >
                <i :class="[stat.icon, 'text-xl']"></i>
              </div>
              <div class="text-3xl font-bold text-white mb-1">{{ stat.value }}</div>
              <div class="text-sky-200/70 text-sm">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
      <span class="text-xs uppercase tracking-wider">Scroll</span>
      <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
        <div class="w-1.5 h-3 bg-white/50 rounded-full animate-bounce"></div>
      </div>
    </div>
  </section>
</template>
