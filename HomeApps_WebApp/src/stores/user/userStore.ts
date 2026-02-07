import { getMe } from "@/api/user/user.api";
import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
  state: () => ({
    userName: '',
  }),

  actions: {
    async fetchUserData() {
      const response = await getMe();
      const data = response.data;

      this.userName = data.name;
    }
  },

  getters: {
    getDisplayName: state => {
      return state.userName;
    }
  },
});
