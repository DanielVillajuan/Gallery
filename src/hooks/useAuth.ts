import { create } from 'zustand';
import { AuthStore } from '../types/auth';

export const useAuth = create<AuthStore>((set)=> ({
  username: localStorage.getItem('user') || '',
  isAuth: Boolean(localStorage.getItem('user')),
  login: (username : string) => {
    localStorage.setItem('user', username);
    set((state: AuthStore) => ({ isAuth: !state.isAuth, username }));
  },
  logout: () => {
    localStorage.removeItem('user');
    set((state: AuthStore) => ({ isAuth: !state.isAuth, username: '' }));
  }
}))
