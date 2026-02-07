<script setup lang="ts">
import { useAuthStore } from '@/stores/auth/authStore';
import { useUserStore } from '@/stores/user/userStore';

import Role from '@/utils/enums/roles';
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const authStore = useAuthStore();
const userStore = useUserStore();

const route = useRoute();

const isAdministrativeUser = computed(() => {
  const role = authStore.getRole;
  return role === Role.SystemOwner || role === Role.SystemAdmin;
})

const isOnLoginPage = computed((): boolean => {
  return route.name === 'login';
})
</script>

<template>
  <div class="flex p-4 justify-between items-center shadow">
    <h1 class="text-2xl font-bold">Home Apps</h1>

    <div v-if="authStore.isAuthenticated" class="flex justify-between items-center gap-1">
      <p class="text-xl">
        Welcome, {{ userStore.getDisplayName }}
      </p>

      <RouterLink to="/user-dashboard" class="btn-primary">
        Profile
      </RouterLink>
      <button @click="authStore.logout" class="btn-primary">
        Logout
      </button>

      <RouterLink to="admin-panel" v-if="isAdministrativeUser" class="btn-primary">
        Admin Panel
      </RouterLink>
    </div>

    <RouterLink v-else-if="!isOnLoginPage" to="/login" class="btn-primary">
      Login
    </RouterLink>
  </div>
</template>
