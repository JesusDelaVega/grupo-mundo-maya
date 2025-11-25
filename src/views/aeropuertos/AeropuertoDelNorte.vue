<script setup lang="ts">
import AeropuertoTemplate from './AeropuertoTemplate.vue'

const aeropuerto = {
  nombre: 'Aeropuerto del Norte',
  nombreOficial: 'Aeropuerto Internacional del Norte',
  ciudad: 'Apodaca',
  estado: 'Nuevo León',
  iata: 'NTR',
  oaci: 'MMAN',
  tipo: 'Internacional',
  distancia: 'Carretera a Laredo km 1006',
  superficie: 'No especificada',
  pista: 'Múltiples',
  rodajes: 0,
  posicionesComerciales: 0,
  posicionesGenerales: 0,
  helipuertos: 0,
  aeronaveDiseno: 'Aviación General',
  certificaciones: [],
  aerolineas: [],
  descripcion: 'El Aeropuerto Internacional del Norte está enfocado en el desarrollo de la aviación general con infraestructura moderna. Ofrece servicios de almacenamiento, mantenimiento y reparación de aeronaves, suministro de combustible (turbosina, gasolina de aviación, aceites y aditivos anti-hielo), equipo de rescate y extinción de incendios (CREI), ayudas a la navegación ILS y VOR, seguridad privada, oficinas de despacho, y servicios de aduana, migración y autoridades aeronáuticas.'
}
</script>

<template>
  <AeropuertoTemplate :aeropuerto="aeropuerto" />
</template>
