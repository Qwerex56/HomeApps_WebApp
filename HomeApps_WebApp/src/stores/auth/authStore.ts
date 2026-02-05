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
      const { token } = await loginRequest(email, password);
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
      const { token } = await refreshSessionRequest();
      this.setToken(token);

      const decodedToken = jwtDecode(token);
      this.setRole(decodedToken);
    },

    setToken(token: string) {
      this.token = token;
      localStorage.setItem('token', token);
    },

    setRole(decodedToken: unknown) {
      const role = decodeRole(decodedToken);
      this.role = role ? role : null;
    },

    setInvalidateSession() {
      this.$reset();
      localStorage.removeItem('token');
    }
  },

  getters: {
    isAuthenticated: (state) : boolean => !!state.token,
    getRole: (state) : Role | null => state.role,
  }
});
