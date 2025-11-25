<script setup lang="ts">
</script>

<template>
  <section class="relative py-24 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-sky-900 via-sky-800 to-slate-900">
      <div class="absolute inset-0 maya-pattern opacity-20"></div>
      <!-- Decorative elements -->
      <div class="absolute top-0 left-1/4 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl"></div>
    </div>

    <div class="relative container mx-auto px-6">
      <div class="max-w-3xl mx-auto text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-sky-200 rounded-full text-sm font-medium mb-6">
          <i class="pi pi-phone"></i>
          Contáctanos
        </div>

        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          ¿Tienes alguna pregunta?
        </h2>
        <p class="text-xl text-sky-100/80 mb-10 leading-relaxed">
          Estamos aquí para ayudarte. Nuestro equipo está disponible para atender tus consultas sobre nuestros servicios y operaciones.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
            to="/contacto"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-400 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-1 transition-all duration-300"
          >
            <i class="pi pi-envelope"></i>
            Enviar Mensaje
          </router-link>
          <a
            href="tel:+525555555555"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
          >
            <i class="pi pi-phone"></i>
            +52 55 5555 5555
          </a>
        </div>

        <!-- Quick links -->
        <div class="mt-12 pt-12 border-t border-white/10">
          <p class="text-sky-200/60 text-sm mb-4">También puedes visitar:</p>
          <div class="flex flex-wrap justify-center gap-6">
            <router-link
              to="/transparencia"
              class="flex items-center gap-2 text-white/80 hover:text-amber-400 transition-colors"
            >
              <i class="pi pi-shield"></i>
              Portal de Transparencia
            </router-link>
            <router-link
              to="/noticias"
              class="flex items-center gap-2 text-white/80 hover:text-amber-400 transition-colors"
            >
              <i class="pi pi-megaphone"></i>
              Sala de Prensa
            </router-link>
            <a
              href="#"
              class="flex items-center gap-2 text-white/80 hover:text-amber-400 transition-colors"
            >
              <i class="pi pi-briefcase"></i>
              Bolsa de Trabajo
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
