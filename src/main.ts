import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// Solo HomePage se carga de forma síncrona (primera página)
import HomePage from './views/HomePage.vue'

// Lazy loading para el resto de páginas
const NosotrosPage = () => import('./views/NosotrosPage.vue')
const ServiciosPage = () => import('./views/ServiciosPage.vue')
const NoticiasPage = () => import('./views/NoticiasPage.vue')
const ContactoPage = () => import('./views/ContactoPage.vue')
const TransparenciaPage = () => import('./views/TransparenciaPage.vue')
const NormatecaPage = () => import('./views/NormatecaPage.vue')
const InformacionPublicaPage = () => import('./views/InformacionPublicaPage.vue')
const OfertaLaboralPage = () => import('./views/OfertaLaboralPage.vue')
const ProteccionDatosPage = () => import('./views/ProteccionDatosPage.vue')
const EstadosFinancierosPage = () => import('./views/EstadosFinancierosPage.vue')
const TarifasPage = () => import('./views/TarifasPage.vue')
const NotFoundPage = () => import('./views/NotFoundPage.vue')

// Aeropuertos - lazy loading
const AeropuertoUruapan = () => import('./views/aeropuertos/AeropuertoUruapan.vue')
const AeropuertoPuebla = () => import('./views/aeropuertos/AeropuertoPuebla.vue')
const AeropuertoNogales = () => import('./views/aeropuertos/AeropuertoNogales.vue')
const AeropuertoCdVictoria = () => import('./views/aeropuertos/AeropuertoCdVictoria.vue')
const AeropuertoNuevoLaredo = () => import('./views/aeropuertos/AeropuertoNuevoLaredo.vue')
const AeropuertoTamuin = () => import('./views/aeropuertos/AeropuertoTamuin.vue')
const AeropuertoDelNorte = () => import('./views/aeropuertos/AeropuertoDelNorte.vue')
const AeropuertoIxtepec = () => import('./views/aeropuertos/AeropuertoIxtepec.vue')
const AeropuertoPalenque = () => import('./views/aeropuertos/AeropuertoPalenque.vue')
const AeropuertoChetumal = () => import('./views/aeropuertos/AeropuertoChetumal.vue')
const AeropuertoCampeche = () => import('./views/aeropuertos/AeropuertoCampeche.vue')

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
  // 404 - debe ser la última ruta
  { path: '/:pathMatch(.*)*', component: NotFoundPage },
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
