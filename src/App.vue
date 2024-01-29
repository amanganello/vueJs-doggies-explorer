<script setup>
import { RouterView } from 'vue-router'
import HeaderDoggies from './components/HeaderDoggies.vue'
import FooterDoggies from './components/FooterDoggies.vue'

</script>

<template>
  <div>
    <HeaderDoggies title="The Doggies"/>
    <RouterView />
    <FooterDoggies />
  </div>
</template>