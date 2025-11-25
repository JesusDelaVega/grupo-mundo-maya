<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const menuItems = [
  { label: 'Inicio', route: '/' },
  { label: 'Nosotros', route: '/nosotros' },
  { label: 'Servicios', route: '/servicios' },
  { label: 'Noticias', route: '/noticias' },
  { label: 'Transparencia', route: '/transparencia' },
  { label: 'Contacto', route: '/contacto' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const navigateTo = (route: string) => {
  router.push(route)
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-sky-900/95 backdrop-blur-sm py-4'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <nav class="flex items-center justify-between">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-3">
          <div
            :class="[
              'w-10 h-10 rounded-lg flex items-center justify-center',
              isScrolled ? 'bg-sky-600' : 'bg-white/20'
            ]"
          >
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <div class="hidden sm:flex flex-col">
            <span :class="['font-bold text-lg leading-tight', isScrolled ? 'text-sky-900' : 'text-white']">
              Grupo Mundo Maya
            </span>
            <span :class="['text-xs', isScrolled ? 'text-sky-600' : 'text-sky-200']">
              Unimos el cielo y la tierra
            </span>
          </div>
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center gap-1">
          <router-link
            v-for="item in menuItems"
            :key="item.route"
            :to="item.route"
            :class="[
              'px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200',
              isScrolled
                ? 'text-slate-600 hover:text-sky-600 hover:bg-sky-50'
                : 'text-white/90 hover:text-white hover:bg-white/10'
            ]"
          >
            {{ item.label }}
          </router-link>

          <a
            href="tel:+555966890113"
            :class="[
              'ml-4 px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center gap-2',
              isScrolled
                ? 'bg-sky-600 text-white hover:bg-sky-700'
                : 'bg-white text-sky-700 hover:bg-sky-50'
            ]"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            Contactar
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          :class="[
            'lg:hidden p-2 rounded-lg transition-colors',
            isScrolled ? 'text-sky-900 hover:bg-sky-50' : 'text-white hover:bg-white/10'
          ]"
        >
          <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </nav>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        leave-active-class="transition-all duration-200 ease-in"
        enter-from-class="opacity-0 -translate-y-4"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div
          v-if="isMobileMenuOpen"
          class="lg:hidden mt-4 p-4 bg-white rounded-xl shadow-xl"
        >
          <div class="flex flex-col gap-1">
            <button
              v-for="item in menuItems"
              :key="item.route"
              @click="navigateTo(item.route)"
              class="px-4 py-3 rounded-lg text-left text-slate-700 hover:text-sky-600 hover:bg-sky-50 font-medium transition-colors"
            >
              {{ item.label }}
            </button>
          </div>
          <div class="mt-4 pt-4 border-t border-slate-100">
            <a
              href="tel:+555966890113"
              class="flex items-center justify-center gap-2 w-full py-3 bg-sky-600 text-white rounded-lg font-semibold hover:bg-sky-700 transition-colors"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Llamar Ahora
            </a>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>
