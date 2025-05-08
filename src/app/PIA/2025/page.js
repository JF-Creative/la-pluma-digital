"use client"
import { materias as dataMaterias } from "@/data/pia2025";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import '@/styles/list-projects.css'

export default function Pia2025() {
  const pathName = usePathname();

  return (
    <div className="sec-container">
      <div className="card_container">
        {dataMaterias.materias.map((item, index) => {
          const seemore = `${pathName.replace(/\/$/, "")}/${item.redirect}`;
          return (
            <div className="card" key={index}>
              <h2>{item.info.idSemestre}</h2>
              <div className="img-container">
                <Image src={item.cardImg.src} alt={item.cardImg.alt} fill className="cardImg" />
              </div>
              <div className="description">
                {/* <h3>{item.info.tema}</h3> */}
                <p>
                  {item.info.tema}, abordado desde
                  las siguientes materias:
                </p>
                <ul>
                  {item.info.cursos.map((curso, i) => (
                    <li key={i}>{curso}</li>
                  ))}
                </ul>
              </div>
              <Link href={seemore}>
                <button>Ver este PIA</button>
              </Link>
            </div>
          );
        })}
      </div>
      <Link className="return" href="/">Volver a inicio</Link>
    </div>
  );
}
