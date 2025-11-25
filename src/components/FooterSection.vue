<template>
  <footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div class="md:col-span-1">
          <div class="flex items-center space-x-3 mb-4">
            <div class="w-10 h-10 bg-sky-600 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </div>
            <div>
              <div class="font-bold">Grupo Mundo Maya</div>
              <div class="text-xs text-gray-400">Unimos el cielo y la tierra</div>
            </div>
          </div>
          <p class="text-gray-400 text-sm">Entidad paraestatal dedicada al desarrollo nacional mediante infraestructura estratégica.</p>
        </div>

        <!-- Enlaces -->
        <div>
          <h4 class="font-semibold mb-4">Enlaces</h4>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li><router-link to="/" class="hover:text-white transition-colors">Inicio</router-link></li>
            <li><router-link to="/nosotros" class="hover:text-white transition-colors">Nosotros</router-link></li>
            <li><router-link to="/servicios" class="hover:text-white transition-colors">Servicios</router-link></li>
            <li><router-link to="/noticias" class="hover:text-white transition-colors">Noticias</router-link></li>
          </ul>
        </div>

        <!-- Servicios -->
        <div>
          <h4 class="font-semibold mb-4">Servicios</h4>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li><router-link to="/servicios" class="hover:text-white transition-colors">Turismo</router-link></li>
            <li><router-link to="/servicios" class="hover:text-white transition-colors">Aeropuertos</router-link></li>
            <li><router-link to="/servicios" class="hover:text-white transition-colors">Combustibles</router-link></li>
            <li><router-link to="/transparencia" class="hover:text-white transition-colors">Transparencia</router-link></li>
          </ul>
        </div>

        <!-- Contacto -->
        <div>
          <h4 class="font-semibold mb-4">Contacto</h4>
          <ul class="space-y-3 text-gray-400 text-sm">
            <li class="flex items-center space-x-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <span>+55 5966 890113</span>
            </li>
            <li class="flex items-start space-x-2">
              <svg class="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <span>Carretera Federal México-Pachuca, Santa Lucía, Edo. de Méx.</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} Grupo Mundo Maya. Todos los derechos reservados.</p>
        <p class="mt-2 md:mt-0">Gobierno de México</p>
      </div>
    </div>
  </footer>
</template>
