import Content from "@components/content";
import "./globals.css";

export const metadata = {
  title: "SMU Security",
  description: "Sistema de Movilidad Urbana: Seguridad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Content>{children}</Content>
      </body>
    </html>
  );
}
