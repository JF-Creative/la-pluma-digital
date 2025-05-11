import IndexMenuCard from "../modules/IndexMenuCard/indexMenuCard";
import styles from "../page.module.css";
import DroneVideo from "../modules/DronVideo/DronVideo";

export default function Inicio({ setCurrentView }) {
  const shortcuts = [
    { src: "/ecomemoria_media/Television_Basica.jpeg", label: "Miniserie", view: "miniserie", href: "#" },
    { src: "/ecomemoria_media/Portada Producción Digital.jpeg", label: "Reportaje", view: "reportaje", href: "#" },
    { src: "/ecomemoria_media/Periodismo Digital.jpeg", label: "Escrito", view: "escrito", href: "#" },
    { src: "/ecomemoria_media/Producción de contenidos informativos.jpeg", label: "Estructura", view: "estructura", href: "#" },
  ];

  console.log("setCurrentView en Inicio:", setCurrentView);


  return (
    <div className={styles.indexMainContainer}>
      <div className={styles.video_container}>
        <DroneVideo />
      </div>
      <div className={styles.shortcuts}>
        {shortcuts.map((shortcut) => (
          <IndexMenuCard
            key={shortcut.label}
            src={shortcut.src}
            label={shortcut.label}
            view={shortcut.view}
            setCurrentView={setCurrentView}
          />
        ))}
      </div>
    </div>
  );
}
