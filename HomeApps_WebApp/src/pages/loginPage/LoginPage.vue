<script setup lang="ts">
import { useAuthStore } from '@/stores/auth/authStore';
import { useUserStore } from '@/stores/user/userStore';

import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { useToast } from 'vue-toastification';

const authStore = useAuthStore();
const userStore = useUserStore();

const email = ref('');
const password = ref('');

const toast = useToast();
const router = useRouter();

const login = async () => {
  await authStore.login(email.value, password.value)
  .catch(err => {
    console.error('Login failed:', err);
    toast.error('Login failed.');
  });

  await userStore.fetchUserData();

  if (authStore.isAuthenticated) {
    router.push('user-dashboard');
  }
}
</script>

<template>
  <div class="flex min-h-full items-center justify-center px-4 py-8">
    <form @submit.prevent="login" class="flex w-full max-w-sm flex-col gap-4 rounded-sm p-4 shadow">
      <div class="flex flex-col">
        <label for="email">Email:</label>
        <input id="email" v-model="email" type="email" required class="border rounded"/>
      </div>

      <div class="flex flex-col">
        <label for="password">Password:</label>
        <input id="password" v-model="password" type="password" required class="border rounded"/>
      </div>

      <button type="submit" class="btn-primary">
        Login
      </button>
    </form>
  </div>
</template>
