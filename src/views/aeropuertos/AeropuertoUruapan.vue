<script setup lang="ts">
import AeropuertoTemplate from './AeropuertoTemplate.vue'

const aeropuerto = {
  nombre: 'Aeropuerto de Uruapan',
  nombreOficial: 'Aeropuerto Internacional Licenciado y General Ignacio López Rayón',
  ciudad: 'Uruapan',
  estado: 'Michoacán',
  iata: 'UPN',
  oaci: 'MMPN',
  tipo: 'Internacional',
  distancia: '8 kilómetros',
  superficie: '263.8 hectáreas',
  pista: '2,400 x 45 metros',
  rodajes: 2,
  posicionesComerciales: 3,
  posicionesGenerales: 36,
  helipuertos: 2,
  aeronaveDiseno: 'Boeing 737',
  certificaciones: ['AFAC', 'PROFEPA'],
  aerolineas: ['Volaris'],
  descripcion: 'El Aeropuerto Internacional de Uruapan conecta la región de la Meseta Purépecha con la zona de Tierra Caliente, hacia la costa del Pacífico. Está ubicado en una posición estratégica en el centro del estado de Michoacán, sirviendo como importante centro de transporte para la región.'
}
</script>

<template>
  <AeropuertoTemplate :aeropuerto="aeropuerto" />
</template>
