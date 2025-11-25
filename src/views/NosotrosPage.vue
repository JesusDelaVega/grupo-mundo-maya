<script setup lang="ts">
const team = [
  { name: 'Director General', role: 'Dirección Ejecutiva', icon: 'pi pi-user' },
  { name: 'Subdirección de Operaciones', role: 'Operaciones', icon: 'pi pi-cog' },
  { name: 'Subdirección de Administración', role: 'Administración', icon: 'pi pi-briefcase' },
  { name: 'Subdirección Jurídica', role: 'Legal', icon: 'pi pi-file' },
]

const objectives = [
  {
    icon: 'pi pi-building',
    title: 'Turismo Sustentable',
    description: 'Promover y desarrollar el turismo en las zonas arqueológicas y culturales más importantes de México.'
  },
  {
    icon: 'pi pi-send',
    title: 'Conectividad Aérea',
    description: 'Garantizar operaciones aeroportuarias eficientes y seguras en todo el territorio nacional.'
  },
  {
    icon: 'pi pi-bolt',
    title: 'Infraestructura Energética',
    description: 'Asegurar el suministro de combustibles de manera estratégica y eficiente.'
  },
  {
    icon: 'pi pi-users',
    title: 'Bienestar Social',
    description: 'Contribuir al desarrollo económico y social de las comunidades donde operamos.'
  }
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative pt-32 pb-20 bg-gradient-to-br from-sky-900 via-sky-800 to-slate-900 overflow-hidden">
      <div class="absolute inset-0 maya-pattern opacity-20"></div>
      <div class="absolute top-20 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>

      <div class="relative container mx-auto px-6">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-sky-200 rounded-full text-sm font-medium mb-6">
            <i class="pi pi-info-circle"></i>
            Conócenos
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Sobre Grupo Mundo Maya
          </h1>
          <p class="text-xl text-sky-100/80 leading-relaxed">
            Somos una entidad paraestatal comprometida con el desarrollo y bienestar de México a través de la gestión eficiente de infraestructura estratégica.
          </p>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="section bg-white">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-8">
          <div class="p-8 bg-gradient-to-br from-sky-50 to-sky-100/50 rounded-2xl">
            <div class="w-14 h-14 bg-sky-600 text-white rounded-xl flex items-center justify-center mb-6">
              <i class="pi pi-compass text-2xl"></i>
            </div>
            <h2 class="text-2xl font-bold text-sky-900 mb-4">Misión</h2>
            <p class="text-slate-600 leading-relaxed">
              Administrar, controlar, supervisar, operar y explotar bienes nacionales bajo dirección estatal para contribuir al bienestar social y desarrollo económico de México, garantizando servicios de calidad en turismo, aviación y energía.
            </p>
          </div>
          <div class="p-8 bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl">
            <div class="w-14 h-14 bg-amber-500 text-white rounded-xl flex items-center justify-center mb-6">
              <i class="pi pi-eye text-2xl"></i>
            </div>
            <h2 class="text-2xl font-bold text-amber-900 mb-4">Visión</h2>
            <p class="text-slate-600 leading-relaxed">
              Ser la entidad líder en la gestión de infraestructura estratégica nacional, reconocida por nuestra excelencia operativa, transparencia y compromiso con el desarrollo sustentable de México.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Objectives -->
    <section class="section bg-slate-50 maya-pattern">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="section-title">Nuestros Objetivos</h2>
          <p class="section-subtitle">
            Trabajamos en cuatro ejes estratégicos para impulsar el desarrollo nacional.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="objective in objectives"
            :key="objective.title"
            class="bg-white p-6 rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300"
          >
            <div class="w-14 h-14 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center mb-4">
              <i :class="[objective.icon, 'text-2xl']"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-800 mb-2">{{ objective.title }}</h3>
            <p class="text-slate-600 text-sm leading-relaxed">{{ objective.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- History -->
    <section class="section bg-white">
      <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-4">
              <i class="pi pi-history"></i>
              Nuestra Historia
            </div>
            <h2 class="section-title text-left">Creación y Trayectoria</h2>
            <p class="text-slate-600 mb-6 leading-relaxed">
              Grupo Mundo Maya fue establecido el 13 de abril de 2022 mediante resolución oficial del Gobierno de México, con el objetivo de administrar y operar infraestructura estratégica nacional.
            </p>
            <p class="text-slate-600 mb-6 leading-relaxed">
              Desde nuestra creación, hemos asumido la responsabilidad de gestionar aeropuertos, servicios turísticos y operaciones de combustibles en todo el territorio nacional.
            </p>
            <p class="text-slate-600 leading-relaxed">
              Nuestro compromiso es continuar creciendo y mejorando nuestros servicios para contribuir al bienestar de todos los mexicanos.
            </p>
          </div>
          <div class="relative">
            <div class="aspect-video rounded-2xl overflow-hidden shadow-elegant">
              <img
                src="https://images.unsplash.com/photo-1569025743873-ea3a9ber95f5?w=800"
                alt="México"
                class="w-full h-full object-cover"
                onerror="this.src='https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800'"
              />
            </div>
            <div class="absolute -bottom-6 -right-6 bg-amber-500 text-white p-6 rounded-2xl shadow-lg">
              <div class="text-3xl font-bold">2022</div>
              <div class="text-sm opacity-90">Año de fundación</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Organization -->
    <section class="section bg-gradient-to-br from-sky-900 to-slate-900 text-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Estructura Organizacional</h2>
          <p class="text-sky-200/80 max-w-2xl mx-auto">
            Contamos con un equipo directivo comprometido con la excelencia y el servicio público.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div
            v-for="member in team"
            :key="member.name"
            class="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl text-center hover:bg-white/15 transition-all duration-300"
          >
            <div class="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <i :class="[member.icon, 'text-2xl']"></i>
            </div>
            <h3 class="font-semibold text-white mb-1">{{ member.name }}</h3>
            <p class="text-sky-200/70 text-sm">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
