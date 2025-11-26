<template>
  <div class="pt-20">
    <!-- Hero -->
    <section class="bg-gradient-to-br from-sky-900 to-slate-900 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">Últimas Noticias</h1>
        <p class="text-xl text-sky-100 max-w-3xl">Mantente informado sobre los avances de Grupo Mundo Maya.</p>
      </div>
    </section>

    <!-- Noticia Destacada -->
    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-2 mb-8">
          <span class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          <span class="text-sm font-semibold text-red-600 uppercase tracking-wider">Noticia Destacada</span>
        </div>

        <article class="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-900 to-slate-900 shadow-2xl">
          <div class="grid lg:grid-cols-2 gap-0">
            <!-- Imagen/Visual -->
            <div class="relative h-64 lg:h-auto lg:min-h-[400px] overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-sky-600/90 to-sky-800/90"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <img src="https://grupomundomaya.com/assets/img/Botones/LOGO VECTOR.png" alt="AIFA" class="w-48 md:w-64 object-contain opacity-90" />
              </div>
              <!-- Badge -->
              <div class="absolute top-6 left-6">
                <span class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                  <img src="https://grupomundomaya.com/assets/img/iconavion.png" alt="" class="w-5 h-5" />
                  Aeropuertos
                </span>
              </div>
            </div>

            <!-- Contenido -->
            <div class="p-8 lg:p-12 flex flex-col justify-center">
              <span class="text-sky-300 text-sm font-medium mb-4">25 Noviembre 2024</span>
              <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                AIFA consolida su posición como hub aeroportuario del centro de México
              </h2>
              <p class="text-sky-100 text-lg mb-6 leading-relaxed">
                El Aeropuerto Internacional Felipe Ángeles registra un incremento del 40% en operaciones durante 2024, consolidándose como pieza clave en la conectividad aérea nacional.
              </p>
              <div class="flex items-center gap-4">
                <a href="#" class="inline-flex items-center gap-2 px-6 py-3 bg-white text-sky-900 rounded-xl font-semibold hover:bg-sky-50 transition-colors">
                  Leer más
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Grid de Noticias -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Filtros -->
        <div class="flex flex-wrap items-center gap-3 mb-10">
          <span class="text-gray-500 text-sm font-medium">Filtrar por:</span>
          <button class="px-4 py-2 bg-sky-600 text-white rounded-full text-sm font-medium">Todos</button>
          <button class="px-4 py-2 bg-white text-gray-600 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">Aeropuertos</button>
          <button class="px-4 py-2 bg-white text-gray-600 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">Turismo</button>
          <button class="px-4 py-2 bg-white text-gray-600 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">Institucional</button>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Noticia 1 -->
          <article class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div class="relative h-52 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-sky-500 to-sky-700"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <img src="https://grupomundomaya.com/assets/img/iconavion.png" alt="" class="w-20 h-20 opacity-30" />
              </div>
              <div class="absolute top-4 left-4">
                <span class="px-3 py-1 bg-white/90 text-sky-700 rounded-full text-xs font-semibold">Aeropuertos</span>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-2 text-gray-400 text-sm mb-3">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                20 Nov 2024
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors">
                Tulum inaugura nueva terminal internacional
              </h3>
              <p class="text-gray-600 mb-4 line-clamp-3">
                El Aeropuerto Internacional de Tulum abre su nueva terminal con capacidad para recibir vuelos internacionales directos.
              </p>
              <a href="#" class="inline-flex items-center gap-2 text-sky-600 font-medium hover:text-sky-700 transition-colors">
                Leer más
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </article>

          <!-- Noticia 2 -->
          <article class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div class="relative h-52 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-700"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <img src="https://grupomundomaya.com/assets/img/icono hoteles.png" alt="" class="w-20 h-20 opacity-30" />
              </div>
              <div class="absolute top-4 left-4">
                <span class="px-3 py-1 bg-white/90 text-amber-700 rounded-full text-xs font-semibold">Turismo</span>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-2 text-gray-400 text-sm mb-3">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                18 Nov 2024
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                Hoteles Mundo Maya alcanzan 90% de ocupación
              </h3>
              <p class="text-gray-600 mb-4 line-clamp-3">
                Los hoteles temáticos en zonas arqueológicas registran niveles récord de ocupación durante la temporada alta.
              </p>
              <a href="#" class="inline-flex items-center gap-2 text-amber-600 font-medium hover:text-amber-700 transition-colors">
                Leer más
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </article>

          <!-- Noticia 3 -->
          <article class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div class="relative h-52 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-700"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <img src="https://grupomundomaya.com/assets/img/iconcombustibles.png" alt="" class="w-20 h-20 opacity-30" />
              </div>
              <div class="absolute top-4 left-4">
                <span class="px-3 py-1 bg-white/90 text-emerald-700 rounded-full text-xs font-semibold">Combustibles</span>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-2 text-gray-400 text-sm mb-3">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                15 Nov 2024
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                Expansión de red de suministro de combustible
              </h3>
              <p class="text-gray-600 mb-4 line-clamp-3">
                Se inauguran 2 nuevas estaciones de suministro de turbosina en aeropuertos del sureste mexicano.
              </p>
              <a href="#" class="inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors">
                Leer más
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </article>

          <!-- Noticia 4 -->
          <article class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div class="relative h-52 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <img src="https://grupomundomaya.com/assets/img/icono parques.png" alt="" class="w-20 h-20 opacity-30" />
              </div>
              <div class="absolute top-4 left-4">
                <span class="px-3 py-1 bg-white/90 text-purple-700 rounded-full text-xs font-semibold">Cultura</span>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-2 text-gray-400 text-sm mb-3">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                12 Nov 2024
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                Museo del Mamut recibe 100,000 visitantes
              </h3>
              <p class="text-gray-600 mb-4 line-clamp-3">
                El Museo del Mamut celebra hito histórico de visitantes desde su inauguración en el AIFA.
              </p>
              <a href="#" class="inline-flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700 transition-colors">
                Leer más
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </article>

          <!-- Noticia 5 -->
          <article class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div class="relative h-52 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-rose-500 to-rose-700"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <img src="https://grupomundomaya.com/assets/img/Botones/trnmy.png" alt="" class="w-32 opacity-30" />
              </div>
              <div class="absolute top-4 left-4">
                <span class="px-3 py-1 bg-white/90 text-rose-700 rounded-full text-xs font-semibold">Tren Maya</span>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-2 text-gray-400 text-sm mb-3">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                10 Nov 2024
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors">
                Tren Maya conecta 5 estados del sureste
              </h3>
              <p class="text-gray-600 mb-4 line-clamp-3">
                La ruta completa del Tren Maya ya conecta Quintana Roo, Yucatán, Campeche, Chiapas y Tabasco.
              </p>
              <a href="#" class="inline-flex items-center gap-2 text-rose-600 font-medium hover:text-rose-700 transition-colors">
                Leer más
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </article>

          <!-- Noticia 6 -->
          <article class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div class="relative h-52 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-slate-600 to-slate-800"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <svg class="w-20 h-20 text-white opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <div class="absolute top-4 left-4">
                <span class="px-3 py-1 bg-white/90 text-slate-700 rounded-full text-xs font-semibold">Institucional</span>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-2 text-gray-400 text-sm mb-3">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                8 Nov 2024
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-slate-600 transition-colors">
                GMM refuerza compromiso con transparencia
              </h3>
              <p class="text-gray-600 mb-4 line-clamp-3">
                Grupo Mundo Maya actualiza portal de transparencia con información detallada de operaciones y finanzas.
              </p>
              <a href="#" class="inline-flex items-center gap-2 text-slate-600 font-medium hover:text-slate-700 transition-colors">
                Leer más
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </article>
        </div>

        <!-- Paginación -->
        <div class="flex items-center justify-center gap-2 mt-12">
          <button class="p-2 rounded-lg border border-gray-200 text-gray-400 hover:border-gray-300 hover:text-gray-600 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button class="w-10 h-10 rounded-lg bg-sky-600 text-white font-medium">1</button>
          <button class="w-10 h-10 rounded-lg border border-gray-200 text-gray-600 font-medium hover:border-gray-300 transition-colors">2</button>
          <button class="w-10 h-10 rounded-lg border border-gray-200 text-gray-600 font-medium hover:border-gray-300 transition-colors">3</button>
          <span class="px-2 text-gray-400">...</span>
          <button class="w-10 h-10 rounded-lg border border-gray-200 text-gray-600 font-medium hover:border-gray-300 transition-colors">8</button>
          <button class="p-2 rounded-lg border border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-800 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="py-16 bg-gradient-to-br from-sky-900 to-slate-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-2xl flex items-center justify-center">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        </div>
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Suscríbete a nuestro boletín</h2>
        <p class="text-sky-100 mb-8 max-w-2xl mx-auto">Recibe las últimas noticias y actualizaciones de Grupo Mundo Maya directamente en tu correo.</p>
        <form class="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            class="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors"
          />
          <button type="submit" class="px-8 py-4 bg-white text-sky-900 rounded-xl font-semibold hover:bg-sky-50 transition-colors whitespace-nowrap">
            Suscribirse
          </button>
        </form>
      </div>
    </section>
  </div>
</template>
