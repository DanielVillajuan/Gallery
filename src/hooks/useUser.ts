import { create } from 'zustand';
import { UserStore } from '../types/user';
import { GalleryType } from '../types/gallery';

export const useUser = create<UserStore>((set)=> ({
  favoriteGallery: [],
  addToFavorite: (item: GalleryType) => set((state)=> ({
    ...state,
    favoriteGallery: [...state.favoriteGallery, item]
  }))
}))
