<script setup lang="ts">
import AeropuertoTemplate from './AeropuertoTemplate.vue'

const aeropuerto = {
  nombre: 'Aeropuerto de Ixtepec',
  nombreOficial: 'Base Aérea Militar N° 2 de Ixtepec "General Antonio Cárdenas Rodríguez"',
  ciudad: 'Ciudad Ixtepec',
  estado: 'Oaxaca',
  iata: 'IZT',
  oaci: 'MMIT',
  tipo: 'Militar con uso civil',
  distancia: '12 kilómetros',
  superficie: '125.9 hectáreas',
  pista: '2,323 x 60 metros',
  rodajes: 1,
  posicionesComerciales: 2,
  posicionesGenerales: 5,
  helipuertos: 0,
  aeronaveDiseno: 'ATR-45-500',
  certificaciones: [],
  aerolineas: ['Aerotucan'],
  descripcion: 'La Base Aérea Militar N° 2 de Ixtepec es un aeropuerto militar con rampa de uso civil, lo que significa que no es exclusivamente militar. Ubicado al sur de Ciudad Ixtepec en el municipio de Asunción Ixtaltepec, Oaxaca, ofrece conectividad para la región del Istmo de Tehuantepec.'
}
</script>

<template>
  <AeropuertoTemplate :aeropuerto="aeropuerto" />
</template>
