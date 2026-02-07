<script setup lang="ts">
import { useAuthStore } from '@/stores/auth/authStore';
import { useUserStore } from '@/stores/user/userStore';

const authStore = useAuthStore();
const userStore = useUserStore();
</script>

<template>
  <div>
    Dashboard of the user {{ userStore.getDisplayName }} with role {{ authStore.getRole }}
  </div>
</template>
