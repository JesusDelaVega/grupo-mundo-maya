<script setup lang="ts">
const news = [
  {
    id: 1,
    date: '20 Nov 2024',
    category: 'Aeropuertos',
    title: 'AIFA supera expectativas de pasajeros en 2024',
    excerpt: 'El Aeropuerto Internacional Felipe Ángeles registra un incremento significativo en el flujo de pasajeros durante el presente año.',
    image: 'https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=800',
    featured: true
  },
  {
    id: 2,
    date: '15 Nov 2024',
    category: 'Turismo',
    title: 'Nuevas experiencias en zonas arqueológicas',
    excerpt: 'Grupo Mundo Maya lanza programa de experiencias culturales inmersivas en Palenque y Chichén Itzá.',
    image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800',
    featured: false
  },
  {
    id: 3,
    date: '10 Nov 2024',
    category: 'Institucional',
    title: 'Compromiso con la transparencia gubernamental',
    excerpt: 'Actualizamos nuestro portal de transparencia con información detallada sobre operaciones y finanzas.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
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
</script>

<template>
  <section class="section bg-white">
    <div class="container mx-auto px-6">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-4">
            <i class="pi pi-megaphone"></i>
            Noticias
          </div>
          <h2 class="section-title text-left mb-2">Últimas Novedades</h2>
          <p class="text-slate-600 max-w-lg">
            Mantente informado sobre las últimas noticias y avances de Grupo Mundo Maya.
          </p>
        </div>
        <router-link
          to="/noticias"
          class="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 transition-colors"
        >
          Ver todas las noticias
          <i class="pi pi-arrow-right"></i>
        </router-link>
      </div>

      <!-- News Grid -->
      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Featured News -->
        <div
          v-if="news[0]"
          class="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500"
        >
          <div class="relative h-72 overflow-hidden">
            <img
              :src="news[0].image"
              :alt="news[0].title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            <!-- Content overlay -->
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <div class="flex items-center gap-3 mb-3">
                <span :class="['px-3 py-1 rounded-full text-xs font-medium', getCategoryColor(news[0].category)]">
                  {{ news[0].category }}
                </span>
                <span class="text-white/70 text-sm flex items-center gap-1">
                  <i class="pi pi-calendar"></i>
                  {{ news[0].date }}
                </span>
              </div>
              <h3 class="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                {{ news[0].title }}
              </h3>
              <p class="text-white/80 text-sm line-clamp-2">
                {{ news[0].excerpt }}
              </p>
            </div>
          </div>
        </div>

        <!-- Other News -->
        <div class="space-y-6">
          <article
            v-for="item in news.slice(1)"
            :key="item.id"
            class="group flex gap-4 p-4 bg-slate-50 rounded-xl hover:bg-white hover:shadow-card transition-all duration-300 cursor-pointer"
          >
            <div class="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 mb-2">
                <span :class="['px-2 py-0.5 rounded text-xs font-medium', getCategoryColor(item.category)]">
                  {{ item.category }}
                </span>
                <span class="text-slate-400 text-xs">{{ item.date }}</span>
              </div>
              <h4 class="font-semibold text-slate-800 mb-1 group-hover:text-sky-700 transition-colors line-clamp-2">
                {{ item.title }}
              </h4>
              <p class="text-slate-500 text-sm line-clamp-2">
                {{ item.excerpt }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
