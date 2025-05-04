import "@/styles/globals.css";

export const metadata = {
  title: "La Pluma Digital",
  description: "Proyecto creado para estudiantes de la CUN Ibagué",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
