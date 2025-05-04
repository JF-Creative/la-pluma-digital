"use client";

import Image from "next/image";
import Link from "next/link";
import "@/styles/header.css";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menu = [
    { label: "Inicio", href: "/" },
    { label: "PIA 2025", href: "/PIA/2025" },
    { label: "Otros Proyectos", href: "/otros-proyectos" },
    { label: "Podcast", href: "/podcast" },
    { label: "NotaNet", href: "/nota-net" },
    { label: "¿Pluma Digital?", href: "/about" }
  ];

  return (
    <header>
      <div className="logoContainer">
        <Link href="/">
          <Image
            src="/Logo1.png"
            alt="La Pluma Digital"
            fill
            className="logoHeader"
            priority
          />
        </Link>
      </div>
      <nav>
        <ul className="nav-list">
          {menu.map((item, index) => (
            <li key={index} className="nav-item">
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
