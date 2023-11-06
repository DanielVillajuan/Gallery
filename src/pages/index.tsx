import { Box, Button } from "@mui/material";
import GalleryContainer from "../components/GalleryContainer";
import Title from "../components/Title";

import { useInfiniteGalleryQuery } from "../hooks/useGalleryQuery";
import Loading from "../components/Loading";

const Home = (): JSX.Element => {
  const { data: galleryList, isLoading, fetchNextPage } = useInfiniteGalleryQuery();

  return (
    <>
      <Title text="Galeria de Fotos" />
      { isLoading ? <Loading /> :
        <>
          <GalleryContainer list={galleryList} />
          <Box display='flex' justifyContent='center' alignItems='center' height='10rem'>
            <Button onClick={() => fetchNextPage()}> Ver mas </Button>
          </Box>
        </>
      }
    </>
  )
}

export default Home
