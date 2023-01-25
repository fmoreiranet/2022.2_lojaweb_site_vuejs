<script setup>
import { RouterView } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
</script>

<template>
  <main>
    <NavBar></NavBar>
    <RouterView />
  </main>
</template>

<style>
.produto {
  background-color: aqua;
  height: 1000px;
}
</style>
