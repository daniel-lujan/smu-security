"use client";

import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { useRouter } from "next/navigation";

const drawerWidth = 240;

export default function Sidebar() {
  const router = useRouter();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {["Iniciar Sesión", "Registrarse"].map((text, index) => (
            <ListItem
              key={text}
              disablePadding
              onClick={() => {
                if (index === 0) {
                  router.push("/login");
                } else {
                  router.push("/register");
                }
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 ? <LoginIcon /> : <HowToRegIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
