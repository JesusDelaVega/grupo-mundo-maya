<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('pobalines')

const pobalines = [
  { titulo: 'POBALINES GAFSACOMM', descripcion: 'Políticas, bases y lineamientos', url: '#' },
  { titulo: 'Metodología para la Administración de Riesgos', descripcion: 'Grupo Mundo Maya', url: '#' }
]

const archivo = [
  { titulo: 'Programa Anual de Desarrollo Archivístico PADA 2025', fecha: 'Noviembre 2025', url: '#' }
]

const procedimientosDTH = [
  { titulo: 'Baja de Personal', url: '#' },
  { titulo: 'Control de Plazas y Movimientos de Personal', url: '#' },
  { titulo: 'Nombramiento de Servidores Públicos y Credencialización', url: '#' },
  { titulo: 'Gestión de Laudos', url: '#' }
]

const manuales = [
  { titulo: 'Manual de Organización - Ingeniería de Hidrocarburos', url: '#' },
  { titulo: 'Manual de Organización - Gestión de Combustibles', url: '#' },
  { titulo: 'Manual de Organización - Supervisión', url: '#' },
  { titulo: 'Manual de Organización - Finanzas', url: '#' },
  { titulo: 'Manual de Organización - Recursos Humanos', url: '#' },
  { titulo: 'Manual de Organización - Tecnologías de Información y Comunicaciones', url: '#' },
  { titulo: 'Manual de Organización - Operaciones Comerciales/Aeroportuarias', url: '#' },
  { titulo: 'Manual de Organización - Capacitación', url: '#' },
  { titulo: 'Manual de Organización - Asuntos Jurídicos', url: '#' },
  { titulo: 'Manual de Organización - Administración de Hoteles', url: '#' },
  { titulo: 'Manual de Organización - Parques Culturales', url: '#' },
  { titulo: 'Manual de Organización - Unidad de Transparencia', url: '#' }
]

const tabs = [
  { id: 'pobalines', label: 'POBALINES' },
  { id: 'archivo', label: 'Archivo' },
  { id: 'procedimientos', label: 'Procedimientos DTH' },
  { id: 'manuales', label: 'Manuales de Organización' }
]
</script>

<template>
  <div class="pt-20">
    <!-- Hero -->
    <section class="bg-gradient-to-br from-sky-900 to-slate-900 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span class="inline-block px-4 py-2 bg-white/10 text-sky-200 rounded-full text-sm font-medium mb-4">Documentos Normativos</span>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">Normateca</h1>
        <p class="text-xl text-sky-100 max-w-3xl">Consulta de procedimientos, lineamientos y documentos normativos vigentes de Grupo Mundo Maya.</p>
      </div>
    </section>

    <!-- Tabs Navigation -->
    <section class="bg-white border-b border-gray-200 sticky top-16 lg:top-20 z-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex overflow-x-auto -mb-px">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="[
              'px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors',
              activeTab === tab.id
                ? 'border-sky-600 text-sky-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            ]"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- POBALINES -->
        <div v-if="activeTab === 'pobalines'" class="space-y-6">
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">Políticas, Bases y Lineamientos</h2>
            <p class="text-gray-600">Documentos rectores para las operaciones de GAFSACOMM</p>
          </div>

          <div v-for="doc in pobalines" :key="doc.titulo" class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div class="flex items-start justify-between gap-4">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">{{ doc.titulo }}</h3>
                  <p class="text-gray-500 text-sm mt-1">{{ doc.descripcion }}</p>
                </div>
              </div>
              <a :href="doc.url" target="_blank" class="flex items-center gap-2 px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors text-sm font-medium">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                PDF
              </a>
            </div>
          </div>
        </div>

        <!-- Archivo -->
        <div v-if="activeTab === 'archivo'" class="space-y-6">
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">Archivo</h2>
            <p class="text-gray-600">Programa Anual de Desarrollo Archivístico</p>
          </div>

          <div v-for="doc in archivo" :key="doc.titulo" class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div class="flex items-start justify-between gap-4">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">{{ doc.titulo }}</h3>
                  <p class="text-gray-500 text-sm mt-1">Actualizado: {{ doc.fecha }}</p>
                </div>
              </div>
              <a :href="doc.url" target="_blank" class="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                PDF
              </a>
            </div>
          </div>
        </div>

        <!-- Procedimientos DTH -->
        <div v-if="activeTab === 'procedimientos'" class="space-y-6">
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">Procedimientos DTH</h2>
            <p class="text-gray-600">Dirección de Talento Humano - Actualizado Agosto 2025</p>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div v-for="doc in procedimientosDTH" :key="doc.titulo" class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="font-semibold text-gray-900 mb-3">{{ doc.titulo }}</h3>
                  <a :href="doc.url" target="_blank" class="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 text-sm font-medium">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                    Descargar documento
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Manuales de Organización -->
        <div v-if="activeTab === 'manuales'" class="space-y-6">
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">Manuales de Organización Específicos</h2>
            <p class="text-gray-600">Actualizado Septiembre 2025</p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a v-for="doc in manuales" :key="doc.titulo" :href="doc.url" target="_blank" class="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md hover:border-sky-200 transition-all group">
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 bg-gray-100 text-gray-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-sky-100 group-hover:text-sky-600 transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900 group-hover:text-sky-700 transition-colors text-sm">{{ doc.titulo }}</h3>
                  <span class="text-xs text-gray-400 mt-1 inline-flex items-center gap-1">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3"/>
                    </svg>
                    PDF
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">¿Necesitas más información?</h2>
        <p class="text-gray-600 mb-8">Contacta a la Unidad de Transparencia para consultas sobre documentos normativos.</p>
        <router-link to="/transparencia" class="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 text-white rounded-xl font-semibold hover:bg-sky-700 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          Ir a Transparencia
        </router-link>
      </div>
    </section>
  </div>
</template>
