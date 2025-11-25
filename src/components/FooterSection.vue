<script setup lang="ts">
const currentYear = new Date().getFullYear()

const quickLinks = [
  { label: 'Inicio', route: '/' },
  { label: 'Nosotros', route: '/nosotros' },
  { label: 'Servicios', route: '/servicios' },
  { label: 'Noticias', route: '/noticias' },
  { label: 'Contacto', route: '/contacto' },
]

const services = [
  { label: 'Servicios Turísticos', route: '/servicios#turismo' },
  { label: 'Aeropuertos', route: '/servicios#aeropuertos' },
  { label: 'Combustibles', route: '/servicios#combustibles' },
]

const legal = [
  { label: 'Transparencia', route: '/transparencia' },
  { label: 'Aviso de Privacidad', route: '/transparencia#privacidad' },
  { label: 'Normateca', route: '/transparencia#normateca' },
]

const socialLinks = [
  { icon: 'pi pi-facebook', url: '#', label: 'Facebook' },
  { icon: 'pi pi-twitter', url: '#', label: 'Twitter' },
  { icon: 'pi pi-instagram', url: '#', label: 'Instagram' },
  { icon: 'pi pi-youtube', url: '#', label: 'YouTube' },
]
</script>

<template>
  <footer class="bg-gradient-to-br from-sky-900 via-sky-800 to-slate-900 text-white">
    <!-- Main Footer -->
    <div class="container mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Brand Column -->
        <div class="lg:col-span-1">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <i class="pi pi-globe text-2xl text-amber-400"></i>
            </div>
            <div>
              <h3 class="font-bold text-lg">Grupo Mundo Maya</h3>
              <p class="text-sky-300 text-sm">Unimos el cielo y la tierra</p>
            </div>
          </div>
          <p class="text-sky-200/80 text-sm leading-relaxed mb-6">
            Entidad paraestatal dedicada a administrar, controlar y operar bienes nacionales para contribuir al bienestar social y desarrollo económico de México.
          </p>
          <!-- Social Links -->
          <div class="flex gap-3">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.url"
              :aria-label="social.label"
              class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-all duration-300 hover:scale-110"
            >
              <i :class="[social.icon, 'text-lg']"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-semibold text-lg mb-6 flex items-center gap-2">
            <span class="w-8 h-0.5 bg-amber-400 rounded-full"></span>
            Enlaces Rápidos
          </h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.route">
              <router-link
                :to="link.route"
                class="text-sky-200/80 hover:text-amber-400 transition-colors duration-200 flex items-center gap-2 group"
              >
                <i class="pi pi-chevron-right text-xs text-amber-400/50 group-hover:text-amber-400 transition-colors"></i>
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="font-semibold text-lg mb-6 flex items-center gap-2">
            <span class="w-8 h-0.5 bg-amber-400 rounded-full"></span>
            Nuestros Servicios
          </h4>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service.route">
              <router-link
                :to="service.route"
                class="text-sky-200/80 hover:text-amber-400 transition-colors duration-200 flex items-center gap-2 group"
              >
                <i class="pi pi-chevron-right text-xs text-amber-400/50 group-hover:text-amber-400 transition-colors"></i>
                {{ service.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact & Legal -->
        <div>
          <h4 class="font-semibold text-lg mb-6 flex items-center gap-2">
            <span class="w-8 h-0.5 bg-amber-400 rounded-full"></span>
            Contacto
          </h4>
          <div class="space-y-4 mb-8">
            <a href="tel:+525555555555" class="flex items-center gap-3 text-sky-200/80 hover:text-amber-400 transition-colors">
              <div class="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                <i class="pi pi-phone text-amber-400"></i>
              </div>
              <span>+52 55 5555 5555</span>
            </a>
            <a href="mailto:contacto@grupomundomaya.com" class="flex items-center gap-3 text-sky-200/80 hover:text-amber-400 transition-colors">
              <div class="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                <i class="pi pi-envelope text-amber-400"></i>
              </div>
              <span>contacto@grupomundomaya.com</span>
            </a>
            <div class="flex items-start gap-3 text-sky-200/80">
              <div class="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                <i class="pi pi-map-marker text-amber-400"></i>
              </div>
              <span>Ciudad de México, México</span>
            </div>
          </div>

          <h4 class="font-semibold text-sm mb-3 text-sky-300">Legal</h4>
          <ul class="space-y-2">
            <li v-for="item in legal" :key="item.route">
              <router-link
                :to="item.route"
                class="text-sky-200/60 text-sm hover:text-amber-400 transition-colors duration-200"
              >
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-white/10">
      <div class="container mx-auto px-6 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-sky-200/60 text-sm text-center md:text-left">
            &copy; {{ currentYear }} Grupo Mundo Maya. Todos los derechos reservados.
          </p>
          <p class="text-sky-200/40 text-xs text-center md:text-right">
            Gobierno de México
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
