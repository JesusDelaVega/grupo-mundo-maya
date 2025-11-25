<script setup lang="ts">
import AeropuertoTemplate from './AeropuertoTemplate.vue'

const aeropuerto = {
  nombre: 'Aeropuerto de Nogales',
  nombreOficial: 'Aeropuerto Internacional de Nogales',
  ciudad: 'Nogales',
  estado: 'Sonora',
  iata: 'NOG',
  oaci: 'MMNG',
  tipo: 'Internacional',
  distancia: '13.5 kilómetros',
  superficie: '108.6 hectáreas',
  pista: '1,800 x 30 metros',
  rodajes: 1,
  posicionesComerciales: 2,
  posicionesGenerales: 0,
  helipuertos: 0,
  aeronaveDiseno: 'ATR42-500',
  certificaciones: [],
  aerolineas: [],
  descripcion: 'El Aeropuerto Internacional de Nogales está situado cerca de la frontera entre México y Estados Unidos, adyacente a Nogales, Arizona. Su ubicación estratégica lo convierte en un punto importante para el comercio y la conectividad transfronteriza en la región noroeste de México.'
}
</script>

<template>
  <AeropuertoTemplate :aeropuerto="aeropuerto" />
</template>
