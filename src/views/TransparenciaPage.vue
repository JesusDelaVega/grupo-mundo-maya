<script setup lang="ts">
const documents = [
  {
    category: 'Marco Normativo',
    items: [
      { title: 'Decreto de Creación', date: '13/04/2022', type: 'PDF' },
      { title: 'Estatuto Orgánico', date: '15/05/2022', type: 'PDF' },
      { title: 'Reglamento Interior', date: '20/06/2022', type: 'PDF' },
      { title: 'Manual de Organización', date: '01/08/2022', type: 'PDF' }
    ]
  },
  {
    category: 'Información Financiera',
    items: [
      { title: 'Estados Financieros 2024', date: '30/09/2024', type: 'PDF' },
      { title: 'Presupuesto de Egresos 2024', date: '01/01/2024', type: 'PDF' },
      { title: 'Informe de Auditoría 2023', date: '15/03/2024', type: 'PDF' },
      { title: 'Cuenta Pública 2023', date: '30/04/2024', type: 'PDF' }
    ]
  },
  {
    category: 'Recursos Humanos',
    items: [
      { title: 'Directorio de Servidores Públicos', date: '01/11/2024', type: 'PDF' },
      { title: 'Tabulador de Sueldos', date: '01/01/2024', type: 'PDF' },
      { title: 'Convocatorias de Empleo', date: '15/11/2024', type: 'PDF' }
    ]
  },
  {
    category: 'Contratos y Licitaciones',
    items: [
      { title: 'Padrón de Proveedores', date: '01/11/2024', type: 'XLSX' },
      { title: 'Contratos 2024', date: '30/10/2024', type: 'PDF' },
      { title: 'Licitaciones en Proceso', date: '20/11/2024', type: 'PDF' }
    ]
  }
]
</script>

<template>
  <div class="pt-20">
    <!-- Hero -->
    <section class="bg-gradient-to-br from-sky-900 to-slate-900 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span class="inline-block px-4 py-2 bg-white/10 text-sky-200 rounded-full text-sm font-medium mb-4">Gobierno Abierto</span>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">Transparencia y Rendición de Cuentas</h1>
        <p class="text-xl text-sky-100 max-w-3xl">Comprometidos con la transparencia gubernamental y el acceso a la información pública.</p>
      </div>
    </section>

    <!-- Quick Links -->
    <section class="py-12 bg-white border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <a href="#" class="group flex items-start gap-4 p-5 bg-gray-50 rounded-xl hover:bg-sky-50 hover:shadow-lg transition-all">
            <div class="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-all">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 group-hover:text-sky-700 transition-colors">Portal de Transparencia</h3>
              <p class="text-gray-500 text-sm mt-1">Accede a toda la información pública obligatoria</p>
            </div>
          </a>

          <a href="https://www.infomex.org.mx/" target="_blank" class="group flex items-start gap-4 p-5 bg-gray-50 rounded-xl hover:bg-sky-50 hover:shadow-lg transition-all">
            <div class="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-all">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 group-hover:text-sky-700 transition-colors">Solicitudes de Información</h3>
              <p class="text-gray-500 text-sm mt-1">Realiza solicitudes INFOMEX</p>
            </div>
          </a>

          <a href="#" class="group flex items-start gap-4 p-5 bg-gray-50 rounded-xl hover:bg-sky-50 hover:shadow-lg transition-all">
            <div class="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-all">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 group-hover:text-sky-700 transition-colors">Denuncias</h3>
              <p class="text-gray-500 text-sm mt-1">Reporta irregularidades de forma anónima</p>
            </div>
          </a>

          <a href="#privacidad" class="group flex items-start gap-4 p-5 bg-gray-50 rounded-xl hover:bg-sky-50 hover:shadow-lg transition-all">
            <div class="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-all">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 group-hover:text-sky-700 transition-colors">Aviso de Privacidad</h3>
              <p class="text-gray-500 text-sm mt-1">Conoce cómo protegemos tus datos</p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Documents Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Normateca y Documentos</h2>
          <p class="text-xl text-gray-600">Accede a la documentación oficial de Grupo Mundo Maya</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div v-for="section in documents" :key="section.category" class="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div class="bg-gradient-to-r from-sky-600 to-sky-500 p-5 flex items-center gap-4">
              <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              </div>
              <h3 class="text-lg font-bold text-white">{{ section.category }}</h3>
            </div>
            <div class="p-4">
              <div class="space-y-2">
                <a v-for="item in section.items" :key="item.title" href="#" class="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-red-50 text-red-500 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                    </div>
                    <div>
                      <h4 class="font-medium text-gray-900 text-sm group-hover:text-sky-600 transition-colors">{{ item.title }}</h4>
                      <p class="text-gray-400 text-xs">{{ item.date }}</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">{{ item.type }}</span>
                    <svg class="w-4 h-4 text-gray-400 group-hover:text-sky-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Privacy Notice -->
    <section class="py-16 bg-white" id="privacidad">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <div class="w-16 h-16 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
            </div>
            <h2 class="text-3xl font-bold text-gray-900">Aviso de Privacidad</h2>
          </div>

          <div class="bg-gray-50 rounded-2xl p-8">
            <h3 class="text-lg font-bold text-gray-900 mb-4">Protección de Datos Personales</h3>
            <p class="text-gray-600 mb-4">
              Grupo Mundo Maya, con domicilio en Carretera Federal México-Pachuca, Santa Lucía, Estado de México, es responsable del tratamiento de los datos personales que nos proporcione, los cuales serán protegidos conforme a lo dispuesto por la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados.
            </p>

            <h4 class="font-semibold text-gray-900 mb-2 mt-6">Finalidades del tratamiento</h4>
            <p class="text-gray-600 mb-4">Sus datos personales serán utilizados para las siguientes finalidades:</p>
            <ul class="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Atención a solicitudes de información</li>
              <li>Comunicación institucional</li>
              <li>Prestación de servicios</li>
              <li>Cumplimiento de obligaciones legales</li>
            </ul>

            <h4 class="font-semibold text-gray-900 mb-2 mt-6">Derechos ARCO</h4>
            <p class="text-gray-600 mb-4">
              Usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales (derechos ARCO). Para ejercer estos derechos, puede presentar su solicitud a través de la Plataforma Nacional de Transparencia o directamente en nuestras oficinas.
            </p>

            <div class="mt-8 p-4 bg-sky-50 rounded-xl flex items-start gap-3">
              <svg class="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <p class="text-sky-800 text-sm">
                Para más información sobre el tratamiento de sus datos personales, puede contactarnos a través de nuestro correo electrónico: <a href="mailto:privacidad@grupomundomaya.com" class="text-sky-600 hover:underline font-medium">privacidad@grupomundomaya.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gradient-to-br from-sky-900 to-slate-900 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-4">¿Tienes alguna pregunta?</h2>
        <p class="text-xl text-sky-200 mb-8">Si necesitas información adicional o deseas realizar una solicitud de acceso a la información, estamos para ayudarte.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://www.infomex.org.mx/" target="_blank" class="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            Solicitar Información (INFOMEX)
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
