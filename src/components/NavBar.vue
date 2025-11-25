<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const isDropdownOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

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
      { name: 'Normateca', path: '/transparencia' },
      { name: 'Información Pública', path: '/transparencia' },
      { name: 'Oferta Laboral', path: '/contacto' }
    ]
  },
  { name: 'Transparencia', path: '/transparencia' },
  { name: 'Protección de Datos', path: '/transparencia#privacidad' }
]
</script>

<template>
  <header :class="['fixed top-0 left-0 right-0 z-50 transition-all duration-300', isScrolled ? 'bg-white shadow-lg' : 'bg-gradient-to-r from-sky-900 to-slate-900']">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">

        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-3">
          <div :class="['w-10 h-10 rounded-lg flex items-center justify-center', isScrolled ? 'bg-sky-600' : 'bg-white/20']">
            <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </div>
          <div class="hidden sm:block">
            <div :class="['font-bold text-lg', isScrolled ? 'text-gray-900' : 'text-white']">Grupo Mundo Maya</div>
            <div :class="['text-xs', isScrolled ? 'text-sky-600' : 'text-sky-200']">Unimos el cielo y la tierra</div>
          </div>
        </router-link>

        <!-- Desktop Nav -->
        <nav class="hidden lg:flex items-center space-x-1">
          <template v-for="item in navItems" :key="item.name">
            <!-- Dropdown Item -->
            <div v-if="item.dropdown" class="relative" @mouseenter="isDropdownOpen = true" @mouseleave="isDropdownOpen = false">
              <button :class="['px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1',
                isScrolled ? 'text-gray-600 hover:text-sky-600 hover:bg-sky-50' : 'text-white/90 hover:text-white hover:bg-white/10']">
                {{ item.name }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div v-show="isDropdownOpen" class="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                <router-link v-for="subItem in item.items" :key="subItem.name" :to="subItem.path"
                  class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors">
                  {{ subItem.name }}
                </router-link>
              </div>
            </div>
            <!-- Regular Item -->
            <router-link v-else-if="item.path" :to="item.path"
              :class="['px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                isScrolled ? 'text-gray-600 hover:text-sky-600 hover:bg-sky-50' : 'text-white/90 hover:text-white hover:bg-white/10']">
              {{ item.name }}
            </router-link>
          </template>
          <router-link to="/contacto"
            :class="['ml-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all',
              isScrolled ? 'bg-sky-600 text-white hover:bg-sky-700' : 'bg-amber-500 text-white hover:bg-amber-600']">
            Contacto
          </router-link>
        </nav>

        <!-- Mobile Menu Button -->
        <button @click="isMenuOpen = !isMenuOpen" class="lg:hidden p-2 rounded-lg" :class="isScrolled ? 'text-gray-900' : 'text-white'">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path v-if="!isMenuOpen" d="M4 6h16M4 12h16M4 18h16"/>
            <path v-else d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="lg:hidden pb-4">
        <div class="bg-white rounded-xl shadow-lg p-4 space-y-1">
          <router-link to="/" @click="isMenuOpen = false" class="block px-4 py-3 rounded-lg text-gray-700 hover:bg-sky-50 hover:text-sky-600 font-medium">
            Inicio
          </router-link>
          <template v-for="item in navItems" :key="item.name">
            <template v-if="item.dropdown">
              <div class="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide">{{ item.name }}</div>
              <router-link v-for="subItem in item.items" :key="subItem.name" :to="subItem.path" @click="isMenuOpen = false"
                class="block px-6 py-2.5 rounded-lg text-gray-600 hover:bg-sky-50 hover:text-sky-600 text-sm">
                {{ subItem.name }}
              </router-link>
            </template>
            <router-link v-else-if="item.path" :to="item.path" @click="isMenuOpen = false"
              class="block px-4 py-3 rounded-lg text-gray-700 hover:bg-sky-50 hover:text-sky-600 font-medium">
              {{ item.name }}
            </router-link>
          </template>
          <router-link to="/contacto" @click="isMenuOpen = false" class="block w-full text-center px-4 py-3 bg-sky-600 text-white rounded-lg font-semibold mt-4">
            Contacto
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>
