import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'
import 'primeicons/primeicons.css'

// Importar componentes de PrimeVue
import Button from 'primevue/button'
import Card from 'primevue/card'
import Menubar from 'primevue/menubar'
import Carousel from 'primevue/carousel'
import Image from 'primevue/image'
import Divider from 'primevue/divider'
import Timeline from 'primevue/timeline'
import ScrollTop from 'primevue/scrolltop'
import Ripple from 'primevue/ripple'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'

// Vistas
import HomePage from './views/HomePage.vue'
import NosotrosPage from './views/NosotrosPage.vue'
import ServiciosPage from './views/ServiciosPage.vue'
import NoticiasPage from './views/NoticiasPage.vue'
import ContactoPage from './views/ContactoPage.vue'
import TransparenciaPage from './views/TransparenciaPage.vue'

// Configuración del router
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
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

const app = createApp(App)

// Configurar PrimeVue con tema personalizado
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: '.dark-mode',
      cssLayer: false
    }
  },
  ripple: true
})

app.use(router)

// Registrar componentes globalmente
app.component('Button', Button)
app.component('Card', Card)
app.component('Menubar', Menubar)
app.component('Carousel', Carousel)
app.component('Image', Image)
app.component('Divider', Divider)
app.component('Timeline', Timeline)
app.component('ScrollTop', ScrollTop)
app.component('TabView', TabView)
app.component('TabPanel', TabPanel)
app.component('Accordion', Accordion)
app.component('AccordionPanel', AccordionPanel)
app.component('AccordionHeader', AccordionHeader)
app.component('AccordionContent', AccordionContent)

// Registrar directivas
app.directive('ripple', Ripple)

app.mount('#app')
