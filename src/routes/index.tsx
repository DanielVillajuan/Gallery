import { Routes, Route } from 'react-router-dom';
import Home from '../pages';
import Login from '../pages/Login';
import UserGallery from '../pages/UserGallery';
import ImageDetails from '../pages/ImageDetails';
import NotFound from '../pages/NotFound';
import { ROUTES } from '../enums/routes';
import Navigation from '../components/Navigation';

export default function AppRoutes(): JSX.Element {
  return (
      <Navigation>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.USERGALLERY} element={<UserGallery />} />
          <Route path={ROUTES.IMGDETAILS} element={<ImageDetails />} />
          <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
        </Routes>
      </Navigation>
  )
}
