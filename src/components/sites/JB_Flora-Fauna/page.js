import styles from "./page.module.css";
import Link from "next/link";
import stylesHeader from './header.module.css'
import Image from "next/image";
import { useState } from "react";
import Inicio from "./Inicio/Inicio";
import Miniserie from "./Miniserie/Miniserie";
import Reportaje from "./Reportaje/Reportaje";
import Escrito from "./Escrito/Escrito";
import Estructura from "./Estructura/Estructura";
import Nosotros from "./Nosotros/Nosotros"
import Footer from "./modules/Footer/Footer";
import Bibliografia from "./Bibliografia/Bibliografía";

export default function Site() {
  const [currentView, setCurrentView] = useState("inicio");

  const renderView = () => {
    switch (currentView) {
      case "inicio":
        return <Inicio setCurrentView={setCurrentView} />;
      case "miniserie":
        return <Miniserie />;
      case "reportaje":
        return <Reportaje />;
      case "escrito":
        return <Escrito />;
      case "estructura":
        return <Estructura />;
      case "galeria":
        return <Nosotros />;
      case "bibliografia":
        return <Bibliografia/>  
      default:
        return <Inicio setMain={setCurrentView} />;
    }
  };

  const menu = [
    { label: "Inicio", view: "inicio", href: "#" },
    { label: "Reportaje Escrito", view: "escrito", href: "#" },
    { label: "Miniserie", view: "miniserie", href: "#" },
    { label: "Reportaje Sonoro", view: "reportaje", href: "#" },
    { label: "Información General", view: "estructura", href: "#" },
    { label: "Galería", view: "galeria", href: "#" },
    { label: "Bibliografía", view: "bibliografia", href: "#" }
  ];

  return (
    <div className={styles.site}>
      <div className={stylesHeader.header}>
      <div className={stylesHeader.logoContainer}>
        <Link href="#">
          <Image
            src="/pulmon-verde.png"
            alt="pulmonHeaderLogo"
            width={100}
            height={100}
            className="logoHeader"
            priority
          /> 
        </Link>
      </div>
        <nav className={stylesHeader.nav}>
          <ul className={stylesHeader.nav_list}>
            {menu.map((item) => (
              <li key={item.label} className="nav-item">
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentView(item.view);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={stylesHeader.returnToPluma}>
          <h4 className={stylesHeader.sectionIdHeader}>Volver a Pluma Digital...</h4>
          <Link href="/"><button className={stylesHeader.plumaBTbck}>Volver a Inicio</button></Link>
          <Link href="../JB-San-Jorge"><button className={stylesHeader.plumaBTbck}>PIA San Jorge</button></Link>
        </div>
      </div>

      <div className={styles.mainSite}>
        {renderView()}
      </div>

      <Footer />
    </div>
  );
}
