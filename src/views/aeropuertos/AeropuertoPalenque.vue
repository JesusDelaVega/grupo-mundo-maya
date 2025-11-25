<script setup lang="ts">
import AeropuertoTemplate from './AeropuertoTemplate.vue'

const aeropuerto = {
  nombre: 'Aeropuerto de Palenque',
  nombreOficial: 'Aeropuerto Internacional de Palenque',
  ciudad: 'Palenque',
  estado: 'Chiapas',
  iata: 'PQM',
  oaci: 'MMPQ',
  tipo: 'Turístico',
  distancia: '5 kilómetros',
  superficie: '201.5 hectáreas',
  pista: '2,450 x 45 metros',
  rodajes: 0,
  posicionesComerciales: 0,
  posicionesGenerales: 0,
  helipuertos: 0,
  aeronaveDiseno: 'No especificado',
  certificaciones: ['DGAC', 'PROFEPA'],
  aerolineas: [],
  descripcion: 'El Aeropuerto Internacional de Palenque sirve como puerta de entrada a la zona arqueológica de Palenque, uno de los sitios mayas más importantes de México. Su ubicación estratégica lo convierte en un punto clave para el turismo cultural en la región de Chiapas.'
}
</script>

<template>
  <AeropuertoTemplate :aeropuerto="aeropuerto" />
</template>
