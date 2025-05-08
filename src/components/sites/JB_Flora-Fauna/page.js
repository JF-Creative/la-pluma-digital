import styles from "./page.module.css";
import Link from "next/link";
import stylesHeader from './header.module.css'
import { useState } from "react";

import Miniserie from "./Miniserie/Miniserie";
import Reportaje from "./Reportaje/Reportaje";
import Escrito from "./Escrito/Escrito";
import Estructura from "./Estructura/Estructura";
import Nosotros from "./Nosotros/Nosotros"
import Footer from "./modules/Footer/Footer";

export default function Site() {

 const [currentMain, setMain] = useState(Inicio())


  const menu = [
    { label: "Inicio", component: Inicio(), href: "#" },
    { label: "Reportaje Escrito", component: <Escrito/>, href: "#"},
    { label: "T.V. Básica", component: <Miniserie/>, href: "#"},
    { label: "Reportaje Sonoro", component: <Reportaje/>, href: "#"},
    { label: "Contenido Informativo", component: <Estructura/>, href: "#"},
    { label: "Galería", component: <Nosotros/>, href: "#"},
  ];


  return (
    <div className={styles.site}>
      <div className={stylesHeader.header}>
      <div className={stylesHeader.logoContainer}>
        <Link href="#">
          {/* <Image
            src="/Logo1.png"
            alt="La Pluma Digital"
            fill
            className="logoHeader"
            priority
          /> */}<h1>Hola. Soy un Logo</h1>
        </Link>
      </div>
      <nav className={stylesHeader.nav}>
        <ul className={stylesHeader.nav_list}>
          {menu.map((item) => (
            <li key={item.label} className="nav-item">
              <Link href={item.href} onClick={()=>setMain(item.component)}>{item.label}</Link>
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
        {currentMain}
      </div>
      <Footer />
    </div>
  );
}



function Inicio(){
  
  const shortcuts = ["shortcut 1", "shortcut 2", "shortcut 3", "shortcut 4"];
  
  return(
    <>
    <div className={styles.video_container}>Video en dron</div>
        <div className={styles.shortcuts}>
          {shortcuts.map((shortcut) => (
            <h1 key={shortcut} className={styles.shortcut_item}>
              {shortcut}
            </h1>
          ))}
        </div>
    </>
  )
}