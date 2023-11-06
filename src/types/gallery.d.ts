export type GalleryType = {
  id: string,
  author: string,
  width: number,
  height: number,
  url: string,
  download_url: string
}

export type GalleryStore = {
  galleryList: GalleryType[],
  setGalleryList: (galleryList: GalleryType[]) => void,
  page: number,
  limit: number
}


export type QueryGalleryType = {
  nextCursor?: number,
  gallery: GalleryType[]
}
