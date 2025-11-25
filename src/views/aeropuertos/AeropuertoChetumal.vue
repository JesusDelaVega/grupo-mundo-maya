<script setup lang="ts">
import AeropuertoTemplate from './AeropuertoTemplate.vue'

const aeropuerto = {
  nombre: 'Aeropuerto de Chetumal',
  nombreOficial: 'Aeropuerto Internacional de Chetumal',
  ciudad: 'Chetumal',
  estado: 'Quintana Roo',
  iata: 'CTM',
  oaci: 'MMCM',
  tipo: 'Fronterizo',
  distancia: '2 kilómetros',
  superficie: '230 hectáreas',
  pista: '2,693 x 45 metros',
  rodajes: 2,
  posicionesComerciales: 2,
  posicionesGenerales: 11,
  helipuertos: 2,
  aeronaveDiseno: 'Boeing 727-200',
  certificaciones: ['AFAC', 'PROFEPA'],
  aerolineas: ['Volaris', 'Aeromexico Connect', 'Viva Aerobus', 'Mayair'],
  descripcion: 'El Aeropuerto Internacional de Chetumal es el principal centro aéreo de la capital del estado de Quintana Roo. Ubicado cerca de la frontera con Belice, sirve como punto estratégico para la conectividad regional y el turismo en el sur de la Riviera Maya.'
}
</script>

<template>
  <AeropuertoTemplate :aeropuerto="aeropuerto" />
</template>
