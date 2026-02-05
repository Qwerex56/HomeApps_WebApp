<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  fetch('https://api.localhost/api/v1/User/GetMe')
  .then(response => response.json())
  .catch(error => console.error('Error fetching user data:', error));
})
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
  </p>
</template>

<style scoped>

</style>
