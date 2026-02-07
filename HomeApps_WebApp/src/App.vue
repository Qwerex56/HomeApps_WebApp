<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavigationBar from './components/navigationBar/NavigationBar.vue';
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <nav>
      <NavigationBar />
    </nav>
    <main class="">
      <RouterView/> <!-- This will render the matched component for the default view -->
    </main>
    <footer>
      <RouterView name="navigation-bottom"/>
    </footer>
  </div>
</template>
