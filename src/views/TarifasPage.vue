<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('almacenamiento')

const tarifasAlmacenamiento = [
  { estacion: 'AIFA', base: 144.95, hidrante: 11.29, extraordinarias: null },
  { estacion: 'Tulum', base: 183.25, hidrante: 11.29, extraordinarias: null },
  { estacion: 'Puebla', base: 164.79, hidrante: null, extraordinarias: 132.98 },
  { estacion: 'Chetumal', base: 198.32, hidrante: null, extraordinarias: 109.02 },
  { estacion: 'Campeche', base: 174.86, hidrante: null, extraordinarias: 54.48 },
  { estacion: 'Uruapan', base: 173.31, hidrante: null, extraordinarias: 169.83 },
  { estacion: 'Nuevo Laredo', base: 183.74, hidrante: null, extraordinarias: 312.63 },
  { estacion: 'Ciudad Victoria', base: 174.11, hidrante: null, extraordinarias: 245.74 },
  { estacion: 'Nogales', base: 319.33, hidrante: null, extraordinarias: 312.63 },
  { estacion: 'Tamuín', base: 215.71, hidrante: null, extraordinarias: 312.63 }
]

const tarifasExpendioAutotanque = [
  { estacion: 'AIFA', grupoA: 125.43, grupoB: 137.97, grupoC: 156.79, grupoD: 188.15 },
  { estacion: 'Tulum', grupoA: 135.45, grupoB: 148.99, grupoC: 169.31, grupoD: 203.17 },
  { estacion: 'Puebla', grupoA: 340.86, grupoB: 374.95, grupoC: 426.08, grupoD: 511.29 },
  { estacion: 'Chetumal', grupoA: 340.86, grupoB: 374.95, grupoC: 426.08, grupoD: 511.29 },
  { estacion: 'Campeche', grupoA: 340.86, grupoB: 374.95, grupoC: 426.08, grupoD: 511.29 },
  { estacion: 'Uruapan', grupoA: 340.86, grupoB: 374.95, grupoC: 426.08, grupoD: 511.29 },
  { estacion: 'Nuevo Laredo', grupoA: 340.86, grupoB: 374.95, grupoC: 426.08, grupoD: 511.29 },
  { estacion: 'Ciudad Victoria', grupoA: 340.86, grupoB: 374.95, grupoC: 426.08, grupoD: 511.29 },
  { estacion: 'Nogales', grupoA: 340.86, grupoB: 374.95, grupoC: 426.08, grupoD: 511.29 },
  { estacion: 'Tamuín', grupoA: 340.86, grupoB: 374.95, grupoC: 426.08, grupoD: 511.29 }
]

const tarifasExpendioDispensador = [
  { estacion: 'AIFA', grupoA: 94.40, grupoB: 103.84, grupoC: 118.00, grupoD: 141.61 },
  { estacion: 'Tulum', grupoA: 94.63, grupoB: 104.09, grupoC: 118.29, grupoD: 141.95 }
]

const gruposVolumen = [
  { grupo: 'Grupo A', descripcion: 'Mayor a 385 millones de litros' },
  { grupo: 'Grupo B', descripcion: 'Mayor a 140 hasta 380 millones de litros' },
  { grupo: 'Grupo C', descripcion: 'Mayor a 25 hasta 140 millones de litros' },
  { grupo: 'Grupo D', descripcion: '0 a 25 millones de litros' }
]

const formatCurrency = (value: number | null) => {
  if (value === null) return 'N/A'
  return `$${value.toFixed(2)}`
}
</script>

<template>
  <div class="pt-20">
    <!-- Hero -->
    <section class="bg-gradient-to-br from-amber-600 to-amber-700 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span class="inline-block px-4 py-2 bg-white/10 text-amber-100 rounded-full text-sm font-medium mb-4">Combustibles</span>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">Tarifas de Combustible</h1>
        <p class="text-xl text-amber-100 max-w-3xl">Tarifas máximas para servicios de almacenamiento y expendio de combustible de aviación en aeródromos operados por Grupo Mundo Maya.</p>
      </div>
    </section>

    <!-- Tabs -->
    <section class="bg-white border-b border-gray-200 sticky top-16 lg:top-20 z-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex overflow-x-auto -mb-px">
          <button
            @click="activeTab = 'almacenamiento'"
            :class="[
              'px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors',
              activeTab === 'almacenamiento'
                ? 'border-amber-600 text-amber-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            ]"
          >
            Almacenamiento
          </button>
          <button
            @click="activeTab = 'expendio'"
            :class="[
              'px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors',
              activeTab === 'expendio'
                ? 'border-amber-600 text-amber-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            ]"
          >
            Expendio (Autotanque)
          </button>
          <button
            @click="activeTab = 'dispensador'"
            :class="[
              'px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors',
              activeTab === 'dispensador'
                ? 'border-amber-600 text-amber-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            ]"
          >
            Expendio (Dispensador)
          </button>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Almacenamiento -->
        <div v-if="activeTab === 'almacenamiento'">
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">Servicios de Almacenamiento</h2>
            <p class="text-gray-600">Tarifas máximas en pesos por metro cúbico ($/m³)</p>
          </div>

          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead class="bg-amber-600 text-white">
                  <tr>
                    <th class="px-6 py-4 text-left text-sm font-semibold">Estación</th>
                    <th class="px-6 py-4 text-right text-sm font-semibold">Tarifa Base</th>
                    <th class="px-6 py-4 text-right text-sm font-semibold">Hidrante</th>
                    <th class="px-6 py-4 text-right text-sm font-semibold">Horas Extraordinarias</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                  <tr v-for="tarifa in tarifasAlmacenamiento" :key="tarifa.estacion" class="hover:bg-amber-50 transition-colors">
                    <td class="px-6 py-4 font-medium text-gray-900">{{ tarifa.estacion }}</td>
                    <td class="px-6 py-4 text-right text-gray-700">{{ formatCurrency(tarifa.base) }}</td>
                    <td class="px-6 py-4 text-right text-gray-700">{{ formatCurrency(tarifa.hidrante) }}</td>
                    <td class="px-6 py-4 text-right text-gray-700">{{ formatCurrency(tarifa.extraordinarias) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Expendio Autotanque -->
        <div v-if="activeTab === 'expendio'">
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">Servicios de Expendio por Autotanque</h2>
            <p class="text-gray-600">Tarifas máximas en pesos por metro cúbico ($/m³)</p>
          </div>

          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead class="bg-amber-600 text-white">
                  <tr>
                    <th class="px-6 py-4 text-left text-sm font-semibold">Estación</th>
                    <th class="px-6 py-4 text-right text-sm font-semibold">Grupo A</th>
                    <th class="px-6 py-4 text-right text-sm font-semibold">Grupo B</th>
                    <th class="px-6 py-4 text-right text-sm font-semibold">Grupo C</th>
                    <th class="px-6 py-4 text-right text-sm font-semibold">Grupo D</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                  <tr v-for="tarifa in tarifasExpendioAutotanque" :key="tarifa.estacion" class="hover:bg-amber-50 transition-colors">
                    <td class="px-6 py-4 font-medium text-gray-900">{{ tarifa.estacion }}</td>
                    <td class="px-6 py-4 text-right text-gray-700">{{ formatCurrency(tarifa.grupoA) }}</td>
                    <td class="px-6 py-4 text-right text-gray-700">{{ formatCurrency(tarifa.grupoB) }}</td>
                    <td class="px-6 py-4 text-right text-gray-700">{{ formatCurrency(tarifa.grupoC) }}</td>
                    <td class="px-6 py-4 text-right text-gray-700">{{ formatCurrency(tarifa.grupoD) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Expendio Dispensador -->
        <div v-if="activeTab === 'dispensador'">
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">Servicios de Expendio por Dispensador</h2>
            <p class="text-gray-600">Tarifas máximas en pesos por metro cúbico ($/m³)</p>
          </div>

          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead class="bg-amber-600 text-white">
                  <tr>
                    <th class="px-6 py-4 text-left text-sm font-semibold">Estación</th>
                    <th class="px-6 py-4 text-right text-sm font-semibold">Grupo A</th>
                    <th class="px-6 py-4 text-right text-sm font-semibold">Grupo B</th>
                    <th class="px-6 py-4 text-right text-sm font-semibold">Grupo C</th>
                    <th class="px-6 py-4 text-right text-sm font-semibold">Grupo D</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                  <tr v-for="tarifa in tarifasExpendioDispensador" :key="tarifa.estacion" class="hover:bg-amber-50 transition-colors">
                    <td class="px-6 py-4 font-medium text-gray-900">{{ tarifa.estacion }}</td>
                    <td class="px-6 py-4 text-right text-gray-700">{{ formatCurrency(tarifa.grupoA) }}</td>
                    <td class="px-6 py-4 text-right text-gray-700">{{ formatCurrency(tarifa.grupoB) }}</td>
                    <td class="px-6 py-4 text-right text-gray-700">{{ formatCurrency(tarifa.grupoC) }}</td>
                    <td class="px-6 py-4 text-right text-gray-700">{{ formatCurrency(tarifa.grupoD) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Grupos de Volumen -->
        <div class="mt-12">
          <h3 class="text-lg font-bold text-gray-900 mb-4">Clasificación por Grupos de Volumen</h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div v-for="grupo in gruposVolumen" :key="grupo.grupo" class="bg-white rounded-xl p-4 border border-gray-200">
              <div class="font-semibold text-amber-600 mb-1">{{ grupo.grupo }}</div>
              <div class="text-sm text-gray-600">{{ grupo.descripcion }}</div>
            </div>
          </div>
        </div>

        <!-- Notas -->
        <div class="mt-8 p-6 bg-amber-50 rounded-xl">
          <h4 class="font-semibold text-gray-900 mb-2">Notas Importantes</h4>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• Las tarifas no incluyen IVA</li>
            <li>• Vigentes a partir del 1 de enero de 2024</li>
            <li>• Los precios están expresados en pesos mexicanos por metro cúbico</li>
            <li>• N/A indica que el servicio no está disponible en esa estación</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
