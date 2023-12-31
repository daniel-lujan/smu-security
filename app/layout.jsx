import Navbar from "@components/navbar";
import "./globals.css";
import Sidebar from "@components/sidebar";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const metadata = {
  title: "SMU Security",
  description: "Sistema de Movilidad Urbana: Seguridad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Navbar />
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            {children}
          </Box>
        </Box>
      </body>
    </html>
  );
}
