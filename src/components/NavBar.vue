<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const isDropdownOpen = ref(false)
const isMobileDropdownOpen = ref(false)

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
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
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
  <header :class="['fixed top-0 left-0 right-0 z-50 transition-all duration-300', isScrolled ? 'bg-white shadow-lg' : 'bg-gradient-to-r from-sky-900 to-slate-900']">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">

        <!-- Logo - Blanco cuando no hay scroll, normal cuando hay scroll -->
        <router-link to="/" class="flex items-center relative z-50">
          <img
            v-if="isScrolled"
            src="https://grupomundomaya.com/assets/img/2024sedenagafsacomm.png"
            alt="Grupo Mundo Maya"
            class="h-10 sm:h-12 object-contain transition-all duration-300"
          />
          <img
            v-else
            src="https://grupomundomaya.com/assets/img/2024sedenagafsacomm.png"
            alt="Grupo Mundo Maya"
            class="h-10 sm:h-12 object-contain transition-all duration-300"
            style="filter: brightness(0) invert(1);"
          />
        </router-link>

        <!-- Desktop Nav -->
        <nav class="hidden lg:flex items-center space-x-1">
          <template v-for="item in navItems" :key="item.name">
            <!-- Dropdown Item -->
            <div v-if="item.dropdown" class="relative" @mouseenter="isDropdownOpen = true" @mouseleave="isDropdownOpen = false">
              <button :class="['px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1',
                isScrolled ? 'text-gray-600 hover:text-sky-600 hover:bg-sky-50' : 'text-white/90 hover:text-white hover:bg-white/10']">
                {{ item.name }}
                <svg :class="['w-4 h-4 transition-transform duration-200', isDropdownOpen ? 'rotate-180' : '']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <!-- Dropdown Menu con animación -->
              <Transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="opacity-0 translate-y-2"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-2"
              >
                <div v-show="isDropdownOpen" class="absolute top-full left-0 mt-2 w-60 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 overflow-hidden">
                  <router-link
                    v-for="subItem in item.items"
                    :key="subItem.name"
                    :to="subItem.path"
                    class="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-all duration-200 group"
                  >
                    <svg class="w-4 h-4 text-sky-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                    <span>{{ subItem.name }}</span>
                  </router-link>
                </div>
              </Transition>
            </div>
            <!-- Regular Item -->
            <router-link v-else-if="item.path" :to="item.path"
              :class="['px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group',
                isScrolled ? 'text-gray-600 hover:text-sky-600' : 'text-white/90 hover:text-white']">
              {{ item.name }}
              <span :class="['absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-current transition-all duration-300 w-0 group-hover:w-3/4', isScrolled ? 'bg-sky-600' : 'bg-white']"></span>
            </router-link>
          </template>
          <router-link to="/contacto"
            :class="['ml-3 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg',
              isScrolled ? 'bg-sky-600 text-white hover:bg-sky-700 shadow-sky-600/30' : 'bg-amber-500 text-white hover:bg-amber-600 shadow-amber-500/30']">
            Contacto
          </router-link>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="lg:hidden p-2 rounded-lg transition-all duration-200 relative z-50"
          :class="isScrolled || isMenuOpen ? 'text-gray-900' : 'text-white'"
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
</template>
