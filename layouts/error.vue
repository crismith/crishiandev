<template>
  <div>
    <h1 v-if="error.statusCode === 404">Página no encontrada</h1>
    <h1 v-else>Error</h1>
    <nuxt-link class="btn btn-blue" to="/"> INICIO </nuxt-link>
  </div>
</template>

<script>
  export default {
    layout: 'error',
  }
</script>

<style>
  h1{
    color: aliceblue;
  }
</style>