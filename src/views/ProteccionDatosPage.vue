<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('avisos')
const expandedSection = ref<string | null>(null)

const toggleSection = (section: string) => {
  expandedSection.value = expandedSection.value === section ? null : section
}

const avisosPrivacidad = [
  {
    id: 'transparencia',
    area: 'Unidad de Transparencia',
    simplificados: [
      { titulo: 'Aviso de Privacidad Simplificado - Solicitudes de Información', url: '#' }
    ],
    integrales: [
      { titulo: 'Aviso de Privacidad Integral - Solicitudes de Información', url: '#' }
    ]
  },
  {
    id: 'aeropuertos',
    area: 'Subdirección General de Aeropuertos',
    simplificados: [
      { titulo: 'Aviso de Privacidad Simplificado - Operaciones Aeroportuarias', url: '#' }
    ],
    integrales: [
      { titulo: 'Aviso de Privacidad Integral - Operaciones Aeroportuarias', url: '#' }
    ]
  },
  {
    id: 'hidrocarburos',
    area: 'Subdirección General de Hidrocarburos',
    simplificados: [
      { titulo: 'Aviso de Privacidad Simplificado - Gestión de Combustibles', url: '#' }
    ],
    integrales: [
      { titulo: 'Aviso de Privacidad Integral - Gestión de Combustibles', url: '#' }
    ]
  },
  {
    id: 'turismo',
    area: 'Subdirección General de Servicios Turísticos',
    simplificados: [
      { titulo: 'Aviso de Privacidad Simplificado - Hoteles y Parques', url: '#' }
    ],
    integrales: [
      { titulo: 'Aviso de Privacidad Integral - Hoteles y Parques', url: '#' }
    ]
  },
  {
    id: 'administracion',
    area: 'Subdirección General de Administración y Finanzas',
    simplificados: [
      { titulo: 'Aviso de Privacidad Simplificado - Talento Humano', url: '#' },
      { titulo: 'Aviso de Privacidad Simplificado - Recursos Materiales', url: '#' }
    ],
    integrales: [
      { titulo: 'Aviso de Privacidad Integral - Talento Humano', url: '#' },
      { titulo: 'Aviso de Privacidad Integral - Recursos Materiales', url: '#' }
    ]
  }
]

interface Vertiente {
  id: string
  titulo: string
  nota?: string
  docs: { titulo: string; url: string; nota?: string }[]
}

const vertientes: Vertiente[] = [
  {
    id: 'principios',
    titulo: 'Vertiente 1 - Principios',
    docs: [
      { titulo: 'Cédula de avisos de privacidad integrales', url: '#' },
      { titulo: 'Políticas de protección de datos personales', url: '#' },
      { titulo: 'Programa de capacitación 2025', url: '#' },
      { titulo: 'Mecanismos de supervisión', url: '#' }
    ]
  },
  {
    id: 'deberes',
    titulo: 'Vertiente 2 - Deberes',
    docs: [
      { titulo: 'Requisitos de seguridad', url: '#' },
      { titulo: 'Carta de confidencialidad', url: '#' }
    ]
  },
  {
    id: 'arco',
    titulo: 'Vertiente 3 - Ejercicio de Derechos ARCO',
    docs: [
      { titulo: 'Procedimiento para ejercer derechos ARCO', url: '#' },
      { titulo: 'Informe estadístico - Acceso Q3 2025', url: '#' },
      { titulo: 'Informe estadístico - Rectificación Q3 2025', url: '#' }
    ]
  },
  {
    id: 'portabilidad',
    titulo: 'Vertiente 4 - Portabilidad',
    nota: 'No aplica - La organización no realiza tratamiento automatizado de datos personales.',
    docs: []
  }
]

const tabs = [
  { id: 'avisos', label: 'Avisos de Privacidad' },
  { id: 'vertientes', label: 'Información Relevante' },
  { id: 'recursos', label: 'Guías y Criterios' }
]
</script>

<template>
  <div class="pt-20">
    <!-- Hero -->
    <section class="bg-gradient-to-br from-sky-900 to-slate-900 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span class="inline-block px-4 py-2 bg-white/10 text-sky-200 rounded-full text-sm font-medium mb-4">Derechos ARCO</span>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">Protección de Datos Personales</h1>
        <p class="text-xl text-sky-100 max-w-3xl">Información sobre la protección de datos personales y procedimientos para ejercer tus derechos de Acceso, Rectificación, Cancelación, Oposición y Portabilidad.</p>
      </div>
    </section>

    <!-- Qué son los datos personales -->
    <section class="py-12 bg-white border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="flex items-start gap-6">
            <div class="w-14 h-14 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-900 mb-3">¿Qué son los Datos Personales?</h2>
              <p class="text-gray-600">
                Los datos personales son cualquier información concerniente a una persona física identificada o identificable.
                La Secretaría Anticorrupción y Buen Gobierno es la autoridad garante en materia de protección de datos personales.
              </p>
            </div>
          </div>
        </div>
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

        <!-- Avisos de Privacidad -->
        <div v-if="activeTab === 'avisos'" class="space-y-6">
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">Avisos de Privacidad</h2>
            <p class="text-gray-600">Avisos simplificados e integrales por área</p>
          </div>

          <div class="space-y-4">
            <div v-for="area in avisosPrivacidad" :key="area.id" class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                @click="toggleSection(area.id)"
                class="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 bg-sky-100 text-sky-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5"/>
                    </svg>
                  </div>
                  <span class="font-semibold text-gray-900">{{ area.area }}</span>
                </div>
                <svg
                  :class="['w-5 h-5 text-gray-400 transition-transform', expandedSection === area.id ? 'rotate-180' : '']"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              <div v-if="expandedSection === area.id" class="px-6 pb-6 border-t border-gray-100">
                <div class="grid md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <h4 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Avisos Simplificados</h4>
                    <div class="space-y-2">
                      <a
                        v-for="doc in area.simplificados"
                        :key="doc.titulo"
                        :href="doc.url"
                        target="_blank"
                        class="flex items-center gap-2 text-sm text-gray-700 hover:text-sky-600 transition-colors"
                      >
                        <svg class="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3"/>
                        </svg>
                        {{ doc.titulo }}
                      </a>
                    </div>
                  </div>

                  <div>
                    <h4 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Avisos Integrales</h4>
                    <div class="space-y-2">
                      <a
                        v-for="doc in area.integrales"
                        :key="doc.titulo"
                        :href="doc.url"
                        target="_blank"
                        class="flex items-center gap-2 text-sm text-gray-700 hover:text-sky-600 transition-colors"
                      >
                        <svg class="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3"/>
                        </svg>
                        {{ doc.titulo }}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Vertientes -->
        <div v-if="activeTab === 'vertientes'" class="space-y-6">
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">Información Relevante en Materia de Datos Personales</h2>
            <p class="text-gray-600">Documentación de cumplimiento por vertiente</p>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div v-for="vertiente in vertientes" :key="vertiente.id" class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 class="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <svg class="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                </svg>
                {{ vertiente.titulo }}
              </h3>

              <div v-if="vertiente.nota" class="p-3 bg-amber-50 rounded-lg mb-4">
                <p class="text-amber-800 text-sm">{{ vertiente.nota }}</p>
              </div>

              <ul v-if="vertiente.docs.length" class="space-y-2">
                <li v-for="doc in vertiente.docs" :key="doc.titulo">
                  <a :href="doc.url" target="_blank" class="flex items-start gap-2 text-sm text-gray-700 hover:text-sky-600 transition-colors">
                    <svg class="w-4 h-4 text-sky-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3"/>
                    </svg>
                    <span>{{ doc.titulo }}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Guías y Criterios -->
        <div v-if="activeTab === 'recursos'" class="space-y-8">
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">Guías y Criterios</h2>
            <p class="text-gray-600">Documentos de orientación para el tratamiento de datos personales</p>
          </div>

          <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              <div class="flex items-center gap-2 text-sm text-gray-700">
                <svg class="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Datos de personas fallecidas
              </div>
              <div class="flex items-center gap-2 text-sm text-gray-700">
                <svg class="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Gestión de riesgos
              </div>
              <div class="flex items-center gap-2 text-sm text-gray-700">
                <svg class="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Controles de seguridad
              </div>
              <div class="flex items-center gap-2 text-sm text-gray-700">
                <svg class="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Avisos de privacidad
              </div>
              <div class="flex items-center gap-2 text-sm text-gray-700">
                <svg class="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Servicios en la nube
              </div>
              <div class="flex items-center gap-2 text-sm text-gray-700">
                <svg class="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Datos biométricos
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Unidad de Transparencia -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="bg-gray-50 rounded-2xl p-8">
            <div class="flex items-start gap-6">
              <div class="w-14 h-14 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <div class="flex-1">
                <h2 class="text-2xl font-bold text-gray-900 mb-2">Unidad de Transparencia</h2>
                <p class="text-sky-600 font-medium">Lic. Marcos Santos Acosta - Titular</p>

                <div class="grid md:grid-cols-2 gap-6 mt-6">
                  <div class="space-y-3">
                    <div class="flex items-start gap-3">
                      <svg class="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <div>
                        <p class="text-sm text-gray-500">Horario</p>
                        <p class="text-gray-900">Lunes a Viernes, 09:00 - 15:30 hrs</p>
                      </div>
                    </div>

                    <div class="flex items-start gap-3">
                      <svg class="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      <div>
                        <p class="text-sm text-gray-500">Correo Electrónico</p>
                        <a href="mailto:unidadtransparencia@grupomundomaya.com" class="text-sky-600 hover:underline">unidadtransparencia@grupomundomaya.com</a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div class="flex items-start gap-3">
                      <svg class="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      <div>
                        <p class="text-sm text-gray-500">Dirección</p>
                        <p class="text-gray-900">Carretera México-Pachuca km 34, Santa Lucía, Zumpango, Estado de México</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gradient-to-br from-sky-900 to-slate-900 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-4">¿Deseas ejercer tus derechos ARCO?</h2>
        <p class="text-xl text-sky-200 mb-8">Presenta tu solicitud a través de la Plataforma Nacional de Transparencia o directamente en la Unidad de Transparencia.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://www.plataformadetransparencia.org.mx/" target="_blank" class="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
            Ir a la PNT
          </a>
          <router-link to="/contacto" class="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Contactar
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>
