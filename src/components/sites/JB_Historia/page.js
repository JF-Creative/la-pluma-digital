import styles from "./page.module.css";
import './globalStyles.css';
import Link from "next/link";
import stylesHeader from './header.module.css';
import { useState } from "react";
import Image from "next/image";
import Inicio from "./Inicio/Inicio";
import Miniserie from "./Miniserie/Miniserie";
import Reportaje from "./Reportaje/Reportaje";
import Escrito from "./Escrito/Escrito";
import Estructura from "./Estructura/Estructura";
import Nosotros from "./Nosotros/Nosotros";
import Footer from "./modules/Footer/Footer";

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
      default:
        return <Inicio setMain={setCurrentView} />;
    }
  };

  const menu = [
    { label: "Inicio", view: "inicio", href: "#" },
    { label: "Miniserie", view: "miniserie", href: "#" },
    { label: "Reportaje", view: "reportaje", href: "#" },
    { label: "Escrito", view: "escrito", href: "#" },
    { label: "Estructura", view: "estructura", href: "#" },
    { label: "Galería", view: "galeria", href: "#" },
  ];

  return (
    <div className={styles.site}>
      <div className={stylesHeader.header}>
        <div className={stylesHeader.logoContainer}>
          <Link href="#">
            <Image
              src="/Ecomemoria.png"
              alt="Ecomemoria"
              fill
              className="logoSiteHeader"
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