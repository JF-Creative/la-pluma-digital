"use client";

import Image from "next/image";
import Link from "next/link";
import styles from './header.module.css'

export default function Header() {
  
  const menu = [
    { label: "Inicio", href: "#" },
    { label: "Miniserie", href: "#" },
    { label: "Reportaje", href: "#" },
    { label: "Escrito", href: "#" },
    { label: "Estructura", href: "#" },
    { label: "Nosotros", href: "#" }
  ];

  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
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
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          {menu.map((item, index) => (
            <li key={index} className="nav-item">
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
