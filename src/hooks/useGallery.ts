import { create } from 'zustand';
import { GalleryStore, GalleryType } from '../types/gallery';

export const useGallery = create<GalleryStore>((set)=> ({
  favorites: [],
  addToFavorite: (itemId: GalleryType) => {
    console.log(itemId)
  },
  page: 1,
  setPage: () => set((state) => ({page: state.page + 1}))
}))

