<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center bg-gradient-to-br from-sky-900 via-sky-800 to-slate-900">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span class="inline-block px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sky-200 text-sm font-medium mb-6">
              Gobierno de México
            </span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Unimos el <span class="text-amber-400">cielo</span> y la <span class="text-amber-400">tierra</span>
            </h1>
            <p class="text-xl text-sky-100 mb-8 leading-relaxed">
              Administramos y operamos infraestructura estratégica nacional para contribuir al bienestar social y desarrollo económico de México.
            </p>
            <div class="flex flex-wrap gap-4">
              <router-link to="/servicios" class="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold transition-all hover:-translate-y-1 hover:shadow-lg">
                Explorar Servicios
              </router-link>
              <router-link to="/nosotros" class="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-xl font-semibold transition-all">
                Conocer Más
              </router-link>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div class="w-12 h-12 bg-sky-500/20 rounded-xl flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
              </div>
              <div class="text-3xl font-bold text-white mb-1">11</div>
              <div class="text-sky-200 text-sm">Aeropuertos</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mt-8">
              <div class="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </div>
              <div class="text-3xl font-bold text-white mb-1">15+</div>
              <div class="text-sky-200 text-sm">Hoteles</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div class="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>
              </div>
              <div class="text-3xl font-bold text-white mb-1">20+</div>
              <div class="text-sky-200 text-sm">Estados</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mt-8">
              <div class="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div class="text-3xl font-bold text-white mb-1">24/7</div>
              <div class="text-sky-200 text-sm">Servicio</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Servicios Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-4">Nuestros Servicios</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Infraestructura para México</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">Operamos tres pilares fundamentales que conectan y fortalecen la economía nacional.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Turismo -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
            <div class="h-48 bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
              <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Servicios Turísticos</h3>
              <p class="text-gray-600 mb-4">Hoteles temáticos en las zonas arqueológicas más importantes: Palenque, Chichén Itzá, Tulum y más.</p>
              <router-link to="/servicios" class="text-amber-600 font-semibold flex items-center group-hover:text-amber-700">
                Conocer más
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </router-link>
            </div>
          </div>

          <!-- Aeropuertos -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
            <div class="h-48 bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center">
              <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Aeropuertos</h3>
              <p class="text-gray-600 mb-4">11 terminales aéreas incluyendo el Aeropuerto Internacional Felipe Ángeles (AIFA).</p>
              <router-link to="/servicios" class="text-sky-600 font-semibold flex items-center group-hover:text-sky-700">
                Conocer más
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </router-link>
            </div>
          </div>

          <!-- Combustibles -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
            <div class="h-48 bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
              <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Combustibles</h3>
              <p class="text-gray-600 mb-4">Operaciones de suministro en ubicaciones estratégicas para la infraestructura nacional.</p>
              <router-link to="/servicios" class="text-emerald-600 font-semibold flex items-center group-hover:text-emerald-700">
                Conocer más
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-4">Sobre Nosotros</span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Impulsando el desarrollo de México</h2>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              Grupo Mundo Maya es una entidad paraestatal mexicana establecida el 13 de abril de 2022, cuya misión es administrar, controlar, supervisar, operar y explotar bienes nacionales bajo dirección estatal.
            </p>
            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              Contribuimos activamente al bienestar social y desarrollo económico del país a través de la gestión eficiente de infraestructura estratégica.
            </p>
            <router-link to="/nosotros" class="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors">
              Conocer Nuestra Historia
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </router-link>
          </div>
          <div class="bg-gradient-to-br from-sky-900 to-slate-900 rounded-3xl p-8 text-white">
            <h3 class="text-xl font-bold mb-8 flex items-center">
              <svg class="w-6 h-6 text-amber-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              Nuestra Trayectoria
            </h3>
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="w-3 h-3 bg-amber-400 rounded-full mt-2 mr-4"></div>
                <div>
                  <div class="text-amber-400 text-sm font-medium">Febrero 2022</div>
                  <div class="font-semibold">Anuncio de Creación</div>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-3 h-3 bg-sky-400 rounded-full mt-2 mr-4"></div>
                <div>
                  <div class="text-sky-400 text-sm font-medium">Abril 2022</div>
                  <div class="font-semibold">Constitución Oficial</div>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-3 h-3 bg-emerald-400 rounded-full mt-2 mr-4"></div>
                <div>
                  <div class="text-emerald-400 text-sm font-medium">2022-2024</div>
                  <div class="font-semibold">Expansión y Consolidación</div>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-3 h-3 bg-purple-400 rounded-full mt-2 mr-4 animate-pulse"></div>
                <div>
                  <div class="text-purple-400 text-sm font-medium">Presente</div>
                  <div class="font-semibold">Crecimiento Continuo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-sky-900 to-slate-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">¿Tienes alguna pregunta?</h2>
        <p class="text-xl text-sky-200 mb-8">Estamos aquí para ayudarte con información sobre nuestros servicios y operaciones.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contacto" class="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold transition-all">
            Enviar Mensaje
          </router-link>
          <a href="tel:+555966890113" class="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-xl font-semibold transition-all">
            +55 5966 890113
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
