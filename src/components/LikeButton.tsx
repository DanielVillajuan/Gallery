import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { GalleryType } from "../types/gallery";
import { useMutationOneGallery } from "../hooks/useGalleryQuery";

const LikeButton = ({ item } : { item: GalleryType }): JSX.Element => {

  const { mutate } = useMutationOneGallery()

  return (
    <IconButton onClick={() => { mutate(item) }} aria-label="add to favorites">
      <FavoriteIcon color={item.isFavorite? 'error': 'inherit'} />
    </IconButton>
  )
}

export default LikeButton
