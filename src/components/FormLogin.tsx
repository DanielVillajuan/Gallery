import { Box, Button, TextField, Typography } from "@mui/material";
import { UserCredentialType } from "../types/auth";
import { useFormik } from 'formik';
import { validationSchema, initialValues } from "../constant";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const FormLogin = (): JSX.Element => {
  const login = useAuth(state => state.login);
  const navigate = useNavigate();

  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit: (user: UserCredentialType): void => { login(user.username); formik.resetForm(); navigate(-1)}
  });

  return (
    <Box sx={{ width: '50%', gap: 2, boxShadow: 3, padding: 4, paddingX: 5, borderRadius: 4, background: 'white'}} >
        <Typography textAlign='center' fontSize={32}>Entrar</Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            margin="dense"
            name="username"
            label="Usuario"
            fullWidth
            variant="standard"
            autoComplete="off"
            inputProps={{ maxLength: 40 }}
            onChange={formik.handleChange}
            value={formik.values.username}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            margin="dense"
            name="password"
            label="Constraseña"
            type="password"
            fullWidth
            variant="standard"
            autoComplete="off"
            inputProps={{ maxLength: 100 }}
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Box display='flex' gap={2} width='100%' justifyContent='center' paddingTop={5}>
            <Button sx={{width: '40%'}} variant="contained" type="submit">Iniciar sesión</Button>
          </Box>
        </form>
      </Box>
  )
}

export default FormLogin;
