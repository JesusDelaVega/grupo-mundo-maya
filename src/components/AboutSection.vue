<script setup lang="ts">
const values = [
  {
    icon: 'pi pi-shield',
    title: 'Transparencia',
    description: 'Rendición de cuentas clara y accesible para todos los ciudadanos.'
  },
  {
    icon: 'pi pi-users',
    title: 'Servicio Público',
    description: 'Compromiso con el bienestar social y desarrollo económico de México.'
  },
  {
    icon: 'pi pi-check-circle',
    title: 'Excelencia',
    description: 'Estándares de calidad internacional en todas nuestras operaciones.'
  },
  {
    icon: 'pi pi-sync',
    title: 'Sustentabilidad',
    description: 'Operaciones responsables con el medio ambiente y las comunidades.'
  }
]

const timeline = [
  {
    date: 'Abril 2022',
    title: 'Fundación',
    description: 'Creación oficial de Grupo Mundo Maya mediante resolución gubernamental.'
  },
  {
    date: '2022-2023',
    title: 'Expansión Aeroportuaria',
    description: 'Integración de terminales aéreas estratégicas a nivel nacional.'
  },
  {
    date: '2023-2024',
    title: 'Consolidación',
    description: 'Fortalecimiento de operaciones turísticas y de combustibles.'
  },
  {
    date: 'Presente',
    title: 'Crecimiento',
    description: 'Continua expansión y mejora de servicios para México.'
  }
]
</script>

<template>
  <section class="section bg-white">
    <div class="container mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left: Content -->
        <div>
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-4">
            <i class="pi pi-info-circle"></i>
            Sobre Nosotros
          </div>
          <h2 class="section-title text-left">
            Impulsando el desarrollo de México
          </h2>
          <p class="text-slate-600 mb-6 leading-relaxed">
            Grupo Mundo Maya es una entidad paraestatal mexicana establecida el 13 de abril de 2022, cuya misión es administrar, controlar, supervisar, operar y explotar bienes nacionales bajo dirección estatal.
          </p>
          <p class="text-slate-600 mb-8 leading-relaxed">
            Contribuimos activamente al bienestar social y desarrollo económico del país a través de la gestión eficiente de infraestructura estratégica en los sectores de turismo, aviación y energía.
          </p>

          <!-- Values Grid -->
          <div class="grid grid-cols-2 gap-4 mb-8">
            <div
              v-for="value in values"
              :key="value.title"
              class="p-4 bg-slate-50 rounded-xl hover:bg-sky-50 transition-colors duration-300 group cursor-default"
            >
              <div class="w-10 h-10 bg-sky-100 text-sky-600 rounded-lg flex items-center justify-center mb-3 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                <i :class="[value.icon]"></i>
              </div>
              <h4 class="font-semibold text-slate-800 mb-1">{{ value.title }}</h4>
              <p class="text-slate-500 text-sm">{{ value.description }}</p>
            </div>
          </div>

          <router-link
            to="/nosotros"
            class="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all duration-300"
          >
            Conocer Nuestra Historia
            <i class="pi pi-arrow-right"></i>
          </router-link>
        </div>

        <!-- Right: Timeline -->
        <div class="relative">
          <!-- Decorative background -->
          <div class="absolute -top-10 -right-10 w-40 h-40 bg-amber-100 rounded-full opacity-50 blur-2xl"></div>
          <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-sky-100 rounded-full opacity-50 blur-2xl"></div>

          <div class="relative bg-gradient-to-br from-sky-900 to-slate-900 rounded-3xl p-8 shadow-elegant">
            <h3 class="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <i class="pi pi-history text-amber-400"></i>
              Nuestra Trayectoria
            </h3>

            <div class="space-y-6">
              <div
                v-for="(item, index) in timeline"
                :key="item.date"
                class="relative pl-8 pb-6 border-l-2 border-sky-700 last:border-transparent last:pb-0"
              >
                <!-- Dot -->
                <div
                  :class="[
                    'absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full border-2',
                    index === timeline.length - 1
                      ? 'bg-amber-400 border-amber-400 animate-pulse'
                      : 'bg-sky-600 border-sky-400'
                  ]"
                ></div>

                <span class="text-amber-400 text-sm font-medium">{{ item.date }}</span>
                <h4 class="text-white font-semibold mt-1">{{ item.title }}</h4>
                <p class="text-sky-200/70 text-sm mt-1">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
