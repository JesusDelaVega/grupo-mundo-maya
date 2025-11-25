<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white">
    <NavBar />
    <main class="flex-1">
      <router-view />
    </main>
    <FooterSection />
  </div>
</template>
