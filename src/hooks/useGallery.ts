import { create } from 'zustand';
import { GalleryStore } from '../types/gallery';

export const useGallery = create<GalleryStore>((set)=> ({
  page: 1,
  setPage: () => set((state) => ({page: state.page + 1}))
}))

