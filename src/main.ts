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

const routes = [
  { path: '/', component: HomePage },
  { path: '/nosotros', component: NosotrosPage },
  { path: '/servicios', component: ServiciosPage },
  { path: '/noticias', component: NoticiasPage },
  { path: '/contacto', component: ContactoPage },
  { path: '/transparencia', component: TransparenciaPage },
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
