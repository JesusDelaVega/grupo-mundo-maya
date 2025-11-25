<script setup lang="ts">
import AeropuertoTemplate from './AeropuertoTemplate.vue'

const aeropuerto = {
  nombre: 'Aeropuerto de Puebla',
  nombreOficial: 'Aeropuerto Internacional Hermanos Serdán',
  ciudad: 'Puebla',
  estado: 'Puebla',
  iata: 'PBC',
  oaci: 'MMPB',
  tipo: 'Internacional',
  distancia: '25 kilómetros',
  superficie: '518.1 hectáreas',
  pista: '3,605 x 45 metros',
  rodajes: 2,
  posicionesComerciales: 6,
  posicionesGenerales: 36,
  helipuertos: 2,
  aeronaveDiseno: 'Boeing 737',
  certificaciones: ['AFAC', 'PROFEPA'],
  aerolineas: ['Volaris', 'Viva Aerobus', 'United Airlines'],
  descripcion: 'El Aeropuerto Internacional Hermanos Serdán, también conocido como Aeropuerto de Huejotzingo, fue establecido en 1985. Lleva su nombre en honor a Aquiles, Máximo y María del Carmen Serdán, líderes revolucionarios contra el reeleccionismo. Ubicado a aproximadamente 40 minutos del centro de la ciudad de Puebla.'
}
</script>

<template>
  <AeropuertoTemplate :aeropuerto="aeropuerto" />
</template>
