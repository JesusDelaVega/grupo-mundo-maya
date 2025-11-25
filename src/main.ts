import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import App from './App.vue'
import './style.css'
import 'primeicons/primeicons.css'

// Vistas
import HomePage from './views/HomePage.vue'
import NosotrosPage from './views/NosotrosPage.vue'
import ServiciosPage from './views/ServiciosPage.vue'
import NoticiasPage from './views/NoticiasPage.vue'
import ContactoPage from './views/ContactoPage.vue'
import TransparenciaPage from './views/TransparenciaPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/nosotros', name: 'nosotros', component: NosotrosPage },
  { path: '/servicios', name: 'servicios', component: ServiciosPage },
  { path: '/noticias', name: 'noticias', component: NoticiasPage },
  { path: '/contacto', name: 'contacto', component: ContactoPage },
  { path: '/transparencia', name: 'transparencia', component: TransparenciaPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.dark-mode',
    }
  }
})

app.use(router)
app.mount('#app')
