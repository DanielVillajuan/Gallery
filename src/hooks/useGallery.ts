import { create } from 'zustand';
import { GalleryStore, GalleryType } from '../types/gallery';

export const useGallery = create<GalleryStore>((set)=> ({
  page: 0,
  limit: 9,
  galleryList: [],
  setGalleryList: (galleryList: GalleryType[]) => set((state: GalleryStore): GalleryStore => ({
    ...state,
    galleryList
  }))
}))

