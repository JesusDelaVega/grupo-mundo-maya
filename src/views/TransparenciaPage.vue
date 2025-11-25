<script setup lang="ts">
const comite = [
  { nombre: 'Lic. Marcos Santos Acosta', cargo: 'Presidente' },
  { nombre: 'Mtro. Luis de la Vega Briones', cargo: 'Responsable Coordinadora de Archivos' },
  { nombre: 'Mtro. Guillermo Leopoldo Mendoza Argüello', cargo: 'Titular Órgano Interno de Control' }
]

const costos = [
  { concepto: 'CD-R', precio: '$12.00' },
  { concepto: 'Copia simple', precio: '$1.00' },
  { concepto: 'Hoja impresa', precio: '$1.00' },
  { concepto: 'Copia certificada', precio: '$27.30' }
]

const hoteles = ['Palenque', 'Edzná', 'Nuevo Uxmal', 'Chichén Itzá', 'Tulum', 'Calakmul']
const parques = ['La Plancha', 'Nuevo Uxmal', 'Parque del Jaguar', 'Mamut Santa Lucía']
const aeropuertos = ['Nogales', 'Nuevo Laredo', 'Cd. Victoria', 'Tamuín', 'Uruapan', 'Puebla', 'Ixtepec', 'Palenque', 'Campeche', 'Chetumal', 'Tulum', 'Del Norte']

const normativa = [
  { categoria: 'Transparencia', docs: ['Ley General de Transparencia y Acceso a Información Pública', 'Lineamientos clasificación/desclasificación', 'Lineamientos lenguaje sencillo y accesibilidad'] },
  { categoria: 'Protección de Datos', docs: ['Ley General de Protección de Datos Personales', 'Lineamientos Generales Sector Público', 'Lineamientos portabilidad datos'] },
  { categoria: 'Archivos', docs: ['Ley General de Archivos', 'Reglamento Ley Federal de Archivos'] }
]
</script>

<template>
  <div class="pt-20">
    <!-- Hero -->
    <section class="bg-gradient-to-br from-sky-900 to-slate-900 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span class="inline-block px-4 py-2 bg-white/10 text-sky-200 rounded-full text-sm font-medium mb-4">Gobierno Abierto</span>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">Transparencia y Rendición de Cuentas</h1>
        <p class="text-xl text-sky-100 max-w-3xl">Comprometidos con la transparencia gubernamental y el acceso a la información pública conforme a la Ley General de Transparencia.</p>
      </div>
    </section>

    <!-- Quick Links -->
    <section class="py-12 bg-white border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <a href="https://www.plataformadetransparencia.org.mx/" target="_blank" class="group flex items-start gap-4 p-5 bg-gray-50 rounded-xl hover:bg-sky-50 hover:shadow-lg transition-all">
            <div class="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-all">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 group-hover:text-sky-700 transition-colors">Plataforma Nacional de Transparencia</h3>
              <p class="text-gray-500 text-sm mt-1">Accede a información pública (PNT)</p>
            </div>
          </a>

          <a href="https://www.plataformadetransparencia.org.mx/" target="_blank" class="group flex items-start gap-4 p-5 bg-gray-50 rounded-xl hover:bg-sky-50 hover:shadow-lg transition-all">
            <div class="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-all">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 group-hover:text-sky-700 transition-colors">Solicitudes de Información</h3>
              <p class="text-gray-500 text-sm mt-1">Realiza solicitudes vía PNT</p>
            </div>
          </a>

          <a href="https://sidec.funcionpublica.gob.mx/" target="_blank" class="group flex items-start gap-4 p-5 bg-gray-50 rounded-xl hover:bg-sky-50 hover:shadow-lg transition-all">
            <div class="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-all">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 group-hover:text-sky-700 transition-colors">Denuncias (SIDEC)</h3>
              <p class="text-gray-500 text-sm mt-1">Reporta irregularidades</p>
            </div>
          </a>

          <a href="https://alertadores.funcionpublica.gob.mx/" target="_blank" class="group flex items-start gap-4 p-5 bg-gray-50 rounded-xl hover:bg-sky-50 hover:shadow-lg transition-all">
            <div class="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-all">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 group-hover:text-sky-700 transition-colors">Alertadores</h3>
              <p class="text-gray-500 text-sm mt-1">Sistema de alertadores</p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Unidad de Transparencia -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Info de la Unidad -->
          <div class="bg-white rounded-2xl shadow-lg p-8">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </div>
              <div>
                <h2 class="text-2xl font-bold text-gray-900">Unidad de Transparencia</h2>
                <p class="text-sky-600 font-medium">Lic. Marcos Santos Acosta</p>
                <p class="text-gray-500 text-sm">Titular</p>
              </div>
            </div>

            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 text-sky-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <div>
                  <p class="text-sm text-gray-500">Dirección</p>
                  <p class="text-gray-900">Carretera Federal México-Pachuca, Campo Militar Estratégico Conjunto No. 37-D, Santa Lucía, Estado de México, C.P. 55640</p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 text-sky-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <div>
                  <p class="text-sm text-gray-500">Teléfono</p>
                  <p class="text-gray-900">5966890108 ext. 50031</p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 text-sky-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <div>
                  <p class="text-sm text-gray-500">Correo Electrónico</p>
                  <a href="mailto:unidadtransparencia@grupomundomaya.com" class="text-sky-600 hover:underline">unidadtransparencia@grupomundomaya.com</a>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 text-sky-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <div>
                  <p class="text-sm text-gray-500">Horario de Atención</p>
                  <p class="text-gray-900">Lunes a Viernes, 09:00 - 18:00 hrs</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Comité de Transparencia -->
          <div class="bg-white rounded-2xl shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Comité de Transparencia</h2>
            <div class="space-y-4">
              <div v-for="(miembro, index) in comite" :key="miembro.nombre" class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold">
                  {{ index + 1 }}
                </div>
                <div>
                  <p class="font-semibold text-gray-900">{{ miembro.nombre }}</p>
                  <p class="text-sm text-gray-500">{{ miembro.cargo }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Costos de Reproducción -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Costos de Reproducción 2025</h2>
          <p class="text-xl text-gray-600">Tarifas para la reproducción de información pública</p>
        </div>

        <div class="max-w-2xl mx-auto">
          <div class="bg-gray-50 rounded-2xl overflow-hidden">
            <div class="grid grid-cols-2 bg-sky-600 text-white p-4 font-semibold">
              <span>Concepto</span>
              <span class="text-right">Precio</span>
            </div>
            <div class="divide-y divide-gray-200">
              <div v-for="costo in costos" :key="costo.concepto" class="grid grid-cols-2 p-4">
                <span class="text-gray-900">{{ costo.concepto }}</span>
                <span class="text-right font-semibold text-sky-600">{{ costo.precio }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Servicios Administrados -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Información Socialmente Útil</h2>
          <p class="text-xl text-gray-600">Servicios administrados por Grupo Mundo Maya</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Hoteles -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div class="bg-gradient-to-r from-amber-500 to-amber-600 p-5 flex items-center gap-4">
              <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-white">Hoteles</h3>
                <p class="text-amber-100 text-sm">{{ hoteles.length }} establecimientos</p>
              </div>
            </div>
            <div class="p-4">
              <ul class="space-y-2">
                <li v-for="hotel in hoteles" :key="hotel" class="flex items-center gap-2 text-gray-700">
                  <svg class="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  {{ hotel }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Parques y Museos -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div class="bg-gradient-to-r from-emerald-500 to-emerald-600 p-5 flex items-center gap-4">
              <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-white">Parques y Museos</h3>
                <p class="text-emerald-100 text-sm">{{ parques.length }} espacios</p>
              </div>
            </div>
            <div class="p-4">
              <ul class="space-y-2">
                <li v-for="parque in parques" :key="parque" class="flex items-center gap-2 text-gray-700">
                  <svg class="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  {{ parque }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Aeropuertos -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div class="bg-gradient-to-r from-sky-500 to-sky-600 p-5 flex items-center gap-4">
              <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-white">Aeropuertos</h3>
                <p class="text-sky-100 text-sm">{{ aeropuertos.length }} terminales</p>
              </div>
            </div>
            <div class="p-4">
              <ul class="grid grid-cols-2 gap-2">
                <li v-for="aeropuerto in aeropuertos" :key="aeropuerto" class="flex items-center gap-2 text-gray-700 text-sm">
                  <svg class="w-4 h-4 text-sky-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  {{ aeropuerto }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Normativa -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Marco Normativo</h2>
          <p class="text-xl text-gray-600">Legislación aplicable en materia de transparencia</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="seccion in normativa" :key="seccion.categoria" class="bg-gray-50 rounded-2xl p-6">
            <h3 class="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg class="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              {{ seccion.categoria }}
            </h3>
            <ul class="space-y-2">
              <li v-for="doc in seccion.docs" :key="doc" class="text-gray-600 text-sm flex items-start gap-2">
                <svg class="w-4 h-4 text-sky-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                {{ doc }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Clasificación de Información -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Clasificación de Información</h2>
          <p class="text-xl text-gray-600">Conforme a la Ley General de Transparencia (Art. 112)</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div class="bg-white rounded-2xl shadow-lg p-6">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
              </div>
              <h3 class="text-lg font-bold text-gray-900">Información Reservada</h3>
            </div>
            <p class="text-gray-600 text-sm">Información temporalmente fuera del acceso público por daño potencial al interés público. Sujeta a 17 criterios legales enumerados en el artículo 112 de la LGTAIP. Tiene temporalidad definida.</p>
          </div>

          <div class="bg-white rounded-2xl shadow-lg p-6">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/></svg>
              </div>
              <h3 class="text-lg font-bold text-gray-900">Información Confidencial</h3>
            </div>
            <p class="text-gray-600 text-sm">Incluye datos personales, secretos comerciales e industriales, e información entregada con ese carácter. No tiene temporalidad y requiere consentimiento del titular para su divulgación.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Aviso de Privacidad -->
    <section class="py-16 bg-white" id="privacidad">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <div class="w-16 h-16 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
            </div>
            <h2 class="text-3xl font-bold text-gray-900">Protección de Datos Personales</h2>
          </div>

          <div class="bg-gray-50 rounded-2xl p-8">
            <p class="text-gray-600 mb-6">
              Grupo Mundo Maya, con domicilio en Carretera Federal México-Pachuca, Campo Militar Estratégico Conjunto No. 37-D, Santa Lucía, Estado de México, C.P. 55640, es responsable del tratamiento de los datos personales que nos proporcione, los cuales serán protegidos conforme a lo dispuesto por la <strong>Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados</strong>.
            </p>

            <h4 class="font-semibold text-gray-900 mb-3">Derechos ARCO</h4>
            <p class="text-gray-600 mb-4">
              Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales. Para ejercer estos derechos, puede presentar su solicitud a través de la Plataforma Nacional de Transparencia o directamente en la Unidad de Transparencia.
            </p>

            <div class="mt-6 p-4 bg-sky-50 rounded-xl flex items-start gap-3">
              <svg class="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <p class="text-sky-800 text-sm">
                Para más información, contacte a la Unidad de Transparencia: <a href="mailto:unidadtransparencia@grupomundomaya.com" class="text-sky-600 hover:underline font-medium">unidadtransparencia@grupomundomaya.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gradient-to-br from-sky-900 to-slate-900 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-4">¿Necesitas realizar una solicitud?</h2>
        <p class="text-xl text-sky-200 mb-8">Accede a la Plataforma Nacional de Transparencia para ejercer tu derecho de acceso a la información pública.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://www.plataformadetransparencia.org.mx/" target="_blank" class="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            Ir a la PNT
          </a>
          <router-link to="/contacto" class="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            Contactar
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>
