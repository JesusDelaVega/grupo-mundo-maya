<script setup lang="ts">
import AeropuertoTemplate from './AeropuertoTemplate.vue'

const aeropuerto = {
  nombre: 'Aeropuerto de Tamuín',
  nombreOficial: 'Aeropuerto Nacional de Tamuín',
  ciudad: 'Tamuín',
  estado: 'San Luis Potosí',
  iata: 'TSL',
  oaci: 'MMTN',
  tipo: 'Nacional',
  distancia: '5 kilómetros',
  superficie: '122.52 hectáreas',
  pista: '1,405 x 30 metros',
  rodajes: 2,
  posicionesComerciales: 1,
  posicionesGenerales: 6,
  helipuertos: 2,
  aeronaveDiseno: 'ATR-42',
  certificaciones: [],
  aerolineas: [],
  descripcion: 'El Aeropuerto Nacional de Tamuín está ubicado cerca de Ciudad Valles, San Luis Potosí. Funciona principalmente como aeropuerto regional de negocios, sirviendo a la zona huasteca del estado.'
}
</script>

<template>
  <AeropuertoTemplate :aeropuerto="aeropuerto" />
</template>
