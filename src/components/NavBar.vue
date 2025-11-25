<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const menuItems = [
  { label: 'Inicio', route: '/', icon: 'pi pi-home' },
  { label: 'Nosotros', route: '/nosotros', icon: 'pi pi-users' },
  { label: 'Servicios', route: '/servicios', icon: 'pi pi-briefcase' },
  { label: 'Noticias', route: '/noticias', icon: 'pi pi-megaphone' },
  { label: 'Transparencia', route: '/transparencia', icon: 'pi pi-shield' },
  { label: 'Contacto', route: '/contacto', icon: 'pi pi-envelope' },
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
      isScrolled ? 'bg-white shadow-elegant py-2' : 'bg-transparent py-4'
    ]"
  >
    <div class="container mx-auto px-6">
      <nav class="flex items-center justify-between">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-3 group">
          <div
            :class="[
              'w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300',
              isScrolled ? 'bg-gradient-to-br from-sky-700 to-sky-500' : 'bg-white/20 backdrop-blur-sm'
            ]"
          >
            <i class="pi pi-globe text-2xl text-white"></i>
          </div>
          <div class="flex flex-col">
            <span
              :class="[
                'font-bold text-lg leading-tight transition-colors duration-300',
                isScrolled ? 'text-sky-900' : 'text-white'
              ]"
            >
              Grupo Mundo Maya
            </span>
            <span
              :class="[
                'text-xs font-medium transition-colors duration-300',
                isScrolled ? 'text-sky-600' : 'text-white/80'
              ]"
            >
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
              'px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300',
              isScrolled
                ? 'text-slate-600 hover:text-sky-600 hover:bg-sky-50'
                : 'text-white/90 hover:text-white hover:bg-white/10'
            ]"
          >
            {{ item.label }}
          </router-link>

          <a
            href="tel:+525555555555"
            :class="[
              'ml-4 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300',
              isScrolled
                ? 'bg-gradient-to-r from-sky-600 to-sky-500 text-white hover:shadow-lg hover:shadow-sky-500/30'
                : 'bg-white text-sky-700 hover:bg-white/90'
            ]"
          >
            <i class="pi pi-phone mr-2"></i>
            Contactar
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          :class="[
            'lg:hidden p-2 rounded-lg transition-colors duration-300',
            isScrolled ? 'text-sky-900 hover:bg-sky-50' : 'text-white hover:bg-white/10'
          ]"
        >
          <i :class="['pi text-xl', isMobileMenuOpen ? 'pi-times' : 'pi-bars']"></i>
        </button>
      </nav>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        leave-active-class="transition-all duration-200 ease-in"
        enter-from-class="opacity-0 -translate-y-4"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div
          v-if="isMobileMenuOpen"
          class="lg:hidden mt-4 p-4 bg-white rounded-2xl shadow-elegant"
        >
          <div class="flex flex-col gap-1">
            <button
              v-for="item in menuItems"
              :key="item.route"
              @click="navigateTo(item.route)"
              class="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:text-sky-600 hover:bg-sky-50 transition-colors duration-200"
            >
              <i :class="[item.icon, 'text-lg']"></i>
              <span class="font-medium">{{ item.label }}</span>
            </button>
          </div>
          <div class="mt-4 pt-4 border-t border-slate-100">
            <a
              href="tel:+525555555555"
              class="flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-r from-sky-600 to-sky-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300"
            >
              <i class="pi pi-phone"></i>
              Llamar Ahora
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>
