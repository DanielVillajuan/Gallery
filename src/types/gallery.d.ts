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
  page: number,
  setPage: () => void
}

