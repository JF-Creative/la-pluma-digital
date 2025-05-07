import "@/styles/globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

export const metadata = {
  title: "La Pluma Digital",
  description: "Proyecto creado para estudiantes de la CUN Ibagué",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
