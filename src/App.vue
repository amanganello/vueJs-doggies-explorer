<script setup>
import { RouterView } from 'vue-router'
import HeaderDoggies from './components/header/HeaderDoggies.vue'
import FooterDoggies from './components/footer/FooterDoggies.vue'
</script>

<template>
  <div>
    <HeaderDoggies title="The Doggies"/>
    <RouterView />
    <FooterDoggies />
  </div>
</template>
