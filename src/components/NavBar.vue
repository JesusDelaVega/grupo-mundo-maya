<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const isDropdownOpen = ref(false)
const isMobileDropdownOpen = ref(false)
const isSearchOpen = ref(false)
const searchQuery = ref('')
const searchInputRef = ref<HTMLInputElement | null>(null)

// Contenido buscable del sitio
const searchableContent = [
  { title: 'Inicio', path: '/', description: 'Página principal de Grupo Mundo Maya', keywords: 'inicio home principal' },
  { title: 'Nosotros', path: '/nosotros', description: 'Conoce nuestra misión, visión y valores', keywords: 'misión visión valores quiénes somos about' },
  { title: 'Servicios', path: '/servicios', description: 'Aeropuertos, turismo, combustibles y más', keywords: 'aeropuertos AIFA turismo combustibles servicios' },
  { title: 'Noticias', path: '/noticias', description: 'Últimas noticias y comunicados', keywords: 'noticias comunicados prensa news' },
  { title: 'Contacto', path: '/contacto', description: 'Contáctanos para más información', keywords: 'contacto email teléfono dirección contact' },
  { title: 'Normateca', path: '/normateca', description: 'Normativas y documentos legales', keywords: 'normas leyes regulaciones documentos legales' },
  { title: 'Información Pública', path: '/informacion-publica', description: 'Información de transparencia pública', keywords: 'información pública transparencia datos' },
  { title: 'Oferta Laboral', path: '/oferta-laboral', description: 'Oportunidades de trabajo', keywords: 'empleo trabajo vacantes oferta laboral jobs' },
  { title: 'Estados Financieros', path: '/estados-financieros', description: 'Reportes financieros', keywords: 'finanzas estados financieros reportes contabilidad' },
  { title: 'Transparencia', path: '/transparencia', description: 'Portal de transparencia', keywords: 'transparencia gobierno abierto' },
  { title: 'Protección de Datos', path: '/proteccion-datos', description: 'Políticas de protección de datos personales', keywords: 'privacidad datos personales LFPDPPP protección' },
  { title: 'Aeropuerto AIFA', path: '/servicios', description: 'Aeropuerto Internacional Felipe Ángeles', keywords: 'AIFA aeropuerto Felipe Ángeles Santa Lucía' },
  { title: 'Tren Maya', path: '/servicios', description: 'Servicio de transporte ferroviario', keywords: 'tren maya ferrocarril transporte' },
  { title: 'Olmeca Maya Mexica', path: '/servicios', description: 'Servicios de combustibles', keywords: 'OMM combustibles gasolina diésel' },
]

const searchResults = computed(() => {
  if (!searchQuery.value.trim()) return []
  const query = searchQuery.value.toLowerCase().trim()
  return searchableContent.filter(item =>
    item.title.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes(query) ||
    item.keywords.toLowerCase().includes(query)
  ).slice(0, 6) // Máximo 6 resultados
})

const openSearch = () => {
  isSearchOpen.value = true
  document.body.style.overflow = 'hidden'
  setTimeout(() => {
    searchInputRef.value?.focus()
  }, 100)
}

const closeSearch = () => {
  isSearchOpen.value = false
  searchQuery.value = ''
  document.body.style.overflow = ''
}

const navigateToResult = (path: string) => {
  closeSearch()
  router.push(path)
}

// Cerrar búsqueda con Escape
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isSearchOpen.value) {
    closeSearch()
  }
  // Abrir búsqueda con Ctrl+K o Cmd+K
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault()
    if (isSearchOpen.value) {
      closeSearch()
    } else {
      openSearch()
    }
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

// Cerrar menú móvil cuando cambia el tamaño de ventana a desktop
const handleResize = () => {
  if (window.innerWidth >= 1024) {
    isMenuOpen.value = false
  }
}

// Bloquear scroll cuando el menú móvil está abierto
watch(isMenuOpen, (open) => {
  if (open) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
    isMobileDropdownOpen.value = false
  }
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})

interface NavItem {
  name: string
  path?: string
  dropdown?: boolean
  items?: { name: string; path: string }[]
}

const navItems: NavItem[] = [
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Noticias', path: '/noticias' },
  {
    name: 'Información Relevante',
    dropdown: true,
    items: [
      { name: 'Normateca', path: '/normateca' },
      { name: 'Información Pública', path: '/informacion-publica' },
      { name: 'Oferta Laboral', path: '/oferta-laboral' },
      { name: 'Estados Financieros', path: '/estados-financieros' }
    ]
  },
  { name: 'Transparencia', path: '/transparencia' },
  { name: 'Protección de Datos', path: '/proteccion-datos' }
]

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <!-- NavBar Estilo Maya Mexicano -->
  <header :class="['fixed top-0 left-0 right-0 z-50 transition-all duration-500',
    isScrolled
      ? 'bg-white shadow-xl'
      : 'bg-gradient-to-r from-sky-900 via-sky-800 to-slate-900']">

    <!-- Borde decorativo Maya superior -->
    <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">

        <!-- Logo -->
        <router-link to="/" class="flex items-center relative z-50 group">
          <img
            v-if="isScrolled"
            src="https://grupomundomaya.com/assets/img/2024sedenagafsacomm.png"
            alt="Grupo Mundo Maya"
            class="h-10 sm:h-12 object-contain transition-all duration-300 group-hover:scale-105"
          />
          <img
            v-else
            src="https://grupomundomaya.com/assets/img/2024sedenagafsacomm.png"
            alt="Grupo Mundo Maya"
            class="h-10 sm:h-12 object-contain transition-all duration-300 group-hover:scale-105"
            style="filter: brightness(0) invert(1);"
          />
        </router-link>

        <!-- Desktop Nav -->
        <nav class="hidden lg:flex items-center gap-1">
          <!-- Nav Items -->
          <template v-for="item in navItems" :key="item.name">
            <!-- Dropdown Item -->
            <div v-if="item.dropdown" class="relative" @mouseenter="isDropdownOpen = true" @mouseleave="isDropdownOpen = false">
              <button :class="['px-4 py-2 text-sm font-medium transition-all duration-300 flex items-center gap-1.5 rounded-lg border border-transparent',
                isScrolled
                  ? 'text-gray-700 hover:text-amber-600 hover:border-amber-500/30 hover:bg-amber-50'
                  : 'text-white/80 hover:text-amber-300 hover:border-amber-400/30 hover:bg-amber-400/10',
                isDropdownOpen && (isScrolled ? 'text-amber-600 border-amber-500/30 bg-amber-50' : 'text-amber-300 border-amber-400/30 bg-amber-400/10')]">
                {{ item.name }}
                <svg :class="['w-4 h-4 transition-transform duration-300', isDropdownOpen ? 'rotate-180' : '']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <!-- Dropdown Menu Maya -->
              <Transition
                enter-active-class="transition duration-300 ease-out"
                enter-from-class="opacity-0 scale-95 -translate-y-2"
                enter-to-class="opacity-100 scale-100 translate-y-0"
                leave-active-class="transition duration-200 ease-in"
                leave-from-class="opacity-100 scale-100 translate-y-0"
                leave-to-class="opacity-0 scale-95 -translate-y-2"
              >
                <div v-show="isDropdownOpen" class="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 rounded-xl shadow-2xl py-2 z-50 overflow-hidden"
                  :class="isScrolled ? 'bg-white border border-gray-200' : 'bg-gradient-to-br from-sky-900 to-slate-900 border border-sky-700/50'">
                  <!-- Borde superior dorado -->
                  <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                  <!-- Flecha -->
                  <div :class="['absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 border-l border-t',
                    isScrolled ? 'bg-white border-gray-200' : 'bg-sky-900 border-sky-700/50']"></div>
                  <div class="relative">
                    <router-link
                      v-for="subItem in item.items"
                      :key="subItem.name"
                      :to="subItem.path"
                      :class="['flex items-center gap-3 px-4 py-3 text-sm transition-all duration-200 group',
                        isScrolled
                          ? 'text-gray-600 hover:text-sky-600 hover:bg-sky-50'
                          : 'text-white/80 hover:text-amber-300 hover:bg-white/10']"
                    >
                      <div :class="['w-2 h-2 transition-colors rotate-45',
                        isScrolled ? 'bg-sky-300 group-hover:bg-sky-500' : 'bg-amber-400/50 group-hover:bg-amber-400']"></div>
                      <span class="font-medium">{{ subItem.name }}</span>
                    </router-link>
                  </div>
                </div>
              </Transition>
            </div>
            <!-- Regular Item -->
            <router-link v-else-if="item.path" :to="item.path"
              :class="['px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg border border-transparent',
                isScrolled
                  ? 'text-gray-700 hover:text-amber-600 hover:border-amber-500/30 hover:bg-amber-50'
                  : 'text-white/80 hover:text-amber-300 hover:border-amber-400/30 hover:bg-amber-400/10']">
              {{ item.name }}
            </router-link>
          </template>

          <!-- Separador Maya -->
          <div :class="['w-px h-6 mx-2', isScrolled ? 'bg-gradient-to-b from-transparent via-amber-500/40 to-transparent' : 'bg-gradient-to-b from-transparent via-amber-400/40 to-transparent']"></div>

          <!-- Botón de Búsqueda -->
          <button
            @click="openSearch"
            :class="['p-2.5 rounded-lg transition-all duration-300 border border-transparent',
              isScrolled
                ? 'text-gray-700 hover:text-amber-600 hover:bg-amber-50 hover:border-amber-500/30'
                : 'text-white/80 hover:text-amber-300 hover:bg-amber-400/10 hover:border-amber-400/30']"
            title="Buscar (Ctrl+K)"
            aria-label="Buscar"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </button>

          <!-- Botón Contacto Maya -->
          <router-link to="/contacto"
            class="ml-1 px-5 py-2.5 text-sm font-semibold transition-all duration-300 relative overflow-hidden group bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 hover:from-amber-400 hover:to-amber-500 rounded-lg shadow-lg shadow-amber-500/25 hover:shadow-amber-400/40 hover:-translate-y-0.5">
            <span class="relative z-10 flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Contacto
            </span>
          </router-link>
        </nav>

        <!-- Mobile Buttons -->
        <div class="flex items-center gap-1 lg:hidden">
          <!-- Botón Búsqueda Móvil -->
          <button
            @click="openSearch"
            class="p-2 rounded-lg transition-all duration-200 relative z-50"
            :class="isMenuOpen || isScrolled ? 'text-gray-900' : 'text-white'"
            aria-label="Buscar"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </button>

          <!-- Mobile Menu Button -->
          <button
            @click="isMenuOpen = !isMenuOpen"
            class="p-2 rounded-lg transition-all duration-200 relative z-50"
            :class="isMenuOpen || isScrolled ? 'text-gray-900' : 'text-white'"
            aria-label="Menú de navegación"
            :aria-expanded="isMenuOpen"
          >
            <div class="w-6 h-6 relative">
              <!-- Líneas animadas del hamburger -->
              <span :class="['absolute left-0 h-0.5 w-6 bg-current transform transition-all duration-300',
                isMenuOpen ? 'top-3 rotate-45' : 'top-1']"></span>
              <span :class="['absolute left-0 top-3 h-0.5 bg-current transform transition-all duration-300',
                isMenuOpen ? 'w-0 opacity-0' : 'w-6 opacity-100']"></span>
              <span :class="['absolute left-0 h-0.5 w-6 bg-current transform transition-all duration-300',
                isMenuOpen ? 'top-3 -rotate-45' : 'top-5']"></span>
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isMenuOpen" class="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-40" @click="closeMenu"></div>
    </Transition>

    <!-- Mobile Menu Panel -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isMenuOpen" class="lg:hidden absolute top-full left-0 right-0 z-40 px-4 pb-4 pt-2">
        <div class="bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[calc(100vh-100px)] overflow-y-auto">
          <!-- Header del menú móvil -->
          <div class="p-4 border-b border-gray-100 bg-gray-50">
            <img
              src="https://grupomundomaya.com/assets/img/2024sedenagafsacomm.png"
              alt="Grupo Mundo Maya"
              class="h-10 object-contain"
            />
          </div>

          <div class="p-4 space-y-1">
            <!-- Inicio -->
            <router-link
              to="/"
              @click="closeMenu"
              class="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-sky-50 hover:text-sky-600 font-medium transition-all duration-200"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
              Inicio
            </router-link>

            <template v-for="item in navItems" :key="item.name">
              <!-- Dropdown en móvil -->
              <template v-if="item.dropdown">
                <button
                  @click="isMobileDropdownOpen = !isMobileDropdownOpen"
                  class="flex items-center justify-between w-full px-4 py-3 rounded-xl text-gray-700 hover:bg-sky-50 hover:text-sky-600 font-medium transition-all duration-200"
                >
                  <div class="flex items-center gap-3">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                    </svg>
                    {{ item.name }}
                  </div>
                  <svg :class="['w-5 h-5 transition-transform duration-300', isMobileDropdownOpen ? 'rotate-180' : '']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                <!-- Subitems con animación -->
                <Transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="opacity-0 -translate-y-2"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition duration-150 ease-in"
                  leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 -translate-y-2"
                >
                  <div v-show="isMobileDropdownOpen" class="ml-4 pl-4 border-l-2 border-sky-100 space-y-1 mt-1">
                    <router-link
                      v-for="subItem in item.items"
                      :key="subItem.name"
                      :to="subItem.path"
                      @click="closeMenu"
                      class="flex items-center gap-2 px-4 py-2.5 rounded-lg text-gray-600 hover:bg-sky-50 hover:text-sky-600 text-sm transition-all duration-200"
                    >
                      <svg class="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                      </svg>
                      {{ subItem.name }}
                    </router-link>
                  </div>
                </Transition>
              </template>

              <!-- Item regular -->
              <router-link
                v-else-if="item.path"
                :to="item.path"
                @click="closeMenu"
                class="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-sky-50 hover:text-sky-600 font-medium transition-all duration-200"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                {{ item.name }}
              </router-link>
            </template>

            <!-- Botón Contacto -->
            <div class="pt-4 mt-4 border-t border-gray-100">
              <router-link
                to="/contacto"
                @click="closeMenu"
                class="flex items-center justify-center gap-2 w-full px-4 py-4 bg-gradient-to-r from-sky-600 to-sky-700 text-white rounded-xl font-semibold hover:from-sky-700 hover:to-sky-800 transition-all duration-300 shadow-lg shadow-sky-600/30"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Contacto
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </header>

  <!-- Modal de Búsqueda -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isSearchOpen" class="fixed inset-0 z-[100] flex items-start justify-center pt-20 sm:pt-32 px-4">
        <!-- Overlay -->
        <div class="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" @click="closeSearch"></div>

        <!-- Search Container -->
        <Transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0 scale-95 -translate-y-4"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 -translate-y-4"
        >
          <div v-if="isSearchOpen" class="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
            <!-- Search Header -->
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </div>
              <input
                ref="searchInputRef"
                v-model="searchQuery"
                type="text"
                placeholder="Buscar en el sitio..."
                class="w-full pl-14 pr-14 py-5 text-lg text-gray-900 placeholder-gray-400 border-0 focus:ring-0 focus:outline-none"
              />
              <!-- Keyboard shortcut hint -->
              <div class="absolute inset-y-0 right-4 flex items-center gap-2">
                <span class="hidden sm:flex items-center text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                  ESC
                </span>
                <button @click="closeSearch" class="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Search Results -->
            <div v-if="searchQuery.trim()" class="border-t border-gray-100">
              <!-- Results Found -->
              <div v-if="searchResults.length > 0" class="py-3">
                <p class="px-5 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Resultados ({{ searchResults.length }})
                </p>
                <button
                  v-for="result in searchResults"
                  :key="result.title"
                  @click="navigateToResult(result.path)"
                  class="w-full px-5 py-3 flex items-start gap-4 hover:bg-sky-50 transition-colors group text-left"
                >
                  <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-sky-100 to-sky-200 rounded-lg flex items-center justify-center group-hover:from-sky-500 group-hover:to-sky-600 transition-all duration-300">
                    <svg class="w-5 h-5 text-sky-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-semibold text-gray-900 group-hover:text-sky-600 transition-colors">
                      {{ result.title }}
                    </p>
                    <p class="text-sm text-gray-500 truncate">
                      {{ result.description }}
                    </p>
                  </div>
                  <svg class="w-5 h-5 text-gray-300 group-hover:text-sky-500 transition-colors flex-shrink-0 mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>

              <!-- No Results -->
              <div v-else class="py-12 text-center">
                <svg class="w-12 h-12 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <p class="text-gray-500 font-medium">No se encontraron resultados</p>
                <p class="text-sm text-gray-400 mt-1">Intenta con otras palabras clave</p>
              </div>
            </div>

            <!-- Quick Links (when no search query) -->
            <div v-else class="border-t border-gray-100 py-4">
              <p class="px-5 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Enlaces Rápidos
              </p>
              <div class="grid grid-cols-2 gap-2 px-4">
                <button
                  v-for="link in [
                    { title: 'Servicios', path: '/servicios', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
                    { title: 'Nosotros', path: '/nosotros', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z' },
                    { title: 'Noticias', path: '/noticias', icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' },
                    { title: 'Contacto', path: '/contacto', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
                  ]"
                  :key="link.title"
                  @click="navigateToResult(link.path)"
                  class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-sky-50 transition-colors group text-left"
                >
                  <div class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-sky-100 transition-colors">
                    <svg class="w-4 h-4 text-gray-500 group-hover:text-sky-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="link.icon"/>
                    </svg>
                  </div>
                  <span class="text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors">
                    {{ link.title }}
                  </span>
                </button>
              </div>
            </div>

            <!-- Footer hint -->
            <div class="border-t border-gray-100 px-5 py-3 bg-gray-50 flex items-center justify-between text-xs text-gray-400">
              <div class="flex items-center gap-4">
                <span class="hidden sm:flex items-center gap-1">
                  <kbd class="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-gray-500">↵</kbd>
                  para seleccionar
                </span>
                <span class="hidden sm:flex items-center gap-1">
                  <kbd class="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-gray-500">esc</kbd>
                  para cerrar
                </span>
              </div>
              <span class="flex items-center gap-1">
                <kbd class="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-gray-500">⌘</kbd>
                <kbd class="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-gray-500">K</kbd>
              </span>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
