<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('programas')

const programasInstitucionales = [
  { titulo: 'Programa Institucional 2025-2030', url: '#' },
  { titulo: 'Programa Institucional 2023-2024', url: '#' }
]

const informesAvances = [
  { titulo: 'Informe de Avances de Resultados Q3 2025', fecha: 'Octubre 2025', url: '#' },
  { titulo: 'Informe de Avances de Resultados Q2 2025', fecha: 'Julio 2025', url: '#' },
  { titulo: 'Informe de Avances de Resultados Q1 2025', fecha: 'Abril 2025', url: '#' }
]

const informesGestion = [
  { titulo: 'Informe de Gestión 2024', fecha: 'Febrero 2025', url: '#' },
  { titulo: 'Informe de Gestión 2023', fecha: 'Febrero 2024', url: '#' }
]

const procedimientosAdquisiciones = [
  { numero: 'IA-07-H0C-007H0C999-N-1-2025', titulo: 'Soporte y mantenimiento sistema SAP', url: '#' },
  { numero: 'IA-07-H0C-007H0C999-N-2-2025', titulo: 'Mantenimiento infraestructura aeroportuaria', url: '#' },
  { numero: 'IA-07-H0C-007H0C999-N-3-2025', titulo: 'Sistemas de seguridad y vigilancia', url: '#' },
  { numero: 'IA-07-H0C-007H0C999-N-4-2025', titulo: 'Licenciamiento de software y servicios TI', url: '#' },
  { numero: 'IA-07-H0C-007H0C999-N-5-2025', titulo: 'Mantenimiento de áreas verdes y jardinería', url: '#' },
  { numero: 'IA-07-H0C-007H0C999-N-6-2025', titulo: 'Servicios de alimentos y comedores', url: '#' },
  { numero: 'IA-07-H0C-007H0C999-N-7-2025', titulo: 'Arrendamiento de equipo especializado', url: '#' },
  { numero: 'IA-07-H0C-007H0C999-N-8-2025', titulo: 'Mantenimiento infraestructura hotelera', url: '#' }
]

const programasAnuales = [
  { titulo: 'Programa Anual de Adquisiciones 2025 (PAAAS)', fecha: 'Enero 2025', url: '#' }
]

const tabs = [
  { id: 'programas', label: 'Programas Institucionales' },
  { id: 'informes', label: 'Informes' },
  { id: 'adquisiciones', label: 'Adquisiciones' },
  { id: 'anuales', label: 'Programas Anuales' }
]
</script>

<template>
  <div class="pt-20">
    <!-- Hero -->
    <section class="bg-gradient-to-br from-sky-900 to-slate-900 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span class="inline-block px-4 py-2 bg-white/10 text-sky-200 rounded-full text-sm font-medium mb-4">Gobierno Abierto</span>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">Información Pública</h1>
        <p class="text-xl text-sky-100 max-w-3xl">Acceso a documentos, programas institucionales, informes de gestión y procedimientos de adquisiciones.</p>
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

        <!-- Programas Institucionales -->
        <div v-if="activeTab === 'programas'" class="space-y-6">
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">Programas Institucionales</h2>
            <p class="text-gray-600">Documentos rectores y programas estratégicos de Grupo Mundo Maya</p>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div v-for="doc in programasInstitucionales" :key="doc.titulo" class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="font-semibold text-gray-900 mb-3">{{ doc.titulo }}</h3>
                  <a :href="doc.url" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors text-sm font-medium">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                    Descargar PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Informes -->
        <div v-if="activeTab === 'informes'" class="space-y-8">
          <div>
            <div class="mb-6">
              <h2 class="text-2xl font-bold text-gray-900 mb-2">Informes de Avances de Resultados</h2>
              <p class="text-gray-600">Reportes trimestrales de avance</p>
            </div>

            <div class="space-y-4">
              <div v-for="doc in informesAvances" :key="doc.titulo" class="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow">
                <div class="flex items-center justify-between gap-4">
                  <div class="flex items-center gap-4">
                    <div class="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900">{{ doc.titulo }}</h3>
                      <p class="text-gray-500 text-sm">{{ doc.fecha }}</p>
                    </div>
                  </div>
                  <a :href="doc.url" target="_blank" class="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 text-sm font-medium">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3"/>
                    </svg>
                    Descargar
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="mb-6">
              <h2 class="text-2xl font-bold text-gray-900 mb-2">Informes de Gestión</h2>
              <p class="text-gray-600">Reportes anuales de gestión institucional</p>
            </div>

            <div class="space-y-4">
              <div v-for="doc in informesGestion" :key="doc.titulo" class="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow">
                <div class="flex items-center justify-between gap-4">
                  <div class="flex items-center gap-4">
                    <div class="w-10 h-10 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900">{{ doc.titulo }}</h3>
                      <p class="text-gray-500 text-sm">{{ doc.fecha }}</p>
                    </div>
                  </div>
                  <a :href="doc.url" target="_blank" class="flex items-center gap-2 text-amber-600 hover:text-amber-700 text-sm font-medium">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3"/>
                    </svg>
                    Descargar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Adquisiciones -->
        <div v-if="activeTab === 'adquisiciones'" class="space-y-6">
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">Procedimientos de Adquisiciones</h2>
            <p class="text-gray-600">Invitaciones a Cuando Menos Tres Personas</p>
          </div>

          <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead class="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">No. Procedimiento</th>
                    <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Descripción</th>
                    <th class="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Documento</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                  <tr v-for="proc in procedimientosAdquisiciones" :key="proc.numero" class="hover:bg-gray-50 transition-colors">
                    <td class="px-6 py-4">
                      <span class="text-sm font-mono text-gray-900">{{ proc.numero }}</span>
                    </td>
                    <td class="px-6 py-4">
                      <span class="text-sm text-gray-700">{{ proc.titulo }}</span>
                    </td>
                    <td class="px-6 py-4 text-right">
                      <a :href="proc.url" target="_blank" class="inline-flex items-center gap-1 text-sky-600 hover:text-sky-700 text-sm font-medium">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                        PDF
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="p-4 bg-sky-50 rounded-xl flex items-start gap-3">
            <svg class="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <p class="text-sky-800 text-sm">
              Para más información sobre procedimientos de adquisiciones, consulte la
              <a href="https://compranet.hacienda.gob.mx/" target="_blank" class="text-sky-600 hover:underline font-medium">Plataforma CompraNet</a>.
            </p>
          </div>
        </div>

        <!-- Programas Anuales -->
        <div v-if="activeTab === 'anuales'" class="space-y-6">
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">Programas Anuales</h2>
            <p class="text-gray-600">Programa Anual de Adquisiciones, Arrendamientos y Servicios</p>
          </div>

          <div v-for="doc in programasAnuales" :key="doc.titulo" class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div class="flex items-start justify-between gap-4">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">{{ doc.titulo }}</h3>
                  <p class="text-gray-500 text-sm mt-1">Publicado: {{ doc.fecha }}</p>
                </div>
              </div>
              <a :href="doc.url" target="_blank" class="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                PDF
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">¿Necesitas realizar una solicitud de información?</h2>
        <p class="text-gray-600 mb-8">Accede a la Plataforma Nacional de Transparencia para ejercer tu derecho de acceso a la información pública.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://www.plataformadetransparencia.org.mx/" target="_blank" class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sky-600 text-white rounded-xl font-semibold hover:bg-sky-700 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
            Ir a la PNT
          </a>
          <router-link to="/transparencia" class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
            Unidad de Transparencia
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>
