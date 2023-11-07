import { Box, Button, Typography } from "@mui/material";
import { GalleryType } from "../types/gallery";
import { BORDER_COLOR, LOREM_TEXT_DESCRIPTION, RADIUS } from "../constant";
import { onDownloadPicture } from "../helper";
import { ArrowBackIosOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useOneGalleryQuery } from "../hooks/useGalleryQuery";
import LikeButton from "./LikeButton";
import Loading from "./Loading";

const PictureDetails = ({ picture } : { picture: GalleryType }): JSX.Element => {
  const navigate = useNavigate();

  const { data, isLoading } = useOneGalleryQuery(picture.id);

  const goToBack = (): void => navigate(-1);

  if(isLoading) return <Loading />

  return (
    <Box>
      <Button onClick={goToBack} sx={{ marginBottom: 2}}><ArrowBackIosOutlined /> Volver</Button>
      <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center' borderRadius={RADIUS} border={1} borderColor={BORDER_COLOR}>
        <Box component='img' src={picture?.download_url} width='60%' alt={picture?.author} borderRadius={RADIUS} />
        <Box display='flex' flexDirection='column' width='40%' padding={4}>
          <Typography variant='h4' >{picture?.author}</Typography>
          <Typography paragraph>{LOREM_TEXT_DESCRIPTION}</Typography>
          <Box>
            <Typography variant='subtitle2'>Ancho: {picture?.width}px</Typography>
            <Typography variant='subtitle2'>Alto: {picture?.height}px</Typography>
          </Box>
          <Box display='flex' width='100%' justifyContent='end' marginTop={2} gap={2} >
            {data && <LikeButton item={data}/>}
            <Button variant='contained' onClick={() => onDownloadPicture(picture)}>Descargar</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default PictureDetails
