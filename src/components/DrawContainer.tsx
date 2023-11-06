import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, Typography } from "@mui/material";
import { BUTTONSNAVIGATE } from "../constant";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../enums/routes";
import { useAuth } from "../hooks/useAuth";

const DrawContainer = ({ isAuth, username, onClose }: { isAuth: boolean, username: string, onClose: () => void }): JSX.Element => {
  const logout = useAuth(state => state.logout);
  const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: "center", height: '100%', justifyContent: 'space-between', display: 'flex', flexDirection: 'column', paddingBottom: 1 }}>
      {isAuth ?
        <>
          <Box>
            <Box sx={{ width: "100%", padding: 4, gap: 2, alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
              <Avatar
                alt={username}
                src="/static/images/avatar/1.jpg"
                sx={{ width: 60, height: 60 }}
              />
              <Typography variant="h6" fontWeight='bold'>{username}</Typography>
            </Box>
            <Divider />
            <List>
              {BUTTONSNAVIGATE.map((item,i) => (
                <ListItem key={i} disablePadding>
                  <ListItemButton onClick={() => { navigate(item.path); onClose(); }} sx={{ textAlign: "center" }}>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => {navigate(ROUTES.HOME); onClose(); logout(); }} sx={{ textAlign: "center" }}>
                <ListItemText primary={'Cerrar sesión'} />
              </ListItemButton>
            </ListItem>
          </List>
        </>
        :
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => { navigate(ROUTES.LOGIN); onClose(); }} sx={{ textAlign: "center" }}>
              <ListItemText primary={'Iniciar sesion'} />
            </ListItemButton>
          </ListItem>
        </List>
      }
    </Box>
  );
}

export default DrawContainer
