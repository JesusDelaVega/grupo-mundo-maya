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
      { titulo: 'Solicitudes de Información', url: '#' },
      { titulo: 'Dudas y Quejas', url: '#' },
      { titulo: 'Capacitación', url: '#' }
    ],
    integrales: [
      { titulo: 'Solicitudes de Información', url: '#' },
      { titulo: 'Dudas y Quejas', url: '#' },
      { titulo: 'Capacitación', url: '#' }
    ]
  },
  {
    id: 'aeropuertos',
    area: 'Subdirección General de Aeropuertos',
    simplificados: [
      { titulo: 'Atención a Clientes', url: '#' },
      { titulo: 'Estacionamiento Interno', url: '#' },
      { titulo: 'Estacionamiento Externo', url: '#' },
      { titulo: 'Estacionamiento Público', url: '#' },
      { titulo: 'Reportes de Seguridad', url: '#' },
      { titulo: 'Credenciales Aeroportuarias', url: '#' },
      { titulo: 'Circuito Cerrado de Televisión (CCTV)', url: '#' }
    ],
    integrales: [
      { titulo: 'Atención a Clientes', url: '#' },
      { titulo: 'Estacionamiento Interno', url: '#' },
      { titulo: 'Estacionamiento Externo', url: '#' },
      { titulo: 'Estacionamiento Público', url: '#' },
      { titulo: 'Reportes de Seguridad', url: '#' },
      { titulo: 'Credenciales Aeroportuarias', url: '#' },
      { titulo: 'Circuito Cerrado de Televisión (CCTV)', url: '#' }
    ]
  },
  {
    id: 'hidrocarburos',
    area: 'Subdirección General de Hidrocarburos',
    simplificados: [
      { titulo: 'Facturación de Comercialización de Combustibles', url: '#' }
    ],
    integrales: [
      { titulo: 'Facturación de Comercialización de Combustibles', url: '#' }
    ]
  },
  {
    id: 'turismo',
    area: 'Subdirección General de Servicios Turísticos y Auxiliares',
    simplificados: [
      { titulo: 'Hospedaje', url: '#' },
      { titulo: 'Sistema de Videovigilancia (CCTV)', url: '#' },
      { titulo: 'Paquetes Turísticos', url: '#' }
    ],
    integrales: [
      { titulo: 'Hospedaje', url: '#' },
      { titulo: 'Sistema de Videovigilancia (CCTV)', url: '#' },
      { titulo: 'Paquetes Turísticos', url: '#' }
    ]
  },
  {
    id: 'corporativo',
    area: 'Subdirección General Corporativa',
    simplificados: [
      { titulo: 'Capacitación', url: '#' },
      { titulo: 'Comunicación Social', url: '#' }
    ],
    integrales: [
      { titulo: 'Capacitación', url: '#' },
      { titulo: 'Comunicación Social', url: '#' }
    ]
  },
  {
    id: 'juridico',
    area: 'Subdirección General Jurídica',
    simplificados: [],
    integrales: []
  },
  {
    id: 'administracion',
    area: 'Subdirección General de Administración y Finanzas',
    simplificados: [
      { titulo: 'Dirección de Talento Humano - Atención Médica', url: '#' },
      { titulo: 'Dirección de Talento Humano - Contratación', url: '#' },
      { titulo: 'Dirección de Talento Humano - Reportes de Incidentes', url: '#' },
      { titulo: 'Dirección de Talento Humano - Seguros', url: '#' },
      { titulo: 'Dirección de Talento Humano - Servicio Social', url: '#' },
      { titulo: 'Dirección de Talento Humano - Reclutamiento', url: '#' },
      { titulo: 'Dirección de Talento Humano - Certificaciones', url: '#' },
      { titulo: 'Dirección de Recursos Materiales - Gestión de Reclamaciones', url: '#' },
      { titulo: 'Dirección de Recursos Materiales - Asignación de Contratos', url: '#' }
    ],
    integrales: [
      { titulo: 'Dirección de Talento Humano - Atención Médica', url: '#' },
      { titulo: 'Dirección de Talento Humano - Contratación', url: '#' },
      { titulo: 'Dirección de Talento Humano - Reportes de Incidentes', url: '#' },
      { titulo: 'Dirección de Talento Humano - Seguros', url: '#' },
      { titulo: 'Dirección de Talento Humano - Servicio Social', url: '#' },
      { titulo: 'Dirección de Talento Humano - Reclutamiento', url: '#' },
      { titulo: 'Dirección de Talento Humano - Certificaciones', url: '#' },
      { titulo: 'Dirección de Recursos Materiales - Gestión de Reclamaciones', url: '#' },
      { titulo: 'Dirección de Recursos Materiales - Asignación de Contratos', url: '#' }
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
      { titulo: 'Mecanismos de cumplimiento documentados', url: '#' },
      { titulo: 'Programa de capacitación 2025', url: '#' },
      { titulo: 'Mecanismos de supervisión y vigilancia', url: '#' }
    ]
  },
  {
    id: 'deberes',
    titulo: 'Vertiente 2 - Deberes',
    docs: [
      { titulo: 'Documentación del deber de seguridad', url: '#', nota: 'En consolidación' },
      { titulo: 'Controles y acuerdos de confidencialidad', url: '#' },
      { titulo: 'Carta de confidencialidad', url: '#' },
      { titulo: 'Contratos de servicios en la nube', url: '#', nota: 'No ejecutado' }
    ]
  },
  {
    id: 'arco',
    titulo: 'Vertiente 3 - Ejercicio de Derechos ARCO',
    docs: [
      { titulo: 'Procedimientos de solicitud de acceso', url: '#' },
      { titulo: 'Estadísticas de solicitudes de Acceso - Q3 2025', url: '#' },
      { titulo: 'Estadísticas de solicitudes de Rectificación - Q3 2025', url: '#' },
      { titulo: 'Estadísticas de solicitudes de Cancelación - Q3 2025', url: '#' },
      { titulo: 'Estadísticas de solicitudes de Oposición - Q3 2025', url: '#' }
    ]
  },
  {
    id: 'portabilidad',
    titulo: 'Vertiente 4 - Portabilidad',
    nota: 'No aplica - La organización NO realiza tratamiento automatizado o electrónico de datos personales. La portabilidad no es técnicamente aplicable.',
    docs: []
  },
  {
    id: 'preventivas',
    titulo: 'Vertiente 5 - Acciones Preventivas',
    nota: 'Evaluaciones de impacto: No se ha implementado tratamiento intensivo o relevante. No hay informes de exención disponibles actualmente.',
    docs: []
  },
  {
    id: 'responsables',
    titulo: 'Vertiente 6 - Responsables',
    docs: [
      { titulo: 'Comité de Transparencia - Procedimientos internos', url: '#' },
      { titulo: 'Unidad de Transparencia - Gestión de solicitudes ARCO', url: '#' },
      { titulo: 'Mecanismos de seguridad para entrega de datos', url: '#' },
      { titulo: 'Costos de reproducción publicados', url: '#' },
      { titulo: 'Instrumentos de evaluación de calidad', url: '#' }
    ]
  }
]

const criterios = [
  { codigo: 'SO/010/2017', titulo: 'Clasificación de cuentas bancarias' },
  { codigo: 'SO/011/2017', titulo: 'Credenciales profesionales' },
  { codigo: 'SO/012/2017', titulo: 'Números del registro poblacional' },
  { codigo: 'SO/013/2017', titulo: 'Identificación fiscal (RFC)' },
  { codigo: 'SO/014/2017', titulo: 'Identificación de representantes' },
  { codigo: 'SO/015/2017', titulo: 'Firmas de servidores públicos' },
  { codigo: 'SO/016/2017', titulo: 'Números de empleado' },
  { codigo: 'SO/017/2017', titulo: 'Divulgación de edad/fecha de nacimiento' },
  { codigo: 'SO/018/2017', titulo: 'Acceso a licencias médicas' },
  { codigo: 'SO/001/2024', titulo: 'Planes de negocio' },
  { codigo: 'SO/002/2024', titulo: 'Propuestas de licitación' },
  { codigo: 'SO/003/2024', titulo: 'Partes en procedimientos judiciales' },
  { codigo: 'SO/004/2024', titulo: 'Números telefónicos oficiales' },
  { codigo: 'SO/005/2024', titulo: 'Procedimientos confidenciales' }
]

const recursosRevision = [
  'RRA 001/2020 - INAI vs. SAT',
  'RRA 002/2020 - INAI vs. IMSS',
  'RRA 003/2021 - INAI vs. SEP',
  'RRA 004/2021 - INAI vs. ISSSTE',
  'RRA 005/2022 - INAI vs. CFE',
  'RRA 006/2022 - INAI vs. PEMEX',
  'RRA 007/2023 - INAI vs. SEDENA',
  'RRA 008/2023 - INAI vs. SEMAR',
  'RRA 009/2024 - INAI vs. SRE',
  'RRA 010/2024 - INAI vs. SHCP'
]

const guias = [
  'El ABC de los Avisos de Privacidad',
  'Marco de mejores prácticas',
  'Guía de contratación de servicios en la nube',
  'Tratamiento de datos biométricos',
  'Desarrollo de documentos de seguridad',
  'Procedimientos de gestión de incidentes',
  'Metodología de gestión de riesgos',
  'Tratamiento de datos relacionados con IA',
  'Perspectivas documentales y archivísticas',
  'Protocolos de situaciones de emergencia',
  'Datos de personas fallecidas',
  'Controles de seguridad',
  'Portabilidad de datos',
  'Transferencias de datos',
  'Registros de control de acceso',
  'Identificación de riesgos',
  'Tratamiento en sector laboral',
  'Confidencialidad',
  'Gestión documental'
]

const tabs = [
  { id: 'avisos', label: 'Avisos de Privacidad' },
  { id: 'vertientes', label: 'Vertientes' },
  { id: 'criterios', label: 'Criterios' },
  { id: 'recursos', label: 'Recursos de Revisión' },
  { id: 'guias', label: 'Guías' }
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
            <p class="text-gray-600">Avisos simplificados e integrales por área organizacional</p>
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
                  <div>
                    <span class="font-semibold text-gray-900">{{ area.area }}</span>
                    <span class="ml-2 text-xs text-gray-400">({{ area.simplificados.length + area.integrales.length }} documentos)</span>
                  </div>
                </div>
                <svg
                  :class="['w-5 h-5 text-gray-400 transition-transform', expandedSection === area.id ? 'rotate-180' : '']"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              <div v-if="expandedSection === area.id" class="px-6 pb-6 border-t border-gray-100">
                <div v-if="area.simplificados.length === 0 && area.integrales.length === 0" class="mt-4 p-4 bg-gray-50 rounded-lg text-center text-gray-500 text-sm">
                  No hay documentos disponibles para esta área
                </div>
                <div v-else class="grid md:grid-cols-2 gap-6 mt-4">
                  <div v-if="area.simplificados.length > 0">
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

                  <div v-if="area.integrales.length > 0">
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
            <p class="text-gray-600">Documentación de cumplimiento por vertiente conforme a la Ley General de Protección de Datos Personales</p>
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
                    <span>
                      {{ doc.titulo }}
                      <span v-if="doc.nota" class="text-amber-600 text-xs ml-1">({{ doc.nota }})</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Criterios -->
        <div v-if="activeTab === 'criterios'" class="space-y-6">
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">Criterios Relevantes</h2>
            <p class="text-gray-600">14 criterios de decisión en materia de clasificación de datos personales</p>
          </div>

          <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead class="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Código</th>
                    <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Criterio</th>
                    <th class="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Documento</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                  <tr v-for="criterio in criterios" :key="criterio.codigo" class="hover:bg-gray-50 transition-colors">
                    <td class="px-6 py-4">
                      <span class="text-sm font-mono text-sky-600">{{ criterio.codigo }}</span>
                    </td>
                    <td class="px-6 py-4">
                      <span class="text-sm text-gray-700">{{ criterio.titulo }}</span>
                    </td>
                    <td class="px-6 py-4 text-right">
                      <a href="#" target="_blank" class="inline-flex items-center gap-1 text-sky-600 hover:text-sky-700 text-sm font-medium">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3"/>
                        </svg>
                        PDF
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Catálogo de Datos Personales -->
          <div class="mt-8 bg-sky-50 rounded-xl p-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="font-semibold text-gray-900">Catálogo de Datos Personales</h3>
                <p class="text-sm text-gray-600 mt-1">Documento que lista todas las categorías de datos procesados por la organización</p>
              </div>
              <a href="#" class="inline-flex items-center gap-2 px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors text-sm font-medium">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3"/>
                </svg>
                Descargar
              </a>
            </div>
          </div>
        </div>

        <!-- Recursos de Revisión -->
        <div v-if="activeTab === 'recursos'" class="space-y-6">
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">Recursos de Revisión</h2>
            <p class="text-gray-600">21 recursos administrativos resueltos (2020-2024) involucrando diversas dependencias federales</p>
          </div>

          <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div class="grid md:grid-cols-2 gap-4">
              <a v-for="recurso in recursosRevision" :key="recurso" href="#" target="_blank" class="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-sky-50 transition-colors group">
                <div class="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <span class="text-sm text-gray-700 group-hover:text-sky-700">{{ recurso }}</span>
              </a>
            </div>
          </div>

          <!-- Denuncias -->
          <div class="mt-8">
            <h3 class="text-lg font-bold text-gray-900 mb-4">Denuncias por Incumplimiento</h3>
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                </div>
                <div>
                  <p class="font-medium text-gray-900">DIT 0893/2022 y DIT 0895/2022</p>
                  <p class="text-sm text-gray-500">Denuncia resuelta contra el Servicio de Administración Tributaria</p>
                </div>
                <a href="#" class="ml-auto text-sky-600 hover:text-sky-700">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Guías -->
        <div v-if="activeTab === 'guias'" class="space-y-6">
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">Guías de Tratamiento</h2>
            <p class="text-gray-600">29 documentos de orientación práctica para el tratamiento de datos personales</p>
          </div>

          <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              <a v-for="guia in guias" :key="guia" href="#" target="_blank" class="flex items-center gap-2 p-3 rounded-lg hover:bg-sky-50 transition-colors group">
                <svg class="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
                <span class="text-sm text-gray-700 group-hover:text-sky-700">{{ guia }}</span>
              </a>
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
            <div class="flex flex-col md:flex-row items-start gap-6">
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
                        <p class="text-gray-900">Carretera México-Pachuca km 34, Santa Lucía, Zumpango, Estado de México, C.P. 55640</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-6 p-4 bg-amber-50 rounded-xl">
                  <p class="text-amber-800 text-sm flex items-start gap-2">
                    <svg class="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span><strong>Nota:</strong> Actualmente no se ha designado Oficial de Protección de Datos Personales.</span>
                  </p>
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
