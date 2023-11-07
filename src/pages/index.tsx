import { Box, Button } from "@mui/material";
import { useScrollGalleryQuery } from "../hooks/useGalleryQuery";
import GalleryContainer from "../components/GalleryContainer";
import Title from "../components/Title";
import Loading from "../components/Loading";


const Home = (): JSX.Element => {
  const { data: galleryList = [], isLoading, refetch } = useScrollGalleryQuery();

  return (
    <>
      <Title text="Galeria de Fotos" />
      { isLoading ? <Loading /> :
        <>
          <GalleryContainer list={galleryList} />
          <Box display='flex' justifyContent='center' alignItems='center' height='10rem'>
            <Button onClick={() => { refetch() }}> Ver mas </Button>
          </Box>
        </>
      }
    </>
  )
}

export default Home
