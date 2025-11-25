<script setup lang="ts">
interface Aeropuerto {
  nombre: string
  nombreOficial: string
  ciudad: string
  estado: string
  iata: string
  oaci: string
  tipo: string
  distancia: string
  superficie: string
  pista: string
  rodajes: number
  posicionesComerciales: number
  posicionesGenerales: number
  helipuertos: number
  aeronaveDiseno: string
  certificaciones: string[]
  aerolineas: string[]
  descripcion: string
}

defineProps<{
  aeropuerto: Aeropuerto
}>()
</script>

<template>
  <div class="pt-20">
    <!-- Hero -->
    <section class="bg-gradient-to-br from-sky-900 to-slate-900 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-3 mb-4">
          <span class="inline-block px-4 py-2 bg-white/10 text-sky-200 rounded-full text-sm font-medium">{{ aeropuerto.tipo }}</span>
          <span class="inline-block px-3 py-1 bg-amber-500 text-white rounded-full text-sm font-bold">{{ aeropuerto.iata }}</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">{{ aeropuerto.nombre }}</h1>
        <p class="text-xl text-sky-100">{{ aeropuerto.nombreOficial }}</p>
        <p class="text-sky-200 mt-2">{{ aeropuerto.ciudad }}, {{ aeropuerto.estado }}</p>
      </div>
    </section>

    <!-- Quick Info -->
    <section class="py-8 bg-white border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="text-3xl font-bold text-sky-600">{{ aeropuerto.iata }}</div>
            <div class="text-sm text-gray-500">Código IATA</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-sky-600">{{ aeropuerto.oaci }}</div>
            <div class="text-sm text-gray-500">Código OACI</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-sky-600">{{ aeropuerto.pista.split(' x ')[0] }}</div>
            <div class="text-sm text-gray-500">Metros de pista</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-sky-600">{{ aeropuerto.posicionesComerciales }}</div>
            <div class="text-sm text-gray-500">Posiciones comerciales</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Descripción -->
          <div class="lg:col-span-2 space-y-8">
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Acerca del Aeropuerto</h2>
              <p class="text-gray-600 leading-relaxed">{{ aeropuerto.descripcion }}</p>
              <p class="text-gray-600 mt-4">
                Ubicado a {{ aeropuerto.distancia }} de {{ aeropuerto.ciudad }}, este aeropuerto es operado por Grupo Mundo Maya,
                empresa de participación estatal constituida el 10 de febrero de 2022.
              </p>
            </div>

            <!-- Especificaciones Técnicas -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Especificaciones Técnicas</h2>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-sky-100 text-sky-600 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z"/>
                      </svg>
                    </div>
                    <div>
                      <div class="text-sm text-gray-500">Superficie</div>
                      <div class="font-semibold text-gray-900">{{ aeropuerto.superficie }}</div>
                    </div>
                  </div>

                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-sky-100 text-sky-600 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                      </svg>
                    </div>
                    <div>
                      <div class="text-sm text-gray-500">Pista</div>
                      <div class="font-semibold text-gray-900">{{ aeropuerto.pista }}</div>
                    </div>
                  </div>

                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-sky-100 text-sky-600 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                      </svg>
                    </div>
                    <div>
                      <div class="text-sm text-gray-500">Rodajes</div>
                      <div class="font-semibold text-gray-900">{{ aeropuerto.rodajes }}</div>
                    </div>
                  </div>
                </div>

                <div class="space-y-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                      </svg>
                    </div>
                    <div>
                      <div class="text-sm text-gray-500">Posiciones Aviación Comercial</div>
                      <div class="font-semibold text-gray-900">{{ aeropuerto.posicionesComerciales }}</div>
                    </div>
                  </div>

                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                      </svg>
                    </div>
                    <div>
                      <div class="text-sm text-gray-500">Posiciones Aviación General</div>
                      <div class="font-semibold text-gray-900">{{ aeropuerto.posicionesGenerales }}</div>
                    </div>
                  </div>

                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                      </svg>
                    </div>
                    <div>
                      <div class="text-sm text-gray-500">Aeronave de Diseño</div>
                      <div class="font-semibold text-gray-900">{{ aeropuerto.aeronaveDiseno }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="space-y-6">
            <!-- Aerolíneas -->
            <div v-if="aeropuerto.aerolineas.length > 0" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 class="text-lg font-bold text-gray-900 mb-4">Aerolíneas</h3>
              <div class="space-y-3">
                <div v-for="aerolinea in aeropuerto.aerolineas" :key="aerolinea" class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-sky-100 text-sky-600 rounded-lg flex items-center justify-center">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                    </svg>
                  </div>
                  <span class="text-gray-700">{{ aerolinea }}</span>
                </div>
              </div>
            </div>

            <!-- Certificaciones -->
            <div v-if="aeropuerto.certificaciones.length > 0" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 class="text-lg font-bold text-gray-900 mb-4">Certificaciones</h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="cert in aeropuerto.certificaciones" :key="cert" class="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                  {{ cert }}
                </span>
              </div>
            </div>

            <!-- Contacto -->
            <div class="bg-sky-50 rounded-2xl p-6">
              <h3 class="text-lg font-bold text-gray-900 mb-4">Contacto</h3>
              <div class="space-y-3 text-sm">
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-sky-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <a href="mailto:gafsaomm@sedena.gob.mx" class="text-sky-600 hover:underline">gafsaomm@sedena.gob.mx</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-12 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <router-link to="/servicios" class="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 text-white rounded-xl font-semibold hover:bg-sky-700 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          Ver todos los aeropuertos
        </router-link>
      </div>
    </section>
  </div>
</template>
