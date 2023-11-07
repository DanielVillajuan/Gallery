import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { GalleryType } from "../types/gallery"
import { useNavigate } from "react-router-dom";
import LikeButton from "./LikeButton";

const GalleryItem = ({ item }: { item: GalleryType }): JSX.Element => {
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
        onClick={() => navigate(`${item.id}/details`)}
        component='img'
        height={180}
        image={item.download_url}
        alt={item.author}
        sx={{ objectFit: 'cover', cursor: 'pointer',}}
      />
      <CardContent>
        <Typography variant="body2" textAlign='center' color="text.secondary">
          {item.author}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'end' }} disableSpacing>
        <LikeButton item={item} />
      </CardActions>
    </Card>
  )
}

export default GalleryItem
