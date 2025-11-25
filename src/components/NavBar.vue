<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header :class="['fixed top-0 left-0 right-0 z-50 transition-all duration-300', isScrolled ? 'bg-white shadow-md' : 'bg-sky-900']">
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
          <router-link v-for="item in ['Inicio', 'Nosotros', 'Servicios', 'Noticias', 'Transparencia', 'Contacto']"
            :key="item"
            :to="item === 'Inicio' ? '/' : '/' + item.toLowerCase()"
            :class="['px-4 py-2 rounded-lg text-sm font-medium transition-colors',
              isScrolled ? 'text-gray-600 hover:text-sky-600 hover:bg-sky-50' : 'text-white/90 hover:text-white hover:bg-white/10']">
            {{ item }}
          </router-link>
          <a href="tel:+555966890113"
            :class="['ml-4 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center space-x-2',
              isScrolled ? 'bg-sky-600 text-white hover:bg-sky-700' : 'bg-white text-sky-700 hover:bg-sky-50']">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>Contactar</span>
          </a>
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
        <div class="bg-white rounded-xl shadow-lg p-4 space-y-2">
          <router-link v-for="item in ['Inicio', 'Nosotros', 'Servicios', 'Noticias', 'Transparencia', 'Contacto']"
            :key="item"
            :to="item === 'Inicio' ? '/' : '/' + item.toLowerCase()"
            @click="isMenuOpen = false"
            class="block px-4 py-3 rounded-lg text-gray-700 hover:bg-sky-50 hover:text-sky-600 font-medium">
            {{ item }}
          </router-link>
          <a href="tel:+555966890113" class="block w-full text-center px-4 py-3 bg-sky-600 text-white rounded-lg font-semibold mt-4">
            Llamar Ahora
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
