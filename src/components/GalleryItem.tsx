import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { GalleryType } from "../types/gallery"
import { useNavigate } from "react-router-dom";
import LikeButton from "./LikeButton";

const GalleryItem = ({ item: { author, download_url, id } }: { item: GalleryType }): JSX.Element => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        width: 245,
        boxShadow: 8,
        transition: 'all 300ms ease-out',
        ":hover": { transform: 'scale(1.1)' }
      }}
    >
      <CardMedia
        onClick={() => navigate(`${id}/details`)}
        component='img'
        height={180}
        image={download_url}
        alt={author}
        sx={{ objectFit: 'cover', cursor: 'pointer',}}
      />
      <CardContent>
        <Typography variant="body2" textAlign='center' color="text.secondary">
          {author}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'end' }} disableSpacing>
        <LikeButton />
      </CardActions>
    </Card>
  )
}

export default GalleryItem
