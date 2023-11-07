import GalleryContainer from "../components/GalleryContainer";
import Title from "../components/Title";
import EmptyState from "../components/EmptyState";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../enums/routes";
import { useScrollGalleryQuery } from "../hooks/useGalleryQuery";

const UserGallery = (): JSX.Element => {
  const navigate = useNavigate();
  const { data } = useScrollGalleryQuery()

  const onlyFavorites = data?.filter(p => p.isFavorite) || []

  const goHome = (): void => navigate(ROUTES.HOME);

  return (
    <>
      <Title text="Mi favoritos" />
      {onlyFavorites.length > 0 ?
        <GalleryContainer list={onlyFavorites} /> : <EmptyState buttonAction={goHome} buttonText='Ir a inicio' text='¡Ups Nada por aqui!'  />}
    </>
  )
}

export default UserGallery;
