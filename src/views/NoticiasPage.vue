<script setup lang="ts">
import { ref } from 'vue'

const activeCategory = ref('Todas')

const categories = ['Todas', 'Aeropuertos', 'Turismo', 'Institucional', 'Combustibles']

const news = [
  {
    id: 1,
    date: '20 Nov 2024',
    category: 'Aeropuertos',
    title: 'AIFA supera expectativas de pasajeros en 2024',
    excerpt: 'El Aeropuerto Internacional Felipe Ángeles registra un incremento significativo en el flujo de pasajeros durante el presente año, consolidándose como una alternativa importante para la conectividad aérea del país.',
    image: 'https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=800',
    featured: true
  },
  {
    id: 2,
    date: '15 Nov 2024',
    category: 'Turismo',
    title: 'Nuevas experiencias en zonas arqueológicas',
    excerpt: 'Grupo Mundo Maya lanza programa de experiencias culturales inmersivas en Palenque y Chichén Itzá, ofreciendo a los visitantes una conexión más profunda con nuestra historia.',
    image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800',
    featured: false
  },
  {
    id: 3,
    date: '10 Nov 2024',
    category: 'Institucional',
    title: 'Compromiso con la transparencia gubernamental',
    excerpt: 'Actualizamos nuestro portal de transparencia con información detallada sobre operaciones y finanzas, reafirmando nuestro compromiso con la rendición de cuentas.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
    featured: false
  },
  {
    id: 4,
    date: '5 Nov 2024',
    category: 'Combustibles',
    title: 'Ampliación de red de distribución de combustibles',
    excerpt: 'Se inaugura nueva estación de suministro de combustible en el noreste del país, fortaleciendo la infraestructura energética nacional.',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800',
    featured: false
  },
  {
    id: 5,
    date: '1 Nov 2024',
    category: 'Turismo',
    title: 'Reconocimiento internacional a hoteles temáticos',
    excerpt: 'Los hoteles de Grupo Mundo Maya reciben reconocimiento por su compromiso con el turismo sustentable y la preservación cultural.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    featured: false
  },
  {
    id: 6,
    date: '28 Oct 2024',
    category: 'Aeropuertos',
    title: 'Mejoras en infraestructura aeroportuaria',
    excerpt: 'Se anuncian inversiones para modernizar las instalaciones de múltiples terminales aéreas bajo nuestra administración.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800',
    featured: false
  }
]

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    'Aeropuertos': 'bg-sky-100 text-sky-700',
    'Turismo': 'bg-amber-100 text-amber-700',
    'Institucional': 'bg-emerald-100 text-emerald-700',
    'Combustibles': 'bg-purple-100 text-purple-700'
  }
  return colors[category] || 'bg-slate-100 text-slate-700'
}

const filteredNews = () => {
  if (activeCategory.value === 'Todas') return news
  return news.filter(n => n.category === activeCategory.value)
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative pt-32 pb-20 bg-gradient-to-br from-sky-900 via-sky-800 to-slate-900 overflow-hidden">
      <div class="absolute inset-0 maya-pattern opacity-20"></div>

      <div class="relative container mx-auto px-6">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-sky-200 rounded-full text-sm font-medium mb-6">
            <i class="pi pi-megaphone"></i>
            Sala de Prensa
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Noticias y Comunicados
          </h1>
          <p class="text-xl text-sky-100/80 leading-relaxed">
            Mantente informado sobre las últimas novedades, logros y avances de Grupo Mundo Maya.
          </p>
        </div>
      </div>
    </section>

    <!-- News Section -->
    <section class="section bg-slate-50">
      <div class="container mx-auto px-6">
        <!-- Filter Tabs -->
        <div class="flex flex-wrap gap-2 mb-12 justify-center">
          <button
            v-for="category in categories"
            :key="category"
            @click="activeCategory = category"
            :class="[
              'px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300',
              activeCategory === category
                ? 'bg-sky-600 text-white shadow-lg shadow-sky-500/30'
                : 'bg-white text-slate-600 hover:bg-sky-50 hover:text-sky-600'
            ]"
          >
            {{ category }}
          </button>
        </div>

        <!-- News Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="item in filteredNews()"
            :key="item.id"
            class="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2"
          >
            <!-- Image -->
            <div class="relative h-48 overflow-hidden">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <span :class="['absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium', getCategoryColor(item.category)]">
                {{ item.category }}
              </span>
            </div>

            <!-- Content -->
            <div class="p-6">
              <div class="flex items-center gap-2 text-slate-400 text-sm mb-3">
                <i class="pi pi-calendar"></i>
                {{ item.date }}
              </div>
              <h3 class="text-lg font-bold text-slate-800 mb-3 group-hover:text-sky-700 transition-colors line-clamp-2">
                {{ item.title }}
              </h3>
              <p class="text-slate-600 text-sm line-clamp-3 mb-4">
                {{ item.excerpt }}
              </p>
              <button class="inline-flex items-center gap-2 text-sky-600 font-semibold text-sm hover:gap-3 transition-all duration-300">
                Leer más
                <i class="pi pi-arrow-right"></i>
              </button>
            </div>
          </article>
        </div>

        <!-- Load More -->
        <div class="text-center mt-12">
          <button class="px-8 py-3 bg-white text-sky-600 border-2 border-sky-600 rounded-xl font-semibold hover:bg-sky-600 hover:text-white transition-all duration-300">
            Cargar más noticias
          </button>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="section bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-2xl mx-auto text-center">
          <div class="w-16 h-16 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <i class="pi pi-envelope text-2xl"></i>
          </div>
          <h2 class="text-2xl font-bold text-slate-800 mb-4">Suscríbete a nuestro boletín</h2>
          <p class="text-slate-600 mb-8">
            Recibe las últimas noticias y comunicados directamente en tu correo electrónico.
          </p>
          <form class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              class="flex-1 px-5 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            />
            <button
              type="submit"
              class="px-6 py-3 bg-gradient-to-r from-sky-600 to-sky-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
