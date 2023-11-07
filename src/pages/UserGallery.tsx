import GalleryContainer from "../components/GalleryContainer";
import Title from "../components/Title";
import EmptyState from "../components/EmptyState";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../enums/routes";
import { useGallery } from "../hooks/useGallery";

const UserGallery = (): JSX.Element => {
  const favorites = useGallery((state) => state.favorites)
  const navigate = useNavigate();

  const goHome = (): void => navigate(ROUTES.HOME);

  return (
    <>
      <Title text="Mi favoritos" />
      {favorites.length > 0 ?
        <GalleryContainer list={[]} /> : <EmptyState buttonAction={goHome} buttonText='Ir a inicio' text='¡Ups Nada por aqui!'  />}
    </>
  )
}

export default UserGallery;
