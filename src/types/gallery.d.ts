export type GalleryType = {
  id: string,
  author: string,
  width: number,
  height: number,
  url: string,
  download_url: string,
  isFavorite?: boolean
}

export type GalleryStore = {
  favorites: GalleryType[],
  addToFavorite: (item: GalleryType) => void,
  page: number,
  setPage: () => void
}


export type QueryGalleryType = {
  nextCursor?: number,
  gallery: GalleryType[]
}
