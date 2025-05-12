import styles from "../page.module.css";
import Image from "next/image";

export default function Inicio({ setCurrentView }) {
  const shortcuts = [
    { src: "/pulmon_verde/inicio/Reportaje escrito.png", label: "Reportaje Escrito", view: "escrito", href: "#" },
    { src: "/pulmon_verde/inicio/Mini serie.png", label: "Miniserie", view: "miniserie", href: "#" },
    { src: "/pulmon_verde/inicio/Reportaje sonoro.png", label: "Reportaje Sonoro", view: "reportaje", href: "#" },
    { src: "/pulmon_verde/inicio/Información general.png", label: "Información General", view: "estructura", href: "#" },
    { src: "/pulmon_verde/inicio/Galería.png", label: "Galería", view: "galeria", href: "#" },
    { src: "/pulmon_verde/inicio/Bibliografía.png", label: "Bibliografía", view: "bibliografia", href: "#" }
  ];


  return (
    <div className={styles.indexMainContainer}>
      <div className={styles.indexBloq}>
        <div className={styles.subBloq1}>
          <div className={styles.subBloq3} onClick={() => setCurrentView("escrito")}>
            <div className={styles.imageMenuContainer}>
              <Image
                src="/pulmon_verde/Inicio/Repotaje escrito.png"
                alt="Reportaje escrito"
                fill
                className={styles.Image}
              />
            </div>
            <h4>Lleno de deslumbrantes especies de fauna y flora que lo rodean, el Jardín Botánico San Jorge se bautiza como un emblema NATURAL del departamento del Tolima. Conoce el Jardín Botánico San Jorge.</h4>
          </div>
          <div className={styles.subBloq4}>
            <div className={styles.subBloq6}>
              <div className={styles.subBloq5} onClick={() => setCurrentView("miniserie")}>
                <div className={styles.imageMenuContainer}>
                  <Image
                    src="/pulmon_verde/Inicio/Mini serie.png"
                    alt="Reportaje escrito"
                    fill
                    className={styles.Image}
                  />
                </div>
                <h4>El Jardín Botánico San Jorge, un espacio lleno de maravillosa fauna y una deslumbrante flora. Explora cada una a profundidad en este viaje visual.</h4>
              </div>
              <div className={styles.subBloq7} onClick={() => setCurrentView("reportaje")}>
                <div className={styles.imageMenuContainer}>
                  <Image
                    src="/pulmon_verde/Inicio/Reportaje sonoro.png"
                    alt="Reportaje escrito"
                    fill
                    className={styles.Image}
                  />
                </div>
                <h4>¿Te gustan los pódcast? No puedes perderte este reportaje sonoro del pulmón verde de Ibagué.</h4>
              </div>
            </div>
            <div className={styles.subBloq3} onClick={() => setCurrentView("bibliografia")}>
              <div className={styles.imageMenuContainer}>
                <Image
                  src="/pulmon_verde/Inicio/Bibliografía.png"
                  alt="Reportaje escrito"
                  fill
                  className={styles.Image}
                />
              </div>
              <h4>Si quieres estudiar lo mucho que podemos encontrar en el Jardín Botánico San Jorge, este apartado es para ti.</h4>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.indexBloq}>
        <div className={styles.subBloq2}>
          <div className={styles.subBloq5} onClick={() => setCurrentView("estructura")}>
            <div className={styles.imageMenuContainer}>
              <Image
                src="/pulmon_verde/Inicio/Información general.png"
                alt="Reportaje escrito"
                fill
                className={styles.Image}
              />
            </div>
            <h4>Acompáñanos en el proceso creativo de este gran proyecto y descubre el paso a paso de cada uno de los apartados que abarca este mismo.</h4>
          </div>
          <div className={styles.subBloq5} onClick={() => setCurrentView("galeria")}>
            <div className={styles.imageMenuContainer}>
              <Image
                src="/pulmon_verde/Inicio/Galería.png"
                alt="Reportaje escrito"
                fill
                className={styles.Image}
              />
            </div>
            <h4>Deleita tus ojos con estas maravillosas fotografías del Jardín Botánico San Jorge</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
