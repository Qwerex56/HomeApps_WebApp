<script setup lang="ts">
import { useAuthStore } from '@/stores/auth/authStore';
import { useHouseholdStore } from '@/stores/household/householdStore';
import { useUserStore } from '@/stores/user/userStore';
import { onMounted, ref } from 'vue';

import CreateHouseholdModal from './CreateHouseholdModal.vue';

const authStore = useAuthStore();
const userStore = useUserStore();
const householdStore = useHouseholdStore();

const showCreateHouseholdModal = ref(false);

onMounted(async() => {
  await householdStore.fetchUserHouseholds();
});
</script>

<template>
  <div>
    Dashboard of the user {{ userStore.getDisplayName }} with role {{ authStore.getRole }}

    <div class="flex flex-col rounded border border-gray-400 p-4 m-4">
      <div class="flex w-full items-center justify-between">
        <h2>User households</h2>
        <button class="btn-primary" @click="showCreateHouseholdModal = true">
          Create household
        </button>
      </div>

      <ul>
        <li v-for="household in householdStore.households" :key="household.id"
        class="grid grid-cols-4 gap-2">
          <p>
            {{ household.familyName }}
          </p>

          <p>
            Active users: {{ household.usersCount }}
          </p>

          <p>
            Created: {{ new Date(household.created).toLocaleDateString() }}
          </p>

          <button class="btn-primary">
            Manage
          </button>
        </li>
      </ul>

      <p v-if="householdStore.households.length === 0">
        No households yet. Please create one to get started.
      </p>
    </div>

    <CreateHouseholdModal v-if="showCreateHouseholdModal" @close-modal="showCreateHouseholdModal = false" />
  </div>
</template>
