import { useAuthStore } from "@/stores/auth/authStore";
import axios from "axios";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/${import.meta.env.VITE_API_VER}`,
  timeout: import.meta.env.VITE_API_TIMEOUT,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token') || ''}`,
  },
  withCredentials: true,
});

instance.interceptors.response.use(undefined, async error => {
  const authStore = useAuthStore();

  if (error.response?.status === 401) {
    await authStore.refreshSession();
    return instance(error.config);
  }

  authStore.setInvalidateSession();
  throw error;
});

export default instance;
