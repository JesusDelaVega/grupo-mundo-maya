<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center bg-gradient-to-br from-sky-900 via-sky-800 to-slate-900 overflow-hidden">
      <div class="absolute inset-0 bg-black/30"></div>
      <!-- Decorative elements -->
      <div class="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="flex items-center gap-3 mb-6">
              <img src="https://www.gob.mx/cms/uploads/structure/image/1/home_gob.png" alt="Gobierno de México" class="h-12 bg-white rounded px-2 py-1" />
              <span class="text-sky-200 text-sm">2024 SEDENA GAFSACOMM</span>
            </div>
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Unimos el <span class="text-amber-400">cielo</span><br/>y la <span class="text-amber-400">tierra</span>
            </h1>
            <p class="text-xl text-sky-100 mb-8 leading-relaxed max-w-xl">
              Administramos y operamos infraestructura estratégica nacional: aeropuertos, hoteles y servicios de combustible para el desarrollo de México.
            </p>
            <div class="flex flex-wrap gap-4">
              <router-link to="/servicios" class="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold transition-all hover:-translate-y-1 hover:shadow-xl shadow-amber-500/30">
                Explorar Servicios
              </router-link>
              <router-link to="/nosotros" class="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-xl font-semibold transition-all backdrop-blur">
                Conocer Más
              </router-link>
            </div>
          </div>

          <!-- Stats Grid -->
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all">
              <div class="w-12 h-12 bg-sky-500/20 rounded-xl flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
              </div>
              <div class="text-4xl font-bold text-white mb-1">12</div>
              <div class="text-sky-200 text-sm">Aeropuertos</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mt-8 hover:bg-white/15 transition-all">
              <div class="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </div>
              <div class="text-4xl font-bold text-white mb-1">6</div>
              <div class="text-sky-200 text-sm">Hoteles</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all">
              <div class="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <div class="text-4xl font-bold text-white mb-1">11</div>
              <div class="text-sky-200 text-sm">Combustibles</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mt-8 hover:bg-white/15 transition-all">
              <div class="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
              </div>
              <div class="text-4xl font-bold text-white mb-1">4</div>
              <div class="text-sky-200 text-sm">Parques</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
      </div>
    </section>

    <!-- Marcas/Subsidiarias -->
    <section class="py-12 bg-white border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <div class="flex items-center gap-3 text-gray-400 hover:text-sky-600 transition-colors cursor-pointer">
            <div class="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
              <svg class="w-7 h-7 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
            </div>
            <span class="font-bold text-gray-700">AIFA</span>
          </div>
          <div class="flex items-center gap-3 text-gray-400 hover:text-sky-600 transition-colors cursor-pointer">
            <div class="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <svg class="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3l14 9-14 9V3z"/></svg>
            </div>
            <span class="font-bold text-gray-700">Mexicana</span>
          </div>
          <div class="flex items-center gap-3 text-gray-400 hover:text-amber-600 transition-colors cursor-pointer">
            <div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
              <svg class="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
            </div>
            <span class="font-bold text-gray-700">Mamut</span>
          </div>
          <div class="flex items-center gap-3 text-gray-400 hover:text-cyan-600 transition-colors cursor-pointer">
            <div class="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
              <svg class="w-7 h-7 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>
            </div>
            <span class="font-bold text-gray-700">AI Tulum</span>
          </div>
          <div class="flex items-center gap-3 text-gray-400 hover:text-green-600 transition-colors cursor-pointer">
            <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <svg class="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"/></svg>
            </div>
            <span class="font-bold text-gray-700">Tren Maya</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Nosotros Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-4">Nosotros</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprometidos con México</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Misión -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-14 h-14 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Misión</h3>
            <p class="text-gray-600 leading-relaxed">Administrar, controlar, supervisar, operar y explotar bienes nacionales bajo la rectoría del Estado, contribuyendo al bienestar social y desarrollo económico.</p>
          </div>

          <!-- Visión -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-14 h-14 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Visión</h3>
            <p class="text-gray-600 leading-relaxed">Ser reconocidos como la Entidad Paraestatal más importante de México, referente de excelencia en las diversas actividades económicas.</p>
          </div>

          <!-- Objetivo -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Objetivo</h3>
            <p class="text-gray-600 leading-relaxed">Contribuir al Desarrollo Nacional mediante estrategias orientadas a la mejora continua de las actividades económicas del grupo.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Servicios Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-4">Nuestros Servicios</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Infraestructura para México</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">Operamos tres pilares fundamentales que conectan y fortalecen la economía nacional.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Turismo -->
          <div class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div class="h-56 bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center relative overflow-hidden">
              <div class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all"></div>
              <svg class="w-20 h-20 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Servicios Turísticos</h3>
              <p class="text-gray-600 mb-4">6 hoteles temáticos en zonas arqueológicas: Palenque, Edzná, Nuevo Uxmal, Chichén Itzá, Tulum y Calakmul.</p>
              <ul class="space-y-2 text-sm text-gray-500 mb-6">
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  4 Parques y Museos
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  Experiencias culturales
                </li>
              </ul>
              <router-link to="/servicios" class="text-amber-600 font-semibold flex items-center group-hover:text-amber-700">
                Ver más
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </router-link>
            </div>
          </div>

          <!-- Aeropuertos -->
          <div class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div class="h-56 bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center relative overflow-hidden">
              <div class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all"></div>
              <svg class="w-20 h-20 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Aeropuertos</h3>
              <p class="text-gray-600 mb-4">12 terminales aéreas incluyendo AIFA, Tulum, Chetumal, Palenque, Campeche y más.</p>
              <ul class="space-y-2 text-sm text-gray-500 mb-6">
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-sky-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  AIFA Felipe Ángeles
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-sky-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  Mexicana de Aviación
                </li>
              </ul>
              <router-link to="/servicios" class="text-sky-600 font-semibold flex items-center group-hover:text-sky-700">
                Ver más
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </router-link>
            </div>
          </div>

          <!-- Combustibles -->
          <div class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div class="h-56 bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center relative overflow-hidden">
              <div class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all"></div>
              <svg class="w-20 h-20 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Combustibles</h3>
              <p class="text-gray-600 mb-4">11 puntos de distribución estratégica de combustible de aviación a nivel nacional.</p>
              <ul class="space-y-2 text-sm text-gray-500 mb-6">
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  Logística eficiente
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  Cobertura nacional
                </li>
              </ul>
              <router-link to="/servicios" class="text-emerald-600 font-semibold flex items-center group-hover:text-emerald-700">
                Ver más
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mapa de Ubicaciones -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-4">Cobertura Nacional</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Presencia en Todo México</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">Infraestructura estratégica distribuida en los puntos más importantes del país.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Aeropuertos Map Card -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div class="h-48 bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center relative">
              <svg class="w-full h-full text-sky-300 absolute inset-0 p-4" viewBox="0 0 100 60" fill="currentColor" opacity="0.3">
                <path d="M20,30 Q30,10 50,20 T80,30 Q70,50 50,45 T20,30"/>
              </svg>
              <div class="relative z-10 grid grid-cols-4 gap-2 p-4">
                <div v-for="i in 12" :key="i" class="w-3 h-3 bg-sky-500 rounded-full animate-pulse" :style="{animationDelay: i * 0.1 + 's'}"></div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                <svg class="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                12 Aeropuertos
              </h3>
              <p class="text-gray-600 text-sm">Nogales, Nuevo Laredo, Cd. Victoria, Tamuín, Uruapan, Puebla, Ixtepec, Palenque, Campeche, Chetumal, Tulum, Del Norte</p>
            </div>
          </div>

          <!-- Hoteles Map Card -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div class="h-48 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center relative">
              <svg class="w-full h-full text-amber-300 absolute inset-0 p-4" viewBox="0 0 100 60" fill="currentColor" opacity="0.3">
                <path d="M20,30 Q30,10 50,20 T80,30 Q70,50 50,45 T20,30"/>
              </svg>
              <div class="relative z-10 grid grid-cols-3 gap-4 p-4">
                <div v-for="i in 6" :key="i" class="w-4 h-4 bg-amber-500 rounded-lg animate-pulse" :style="{animationDelay: i * 0.15 + 's'}"></div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                <svg class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                6 Hoteles
              </h3>
              <p class="text-gray-600 text-sm">Palenque, Edzná, Nuevo Uxmal, Chichén Itzá, Tulum, Calakmul</p>
            </div>
          </div>

          <!-- Combustibles Map Card -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div class="h-48 bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center relative">
              <svg class="w-full h-full text-emerald-300 absolute inset-0 p-4" viewBox="0 0 100 60" fill="currentColor" opacity="0.3">
                <path d="M20,30 Q30,10 50,20 T80,30 Q70,50 50,45 T20,30"/>
              </svg>
              <div class="relative z-10 grid grid-cols-4 gap-3 p-4">
                <div v-for="i in 11" :key="i" class="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" :style="{animationDelay: i * 0.12 + 's'}"></div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                11 Puntos de Combustible
              </h3>
              <p class="text-gray-600 text-sm">Distribución estratégica de combustible de aviación en ubicaciones clave</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-4">Nuestra Historia</span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Impulsando el desarrollo de México</h2>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              Grupo Mundo Maya es una entidad paraestatal mexicana establecida el 13 de abril de 2022, cuya misión es administrar infraestructura estratégica nacional bajo dirección estatal.
            </p>
            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              Contribuimos activamente al bienestar social y desarrollo económico del país a través de la gestión eficiente de aeropuertos, hoteles y servicios de combustible.
            </p>
            <router-link to="/nosotros" class="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors">
              Conocer Nuestra Historia
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </router-link>
          </div>

          <div class="bg-gradient-to-br from-sky-900 to-slate-900 rounded-3xl p-8 text-white">
            <h3 class="text-xl font-bold mb-8 flex items-center">
              <svg class="w-6 h-6 text-amber-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              Línea del Tiempo
            </h3>
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="w-3 h-3 bg-amber-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <div class="text-amber-400 text-sm font-medium">10 Febrero 2022</div>
                  <div class="font-semibold">Anuncio de Creación</div>
                  <div class="text-sky-200 text-sm">El Presidente anuncia la creación de la entidad</div>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-3 h-3 bg-sky-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <div class="text-sky-400 text-sm font-medium">13 Abril 2022</div>
                  <div class="font-semibold">Constitución Oficial</div>
                  <div class="text-sky-200 text-sm">Publicación en el Diario Oficial de la Federación</div>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-3 h-3 bg-emerald-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <div class="text-emerald-400 text-sm font-medium">2022-2024</div>
                  <div class="font-semibold">Expansión y Consolidación</div>
                  <div class="text-sky-200 text-sm">Integración de aeropuertos y servicios turísticos</div>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-3 h-3 bg-purple-400 rounded-full mt-2 mr-4 animate-pulse flex-shrink-0"></div>
                <div>
                  <div class="text-purple-400 text-sm font-medium">2025</div>
                  <div class="font-semibold">Crecimiento Continuo</div>
                  <div class="text-sky-200 text-sm">12 aeropuertos, 6 hoteles, 11 puntos de combustible</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-sky-900 to-slate-900 relative overflow-hidden">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>

      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">¿Tienes alguna pregunta?</h2>
        <p class="text-xl text-sky-200 mb-8">Estamos aquí para ayudarte con información sobre nuestros servicios y operaciones.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contacto" class="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold transition-all hover:-translate-y-1 hover:shadow-xl">
            Enviar Mensaje
          </router-link>
          <a href="tel:+555966890113" class="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-xl font-semibold transition-all backdrop-blur flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            +55 5966 890113
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
