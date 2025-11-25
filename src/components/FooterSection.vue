<template>
  <footer class="bg-gray-900 text-white">
    <!-- Links externos -->
    <div class="bg-gray-800 py-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm">
          <a href="https://www.gob.mx/publicaciones" target="_blank" class="text-gray-400 hover:text-white transition-colors">Publicaciones Oficiales</a>
          <a href="https://www.ordenjuridico.gob.mx/" target="_blank" class="text-gray-400 hover:text-white transition-colors">Marco Jurídico</a>
          <a href="https://www.plataformadetransparencia.org.mx/" target="_blank" class="text-gray-400 hover:text-white transition-colors">Plataforma Nacional de Transparencia</a>
          <a href="https://alertadores.funcionpublica.gob.mx/" target="_blank" class="text-gray-400 hover:text-white transition-colors">Alerta</a>
          <a href="https://sidec.funcionpublica.gob.mx/" target="_blank" class="text-gray-400 hover:text-white transition-colors">Denuncia</a>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div class="md:col-span-1">
          <div class="flex items-center space-x-3 mb-4">
            <div class="w-12 h-12 bg-sky-600 rounded-lg flex items-center justify-center">
              <svg class="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </div>
            <div>
              <div class="font-bold text-lg">Grupo Mundo Maya</div>
              <div class="text-xs text-sky-400">Unimos el cielo y la tierra</div>
            </div>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed">Entidad paraestatal dedicada al desarrollo nacional mediante la administración de infraestructura estratégica.</p>

          <!-- Logo Gobierno -->
          <div class="mt-6">
            <img src="https://www.gob.mx/cms/uploads/structure/image/1/home_gob.png" alt="Gobierno de México" class="h-10 bg-white rounded px-2 py-1" />
          </div>
        </div>

        <!-- Enlaces -->
        <div>
          <h4 class="font-semibold mb-4 text-white">Enlaces</h4>
          <ul class="space-y-3 text-gray-400 text-sm">
            <li><router-link to="/" class="hover:text-white transition-colors flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>Inicio</router-link></li>
            <li><router-link to="/nosotros" class="hover:text-white transition-colors flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>Nosotros</router-link></li>
            <li><router-link to="/servicios" class="hover:text-white transition-colors flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5"/></svg>Servicios</router-link></li>
            <li><router-link to="/noticias" class="hover:text-white transition-colors flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>Noticias</router-link></li>
          </ul>
        </div>

        <!-- Información -->
        <div>
          <h4 class="font-semibold mb-4 text-white">Información</h4>
          <ul class="space-y-3 text-gray-400 text-sm">
            <li><router-link to="/transparencia" class="hover:text-white transition-colors flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>Transparencia</router-link></li>
            <li><router-link to="/transparencia#privacidad" class="hover:text-white transition-colors flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>Protección de Datos</router-link></li>
            <li><a href="https://www.plataformadetransparencia.org.mx/" target="_blank" class="hover:text-white transition-colors flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>Normateca</a></li>
            <li><router-link to="/contacto" class="hover:text-white transition-colors flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>Contacto</router-link></li>
          </ul>
        </div>

        <!-- Contacto -->
        <div>
          <h4 class="font-semibold mb-4 text-white">Contacto</h4>
          <ul class="space-y-3 text-gray-400 text-sm">
            <li class="flex items-start space-x-3">
              <svg class="w-5 h-5 text-sky-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <span>Carretera Federal México-Pachuca, Campo Militar Estratégico Conjunto No. 37-D, Santa Lucía, Edo. de Méx. C.P. 55640</span>
            </li>
            <li class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-sky-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <a href="tel:+555966890113" class="hover:text-white transition-colors">+55 5966 890113</a>
            </li>
            <li class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-sky-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <a href="mailto:contacto@grupomundomaya.com" class="hover:text-white transition-colors">contacto@grupomundomaya.com</a>
            </li>
          </ul>

          <!-- Sitios Relacionados -->
          <div class="mt-6 pt-6 border-t border-gray-800">
            <h5 class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Sitios Relacionados</h5>
            <div class="space-y-2">
              <a href="https://aifa.aero/" target="_blank" class="block text-sm text-gray-400 hover:text-sky-400 transition-colors">AIFA Felipe Ángeles</a>
              <a href="https://www.gob.mx/grupomundomaya" target="_blank" class="block text-sm text-gray-400 hover:text-sky-400 transition-colors">Portal gob.mx</a>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>&copy; 2025 <span class="font-semibold text-white">Grupo Mundo Maya</span>. Todos los derechos reservados.</p>
        <p class="mt-2 md:mt-0 flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"/></svg>
          Gobierno de México
        </p>
      </div>
    </div>
  </footer>
</template>
