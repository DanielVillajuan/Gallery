import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { GalleryType } from "../types/gallery";
import { useMutationOneGallery } from "../hooks/useGalleryQuery";
import ConfirmModal from "./ConfirmModal";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { ROUTES } from "../enums/routes";
import { useNavigate } from "react-router-dom";

const LikeButton = ({ item }: { item: GalleryType }): JSX.Element => {
  const [open, setOpen] = useState(false);
  const isAuth = useAuth((state) => state.isAuth);
  const navigate = useNavigate();
  const { mutate } = useMutationOneGallery();

  const handleModal = (): void => setOpen(!open);

  const handleChange = (): void => {
    if(!isAuth) return navigate(ROUTES.LOGIN)
    if(!item.isFavorite) mutate(item)
    else handleModal()
  }

  return (
    <>
      <IconButton onClick={handleChange} aria-label="add to favorites">
        <FavoriteIcon color={item.isFavorite ? 'error' : 'inherit'} />
      </IconButton>
      <ConfirmModal
        open={open}
        onClose={handleModal}
        onSuccess={() => { mutate(item); handleModal(); }}
        text="Se eliminara de favoritos la imagen"
      />
    </>
  )
}

export default LikeButton
