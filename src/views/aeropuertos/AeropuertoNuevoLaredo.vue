<script setup lang="ts">
import AeropuertoTemplate from './AeropuertoTemplate.vue'

const aeropuerto = {
  nombre: 'Aeropuerto de Nuevo Laredo',
  nombreOficial: 'Aeropuerto Internacional Quetzalcóatl',
  ciudad: 'Nuevo Laredo',
  estado: 'Tamaulipas',
  iata: 'NLD',
  oaci: 'MMNL',
  tipo: 'Internacional',
  distancia: '7 kilómetros',
  superficie: '299.84 hectáreas',
  pista: '2,000 x 45 metros',
  rodajes: 3,
  posicionesComerciales: 14,
  posicionesGenerales: 3,
  helipuertos: 2,
  aeronaveDiseno: 'B-727-200',
  certificaciones: ['AFAC', 'PROFEPA'],
  aerolineas: ['Aeromexico Connect'],
  descripcion: 'El Aeropuerto Internacional Quetzalcóatl está situado cerca de la frontera entre México y Estados Unidos, siendo un punto estratégico para la conectividad comercial y de pasajeros en la región fronteriza de Tamaulipas.'
}
</script>

<template>
  <AeropuertoTemplate :aeropuerto="aeropuerto" />
</template>
