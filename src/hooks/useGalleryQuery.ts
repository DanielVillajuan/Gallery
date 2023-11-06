import { UseQueryResult, useInfiniteQuery, useQuery } from "react-query";
import { GalleryType, QueryGalleryType } from "../types/gallery";
import { http } from "../services";


export const useInfiniteGalleryQuery = () => {

  const fetchGallery = async ({ pageParam = 1 }: { pageParam?: number }) => {
    const data =  await http.get<GalleryType[]>(import.meta.env.VITE_APP_ENDPOINT_LIST + `?page=${pageParam}&limit=9`)
    return {
      gallery: data,
      nextCursor: pageParam + 1
    }
  }
  const { data, ...rest } = useInfiniteQuery<QueryGalleryType>(
    ['gallery'],
    fetchGallery,
    { refetchOnWindowFocus: false, getNextPageParam: (lastPage) => lastPage.nextCursor }
  );

  const flapMap = data?.pages.flatMap(({ gallery }) => gallery) || [];

  return { ...rest, data: flapMap }
}

export const useOneGalleryQuery = (id: string | undefined): UseQueryResult<GalleryType> => {

  const fetchGallery = async () => {
    const data =  await http.get<GalleryType>(import.meta.env.VITE_APP_ENDPOINT_ID + id + import.meta.env.VITE_APP_ENDPOINT_DETAILS)
    return data
  }

  return useQuery<GalleryType>(['OneGallery'], fetchGallery);
}
