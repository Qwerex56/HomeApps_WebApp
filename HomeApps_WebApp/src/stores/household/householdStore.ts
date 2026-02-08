import { createHousehold, getUserHouseholds } from "@/api/household/household.api";
import type { HouseholdsResponse } from "@/api/repsonseTypes/household.response";
import { defineStore } from "pinia";

export const useHouseholdStore = defineStore('household', {
  state: () => ({
    households: [] as HouseholdsResponse,
  }),

  actions: {
    async fetchUserHouseholds() {
      const response = await getUserHouseholds();
      const data = response.data as HouseholdsResponse;

      this.households = data;
    },

    async createHousehold(familyName: string) {
      const response = await createHousehold(familyName);

      if (response.status === 200) {
        await this.fetchUserHouseholds();
      }
    }
  },
});
