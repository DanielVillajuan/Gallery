import { GalleryType } from "./gallery"

export type UserStore = {
  favoriteGallery: GalleryType[],
  addToFavorite: (item: GalleryType) => void
}
