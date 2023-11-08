import { useParams } from "react-router-dom"
import { useOneGalleryQuery } from "../hooks/useGalleryQuery";
import Loading from "../components/Loading";
import { Box } from "@mui/material";
import PictureDetails from "../components/PictureDetails";



const ImageDetails = (): JSX.Element => {
  const { id = '' } = useParams();
  const { data: picture, isLoading } = useOneGalleryQuery(id);

  if(isLoading) return <Loading />

  return (
    <Box display='flex' height='80vh' alignItems='center' >
      {picture && <PictureDetails picture={picture} />}
    </Box>
  )
}

export default ImageDetails
