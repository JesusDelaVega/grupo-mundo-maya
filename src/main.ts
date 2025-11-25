import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

import HomePage from './views/HomePage.vue'
import NosotrosPage from './views/NosotrosPage.vue'
import ServiciosPage from './views/ServiciosPage.vue'
import NoticiasPage from './views/NoticiasPage.vue'
import ContactoPage from './views/ContactoPage.vue'
import TransparenciaPage from './views/TransparenciaPage.vue'
import NormatecaPage from './views/NormatecaPage.vue'
import InformacionPublicaPage from './views/InformacionPublicaPage.vue'
import OfertaLaboralPage from './views/OfertaLaboralPage.vue'
import ProteccionDatosPage from './views/ProteccionDatosPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/nosotros', component: NosotrosPage },
  { path: '/servicios', component: ServiciosPage },
  { path: '/noticias', component: NoticiasPage },
  { path: '/contacto', component: ContactoPage },
  { path: '/transparencia', component: TransparenciaPage },
  { path: '/normateca', component: NormatecaPage },
  { path: '/informacion-publica', component: InformacionPublicaPage },
  { path: '/oferta-laboral', component: OfertaLaboralPage },
  { path: '/proteccion-datos', component: ProteccionDatosPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  }
})

createApp(App).use(router).mount('#app')
