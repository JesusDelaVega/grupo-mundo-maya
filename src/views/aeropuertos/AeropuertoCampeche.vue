<script setup lang="ts">
import AeropuertoTemplate from './AeropuertoTemplate.vue'

const aeropuerto = {
  nombre: 'Aeropuerto de Campeche',
  nombreOficial: 'Aeropuerto Internacional Ingeniero Alberto Acuña Ongay',
  ciudad: 'Campeche',
  estado: 'Campeche',
  iata: 'CPE',
  oaci: 'MMCP',
  tipo: 'Internacional',
  distancia: '9 kilómetros',
  superficie: '413.73 hectáreas',
  pista: '2,500 x 45.5 metros',
  rodajes: 3,
  posicionesComerciales: 3,
  posicionesGenerales: 11,
  helipuertos: 2,
  aeronaveDiseno: 'B-727-200',
  certificaciones: ['AFAC', 'PROFEPA'],
  aerolineas: ['Volaris', 'Aeromexico Connect', 'Viva Aerobus'],
  descripcion: 'El Aeropuerto Internacional Ingeniero Alberto Acuña Ongay sirve a la ciudad de Campeche, capital del estado homónimo. Es un punto importante de conectividad para la Península de Yucatán, facilitando el acceso a zonas arqueológicas mayas y destinos turísticos de la región.'
}
</script>

<template>
  <AeropuertoTemplate :aeropuerto="aeropuerto" />
</template>
