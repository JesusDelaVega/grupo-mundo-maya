<script setup lang="ts">
const documents = [
  {
    category: 'Marco Normativo',
    icon: 'pi pi-file',
    items: [
      { title: 'Decreto de Creación', date: '13/04/2022', type: 'PDF' },
      { title: 'Estatuto Orgánico', date: '15/05/2022', type: 'PDF' },
      { title: 'Reglamento Interior', date: '20/06/2022', type: 'PDF' },
      { title: 'Manual de Organización', date: '01/08/2022', type: 'PDF' }
    ]
  },
  {
    category: 'Información Financiera',
    icon: 'pi pi-chart-bar',
    items: [
      { title: 'Estados Financieros 2024', date: '30/09/2024', type: 'PDF' },
      { title: 'Presupuesto de Egresos 2024', date: '01/01/2024', type: 'PDF' },
      { title: 'Informe de Auditoría 2023', date: '15/03/2024', type: 'PDF' },
      { title: 'Cuenta Pública 2023', date: '30/04/2024', type: 'PDF' }
    ]
  },
  {
    category: 'Recursos Humanos',
    icon: 'pi pi-users',
    items: [
      { title: 'Directorio de Servidores Públicos', date: '01/11/2024', type: 'PDF' },
      { title: 'Tabulador de Sueldos', date: '01/01/2024', type: 'PDF' },
      { title: 'Convocatorias de Empleo', date: '15/11/2024', type: 'PDF' }
    ]
  },
  {
    category: 'Contratos y Licitaciones',
    icon: 'pi pi-briefcase',
    items: [
      { title: 'Padrón de Proveedores', date: '01/11/2024', type: 'XLSX' },
      { title: 'Contratos 2024', date: '30/10/2024', type: 'PDF' },
      { title: 'Licitaciones en Proceso', date: '20/11/2024', type: 'PDF' }
    ]
  }
]

const quickLinks = [
  {
    icon: 'pi pi-shield',
    title: 'Portal de Transparencia',
    description: 'Accede a toda la información pública obligatoria',
    link: '#'
  },
  {
    icon: 'pi pi-file-edit',
    title: 'Solicitudes de Información',
    description: 'Realiza solicitudes INFOMEX',
    link: 'https://www.infomex.org.mx/'
  },
  {
    icon: 'pi pi-exclamation-circle',
    title: 'Denuncias',
    description: 'Reporta irregularidades de forma anónima',
    link: '#'
  },
  {
    icon: 'pi pi-lock',
    title: 'Aviso de Privacidad',
    description: 'Conoce cómo protegemos tus datos',
    link: '#privacidad'
  }
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative pt-32 pb-20 bg-gradient-to-br from-sky-900 via-sky-800 to-slate-900 overflow-hidden">
      <div class="absolute inset-0 maya-pattern opacity-20"></div>

      <div class="relative container mx-auto px-6">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-sky-200 rounded-full text-sm font-medium mb-6">
            <i class="pi pi-shield"></i>
            Gobierno Abierto
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Transparencia y Rendición de Cuentas
          </h1>
          <p class="text-xl text-sky-100/80 leading-relaxed">
            Comprometidos con la transparencia gubernamental y el acceso a la información pública.
          </p>
        </div>
      </div>
    </section>

    <!-- Quick Links -->
    <section class="py-12 bg-white border-b border-slate-100">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <a
            v-for="link in quickLinks"
            :key="link.title"
            :href="link.link"
            class="group flex items-start gap-4 p-5 bg-slate-50 rounded-xl hover:bg-sky-50 hover:shadow-card transition-all duration-300"
          >
            <div class="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
              <i :class="[link.icon, 'text-xl']"></i>
            </div>
            <div>
              <h3 class="font-semibold text-slate-800 group-hover:text-sky-700 transition-colors">{{ link.title }}</h3>
              <p class="text-slate-500 text-sm mt-1">{{ link.description }}</p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Documents Section -->
    <section class="section bg-slate-50" id="normateca">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="section-title">Normateca y Documentos</h2>
          <p class="section-subtitle">
            Accede a la documentación oficial de Grupo Mundo Maya
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div
            v-for="section in documents"
            :key="section.category"
            class="bg-white rounded-2xl overflow-hidden shadow-card"
          >
            <div class="bg-gradient-to-r from-sky-600 to-sky-500 p-5 flex items-center gap-4">
              <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <i :class="[section.icon, 'text-2xl text-white']"></i>
              </div>
              <h3 class="text-lg font-bold text-white">{{ section.category }}</h3>
            </div>
            <div class="p-4">
              <div class="space-y-2">
                <a
                  v-for="item in section.items"
                  :key="item.title"
                  href="#"
                  class="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-red-50 text-red-500 rounded-lg flex items-center justify-center">
                      <i class="pi pi-file-pdf"></i>
                    </div>
                    <div>
                      <h4 class="font-medium text-slate-800 text-sm group-hover:text-sky-600 transition-colors">
                        {{ item.title }}
                      </h4>
                      <p class="text-slate-400 text-xs">{{ item.date }}</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded">{{ item.type }}</span>
                    <i class="pi pi-download text-slate-400 group-hover:text-sky-600 transition-colors"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Privacy Notice -->
    <section class="section bg-white" id="privacidad">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <div class="w-16 h-16 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i class="pi pi-lock text-2xl"></i>
            </div>
            <h2 class="section-title">Aviso de Privacidad</h2>
          </div>

          <div class="prose prose-slate max-w-none">
            <div class="bg-slate-50 rounded-2xl p-8">
              <h3 class="text-lg font-bold text-slate-800 mb-4">Protección de Datos Personales</h3>
              <p class="text-slate-600 mb-4">
                Grupo Mundo Maya, con domicilio en Ciudad de México, México, es responsable del tratamiento de los datos personales que nos proporcione, los cuales serán protegidos conforme a lo dispuesto por la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados.
              </p>

              <h4 class="font-semibold text-slate-800 mb-2 mt-6">Finalidades del tratamiento</h4>
              <p class="text-slate-600 mb-4">
                Sus datos personales serán utilizados para las siguientes finalidades:
              </p>
              <ul class="list-disc list-inside text-slate-600 space-y-2 mb-4">
                <li>Atención a solicitudes de información</li>
                <li>Comunicación institucional</li>
                <li>Prestación de servicios</li>
                <li>Cumplimiento de obligaciones legales</li>
              </ul>

              <h4 class="font-semibold text-slate-800 mb-2 mt-6">Derechos ARCO</h4>
              <p class="text-slate-600 mb-4">
                Usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales (derechos ARCO). Para ejercer estos derechos, puede presentar su solicitud a través de la Plataforma Nacional de Transparencia o directamente en nuestras oficinas.
              </p>

              <div class="mt-8 p-4 bg-sky-50 rounded-xl">
                <p class="text-sky-800 text-sm">
                  <i class="pi pi-info-circle mr-2"></i>
                  Para más información sobre el tratamiento de sus datos personales, puede contactarnos a través de nuestro correo electrónico: <a href="mailto:privacidad@grupomundomaya.com" class="text-sky-600 hover:underline">privacidad@grupomundomaya.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section bg-gradient-to-br from-sky-900 to-slate-900 text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-4">¿Tienes alguna pregunta?</h2>
        <p class="text-sky-200/80 mb-8 max-w-2xl mx-auto">
          Si necesitas información adicional o deseas realizar una solicitud de acceso a la información, estamos para ayudarte.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.infomex.org.mx/"
            target="_blank"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-400 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-1 transition-all duration-300"
          >
            <i class="pi pi-external-link"></i>
            Solicitar Información (INFOMEX)
          </a>
          <router-link
            to="/contacto"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
          >
            <i class="pi pi-envelope"></i>
            Contactar
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>
