import { Box } from "@mui/material";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../enums/routes";
import { useEffect } from "react";
import FormLogin from "../components/FormLogin";


const Login = (): JSX.Element => {
  const isAuth = useAuth(state => state.isAuth);
  const navigate = useNavigate();

  useEffect(()=> {
    if(isAuth)
      navigate(ROUTES.HOME);
  },[isAuth, navigate])

  return (
    <Box display={'flex'} height={'90vh'} width={'100%'} alignItems={'center'} justifyContent={'center'} >
      <FormLogin />
    </Box>
  )
}

export default Login
