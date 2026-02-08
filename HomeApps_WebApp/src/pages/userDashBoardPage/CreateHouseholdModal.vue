<script setup lang="ts">
import { useHouseholdStore } from '@/stores/household/householdStore';
import { ref } from 'vue';

const emit = defineEmits(['closeModal']);

const familyName = ref('');

const householdStore = useHouseholdStore();

const createHousehold = async () => {
  await householdStore.createHousehold(familyName.value);
  emit('closeModal');
}
</script>

<template>
  <div class="fixed top-0 bottom-0 left-0 right-0 bg-transparent flex items-center justify-center">
    <div class="bg-white overflow-x-auto flex flex-col border rounded p-4">
      <h1>
        Create household
      </h1>

      <form @submit.prevent="createHousehold">
        <div>
          <label for="householdName">Household Name</label>
          <input type="text" id="householdName" name="householdName" v-model="familyName" />
        </div>

        <div>
          <button type="submit" class="btn-primary">
            Create
          </button>
          <button type="button" class="btn-primary bg-red-500 hover:bg-red-700" @click="emit('closeModal')">
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
