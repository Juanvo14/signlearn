import { create } from 'zustand';
import api from '../api';

const useAuthStore = create((set, get) => ({
  user: null,
  token: localStorage.getItem('token'),
  loading: true,
  error: null,

  login: async (email, password) => {
    try {
      set({ error: null });
      const { data } = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', data.token);
      set({ user: data.user, token: data.token });
      return { success: true };
    } catch (err) {
      const msg = err.response?.data?.error || 'Error al iniciar sesion';
      set({ error: msg });
      return { success: false, error: msg };
    }
  },

  register: async (name, email, password) => {
    try {
      set({ error: null });
      const { data } = await api.post('/auth/register', { name, email, password });
      localStorage.setItem('token', data.token);
      set({ user: data.user, token: data.token });
      return { success: true };
    } catch (err) {
      const msg = err.response?.data?.error || 'Error al registrarse';
      set({ error: msg });
      return { success: false, error: msg };
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ user: null, token: null });
  },

  fetchMe: async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      set({ loading: false });
      return;
    }
    try {
      const { data } = await api.get('/auth/me');
      set({ user: data.user, loading: false });
    } catch {
      localStorage.removeItem('token');
      set({ user: null, token: null, loading: false });
    }
  },

  updateUser: (updates) => {
    set((state) => ({ user: { ...state.user, ...updates } }));
  }
}));

export default useAuthStore;
