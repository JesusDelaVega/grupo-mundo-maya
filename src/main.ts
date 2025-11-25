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
import EstadosFinancierosPage from './views/EstadosFinancierosPage.vue'
import TarifasPage from './views/TarifasPage.vue'
// Aeropuertos
import AeropuertoUruapan from './views/aeropuertos/AeropuertoUruapan.vue'
import AeropuertoPuebla from './views/aeropuertos/AeropuertoPuebla.vue'
import AeropuertoNogales from './views/aeropuertos/AeropuertoNogales.vue'
import AeropuertoCdVictoria from './views/aeropuertos/AeropuertoCdVictoria.vue'
import AeropuertoNuevoLaredo from './views/aeropuertos/AeropuertoNuevoLaredo.vue'
import AeropuertoTamuin from './views/aeropuertos/AeropuertoTamuin.vue'
import AeropuertoDelNorte from './views/aeropuertos/AeropuertoDelNorte.vue'
import AeropuertoIxtepec from './views/aeropuertos/AeropuertoIxtepec.vue'
import AeropuertoPalenque from './views/aeropuertos/AeropuertoPalenque.vue'
import AeropuertoChetumal from './views/aeropuertos/AeropuertoChetumal.vue'
import AeropuertoCampeche from './views/aeropuertos/AeropuertoCampeche.vue'

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
  { path: '/estados-financieros', component: EstadosFinancierosPage },
  { path: '/tarifas', component: TarifasPage },
  // Aeropuertos
  { path: '/aeropuertos/uruapan', component: AeropuertoUruapan },
  { path: '/aeropuertos/puebla', component: AeropuertoPuebla },
  { path: '/aeropuertos/nogales', component: AeropuertoNogales },
  { path: '/aeropuertos/cd-victoria', component: AeropuertoCdVictoria },
  { path: '/aeropuertos/nuevo-laredo', component: AeropuertoNuevoLaredo },
  { path: '/aeropuertos/tamuin', component: AeropuertoTamuin },
  { path: '/aeropuertos/del-norte', component: AeropuertoDelNorte },
  { path: '/aeropuertos/ixtepec', component: AeropuertoIxtepec },
  { path: '/aeropuertos/palenque', component: AeropuertoPalenque },
  { path: '/aeropuertos/chetumal', component: AeropuertoChetumal },
  { path: '/aeropuertos/campeche', component: AeropuertoCampeche },
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
