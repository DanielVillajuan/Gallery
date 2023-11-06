import { ReactNode, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { useAuth } from "../hooks/useAuth";
import DrawContainer from "./DrawContainer";
import { Container } from "@mui/material";

const Navigation = ({ children }: { children: ReactNode }): JSX.Element => {
  const [isAuth, username] = useAuth((state) => [state.isAuth,state.username]);
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => setOpen(!open);

  return (
    <Box sx={{ display: "flex" }}>
      <Toolbar sx={{ position: 'absolute'}}>
        <IconButton color="inherit" onClick={handleDrawerToggle} >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer open={open} onClose={handleDrawerToggle} sx={{ "& .MuiDrawer-paper": { width: 250 } }} >
        <DrawContainer isAuth={isAuth} username={username} onClose={handleDrawerToggle} />
      </Drawer>
      <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingX: 6, paddingY: 4 }} >
        {children}
      </Container>
    </Box>
  );
}

export default Navigation;
