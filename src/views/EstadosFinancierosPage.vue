<script setup lang="ts">
import { ref } from 'vue'

const activeYear = ref('2025')

interface Documento {
  titulo: string
  url: string
}

interface Trimestre {
  nombre: string
  documentos: Documento[]
}

interface AnioData {
  anio: string
  trimestres: Trimestre[]
}

const estadosFinancieros: AnioData[] = [
  {
    anio: '2025',
    trimestres: [
      {
        nombre: 'Tercer Trimestre 2025',
        documentos: [
          { titulo: 'Estado Analítico del Activo', url: '#' },
          { titulo: 'Estado Analítico de la Deuda', url: '#' },
          { titulo: 'Indicadores de Postura Fiscal', url: '#' },
          { titulo: 'Estado de Actividades', url: '#' },
          { titulo: 'Estado de Situación Financiera', url: '#' },
          { titulo: 'Estado de Variación en la Hacienda Pública', url: '#' },
          { titulo: 'Estado de Cambios en la Situación Financiera', url: '#' },
          { titulo: 'Estado de Flujos de Efectivo', url: '#' },
          { titulo: 'Informe sobre Pasivos Contingentes', url: '#' },
          { titulo: 'Notas a los Estados Financieros', url: '#' },
          { titulo: 'Estado Analítico del Ejercicio del Presupuesto de Egresos', url: '#' }
        ]
      },
      {
        nombre: 'Segundo Trimestre 2025',
        documentos: [
          { titulo: 'Estado Analítico del Activo', url: '#' },
          { titulo: 'Estado Analítico de la Deuda', url: '#' },
          { titulo: 'Indicadores de Postura Fiscal', url: '#' },
          { titulo: 'Estado de Actividades', url: '#' },
          { titulo: 'Estado de Situación Financiera', url: '#' },
          { titulo: 'Estado de Variación en la Hacienda Pública', url: '#' },
          { titulo: 'Estado de Cambios en la Situación Financiera', url: '#' },
          { titulo: 'Estado de Flujos de Efectivo', url: '#' },
          { titulo: 'Informe sobre Pasivos Contingentes', url: '#' },
          { titulo: 'Notas a los Estados Financieros', url: '#' },
          { titulo: 'Estado Analítico del Ejercicio del Presupuesto de Egresos', url: '#' }
        ]
      },
      {
        nombre: 'Primer Trimestre 2025',
        documentos: [
          { titulo: 'Estado Analítico del Activo', url: '#' },
          { titulo: 'Estado Analítico de la Deuda', url: '#' },
          { titulo: 'Indicadores de Postura Fiscal', url: '#' },
          { titulo: 'Estado de Actividades', url: '#' },
          { titulo: 'Estado de Situación Financiera', url: '#' },
          { titulo: 'Estado de Variación en la Hacienda Pública', url: '#' },
          { titulo: 'Estado de Cambios en la Situación Financiera', url: '#' },
          { titulo: 'Estado de Flujos de Efectivo', url: '#' },
          { titulo: 'Informe sobre Pasivos Contingentes', url: '#' },
          { titulo: 'Notas a los Estados Financieros', url: '#' },
          { titulo: 'Estado Analítico del Ejercicio del Presupuesto de Egresos', url: '#' }
        ]
      }
    ]
  },
  {
    anio: '2024',
    trimestres: [
      {
        nombre: 'Cuarto Trimestre 2024',
        documentos: [
          { titulo: 'Estado de Actividades', url: '#' },
          { titulo: 'Estado de Situación Financiera', url: '#' },
          { titulo: 'Estado de Variación en la Hacienda Pública', url: '#' },
          { titulo: 'Estado de Cambios en la Situación Financiera', url: '#' },
          { titulo: 'Estado de Flujos de Efectivo', url: '#' },
          { titulo: 'Estado Analítico del Activo', url: '#' },
          { titulo: 'Estado Analítico de la Deuda', url: '#' },
          { titulo: 'Informe sobre Pasivos Contingentes', url: '#' },
          { titulo: 'Estado Analítico del Ejercicio del Presupuesto de Egresos', url: '#' }
        ]
      },
      {
        nombre: 'Tercer Trimestre 2024',
        documentos: [
          { titulo: 'Estado de Actividades', url: '#' },
          { titulo: 'Estado de Situación Financiera', url: '#' },
          { titulo: 'Estado de Variación en la Hacienda Pública', url: '#' },
          { titulo: 'Estado de Cambios en la Situación Financiera', url: '#' },
          { titulo: 'Estado de Flujos de Efectivo', url: '#' },
          { titulo: 'Estado Analítico del Activo', url: '#' },
          { titulo: 'Estado Analítico de la Deuda', url: '#' },
          { titulo: 'Informe sobre Pasivos Contingentes', url: '#' },
          { titulo: 'Estado Analítico del Ejercicio del Presupuesto de Egresos', url: '#' }
        ]
      },
      {
        nombre: 'Segundo Trimestre 2024',
        documentos: [
          { titulo: 'Estado de Actividades', url: '#' },
          { titulo: 'Estado de Situación Financiera', url: '#' },
          { titulo: 'Estado de Variación en la Hacienda Pública', url: '#' },
          { titulo: 'Estado de Cambios en la Situación Financiera', url: '#' },
          { titulo: 'Estado de Flujos de Efectivo', url: '#' },
          { titulo: 'Estado Analítico del Activo', url: '#' },
          { titulo: 'Estado Analítico de la Deuda', url: '#' },
          { titulo: 'Informe sobre Pasivos Contingentes', url: '#' },
          { titulo: 'Estado Analítico del Ejercicio del Presupuesto de Egresos', url: '#' }
        ]
      },
      {
        nombre: 'Primer Trimestre 2024',
        documentos: [
          { titulo: 'Estado de Actividades', url: '#' },
          { titulo: 'Estado de Situación Financiera', url: '#' },
          { titulo: 'Estado de Variación en la Hacienda Pública', url: '#' },
          { titulo: 'Estado de Cambios en la Situación Financiera', url: '#' },
          { titulo: 'Estado de Flujos de Efectivo', url: '#' },
          { titulo: 'Estado Analítico del Activo', url: '#' },
          { titulo: 'Estado Analítico de la Deuda', url: '#' },
          { titulo: 'Informe sobre Pasivos Contingentes', url: '#' },
          { titulo: 'Estado Analítico del Ejercicio del Presupuesto de Egresos', url: '#' }
        ]
      }
    ]
  },
  {
    anio: '2023',
    trimestres: [
      {
        nombre: 'Cuarto Trimestre 2023',
        documentos: [
          { titulo: 'Estado de Actividades', url: '#' },
          { titulo: 'Estado de Situación Financiera', url: '#' },
          { titulo: 'Estado de Variación en la Hacienda Pública', url: '#' },
          { titulo: 'Estado de Cambios en la Situación Financiera', url: '#' },
          { titulo: 'Estado de Flujos de Efectivo', url: '#' },
          { titulo: 'Estado Analítico del Activo', url: '#' },
          { titulo: 'Estado Analítico de la Deuda', url: '#' },
          { titulo: 'Estado Analítico del Ejercicio del Presupuesto de Egresos', url: '#' }
        ]
      }
    ]
  }
]

const years = ['2025', '2024', '2023']

const currentYearData = () => estadosFinancieros.find(e => e.anio === activeYear.value)
</script>

<template>
  <div class="pt-20">
    <!-- Hero -->
    <section class="bg-gradient-to-br from-sky-900 to-slate-900 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span class="inline-block px-4 py-2 bg-white/10 text-sky-200 rounded-full text-sm font-medium mb-4">Información Financiera</span>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">Estados Financieros</h1>
        <p class="text-xl text-sky-100 max-w-3xl">Consulta los estados financieros trimestrales y anuales de Grupo Mundo Maya conforme a la normatividad aplicable.</p>
      </div>
    </section>

    <!-- Year Tabs -->
    <section class="bg-white border-b border-gray-200 sticky top-16 lg:top-20 z-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex overflow-x-auto -mb-px">
          <button
            v-for="year in years"
            :key="year"
            @click="activeYear = year"
            :class="[
              'px-8 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors',
              activeYear === year
                ? 'border-sky-600 text-sky-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            ]"
          >
            {{ year }}
          </button>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div v-if="currentYearData()" class="space-y-8">
          <div v-for="trimestre in currentYearData()?.trimestres" :key="trimestre.nombre" class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="bg-gradient-to-r from-sky-600 to-sky-700 px-6 py-4">
              <h2 class="text-xl font-bold text-white flex items-center gap-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                {{ trimestre.nombre }}
              </h2>
            </div>
            <div class="p-6">
              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <a
                  v-for="doc in trimestre.documentos"
                  :key="doc.titulo"
                  :href="doc.url"
                  target="_blank"
                  class="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-sky-50 hover:shadow-md transition-all group"
                >
                  <div class="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2l5 5h-5V4zm-3 9.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5s.5.22.5.5v2zm2 0c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-4c0-.28.22-.5.5-.5s.5.22.5.5v4zm2 0c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3z"/>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 group-hover:text-sky-700 transition-colors truncate">{{ doc.titulo }}</p>
                    <p class="text-xs text-gray-500">PDF</p>
                  </div>
                  <svg class="w-4 h-4 text-gray-400 group-hover:text-sky-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Info -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-sky-50 rounded-2xl p-8">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-2">Información Importante</h3>
              <p class="text-gray-600 text-sm">
                Los estados financieros se publican trimestralmente conforme a la Ley General de Contabilidad Gubernamental
                y los Lineamientos para la generación de información financiera de los entes públicos del Poder Ejecutivo Federal.
              </p>
              <div class="mt-4">
                <router-link to="/transparencia" class="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-medium text-sm">
                  Más información en Transparencia
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
  </div>
</template>
