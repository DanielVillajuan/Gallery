import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"
import { ROUTES } from "../enums/routes";

const ProtectedRoute = ({ Component } : { Component: () => JSX.Element }): JSX.Element => {
  const isAuth = useAuth((state) => state.isAuth);

  return isAuth ? <Component /> : <Navigate to={ROUTES.LOGIN} />
}

export default ProtectedRoute
