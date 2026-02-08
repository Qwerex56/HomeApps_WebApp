import { defineStore } from "pinia";
import { loginRequest, logoutRequest, refreshSessionRequest } from "@/api/auth/auth.api";

import { jwtDecode } from "jwt-decode";

import Role from "@/utils/enums/roles";
import decodeRole from "@/utils/decodeRole";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || '',
    role: null as Role | null,
  }),

  actions: {
    async login(email: string, password: string) {
      const response = await loginRequest(email, password);

      const { token } = response.data;
      this.setToken(token);

      const decodedToken = jwtDecode(token);
      this.setRole(decodedToken);
    },

    async logout() {
      const response = await logoutRequest();

      if (response.status !== 200) {
        throw new Error('Logout failed');
      }

      this.setInvalidateSession();
    },

    async refreshSession() {
      const response = await refreshSessionRequest();

      const { token } = response.data;
      this.setToken(token);

      const decodedToken = jwtDecode(token);
      this.setRole(decodedToken);
    },

    setToken(token: string) {
      localStorage.setItem('token', token);
      this.token = token;
    },

    setRole(decodedToken: unknown) {
      const role = decodeRole(decodedToken);
      this.role = role ? role : null;
    },

    setInvalidateSession() {
      localStorage.removeItem('token');
      this.$reset();
    }
  },

  getters: {
    isAuthenticated: (state) : boolean => !!state.token,
    getRole: (state) : Role | null => state.role,
  }
});
