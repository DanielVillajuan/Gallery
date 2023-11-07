import { UseQueryResult, useMutation, useQuery, useQueryClient } from "react-query";
import { GalleryType } from "../types/gallery";
import { http } from "../services";
import { useGallery } from "./useGallery";


export const useScrollGalleryQuery = () => {
  const page = useGallery((state) => state.page);
  const setPage = useGallery((state) => state.setPage);
  const queryClient = useQueryClient();

  const fetchGallery = async () => {
    const data =  await http.get<GalleryType[]>(import.meta.env.VITE_APP_ENDPOINT_LIST + `?page=${page}&limit=9`)
    const preData = queryClient.getQueryData<GalleryType[]>('gallery') || []
    setPage();
    return preData.concat(data)
  }
  return useQuery<GalleryType[]>(
    ['gallery'],
    fetchGallery,
    { refetchOnWindowFocus: false, refetchOnMount: false }
  );
}

export const useOneGalleryQuery = (id: string): UseQueryResult<GalleryType> => {
  const queryClient = useQueryClient();

  const fetchGallery = async () => {
    const data =  await http.get<GalleryType>(import.meta.env.VITE_APP_ENDPOINT_ID + id + import.meta.env.VITE_APP_ENDPOINT_DETAILS)
    const oneG = queryClient.getQueryData<GalleryType>(data.id)
    return {...data, isFavorite: Boolean(oneG?.isFavorite)}
  }

  return useQuery<GalleryType>([id], fetchGallery);
}

export const useMutationOneGallery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (picture: GalleryType) => new Promise<GalleryType>((resolve) => resolve(picture)),
    onSuccess: (data: GalleryType) => {
      queryClient.setQueryData([data.id], {...data, isFavorite: !data.isFavorite })
      queryClient.setQueryData(['gallery'], (preData?: GalleryType[]) => {
        if(preData == null) return []
        return preData.map(p => {
          if(p.id === data.id) return { ...p, isFavorite: !p.isFavorite }
          return p
        })
      })
    }
  })
}
