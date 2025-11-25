<script setup lang="ts">
import AeropuertoTemplate from './AeropuertoTemplate.vue'

const aeropuerto = {
  nombre: 'Aeropuerto de Ciudad Victoria',
  nombreOficial: 'Aeropuerto Internacional General Pedro José Méndez',
  ciudad: 'Ciudad Victoria',
  estado: 'Tamaulipas',
  iata: 'CVM',
  oaci: 'MMCV',
  tipo: 'Internacional',
  distancia: '18.5 kilómetros',
  superficie: '388.70 hectáreas',
  pista: '2,200 x 45 metros',
  rodajes: 3,
  posicionesComerciales: 3,
  posicionesGenerales: 21,
  helipuertos: 0,
  aeronaveDiseno: 'Boeing 737-200',
  certificaciones: ['AFAC', 'PROFEPA', 'ACA Nivel 1'],
  aerolineas: [],
  descripcion: 'El Aeropuerto Internacional General Pedro José Méndez sirve a la capital del estado de Tamaulipas. Cuenta con certificaciones ambientales y aeronáuticas que garantizan operaciones seguras y sustentables. Sus instalaciones incluyen facilidades para aviación comercial y general.'
}
</script>

<template>
  <AeropuertoTemplate :aeropuerto="aeropuerto" />
</template>
