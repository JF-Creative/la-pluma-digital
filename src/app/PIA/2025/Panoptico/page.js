"use client"
import { materias } from "@/data/pia2025.json";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import '@/styles/list-projects.css'

export default function Pia2025() {

const pathName = usePathname();
const seemore = `${pathName}/${materias.redirect}`

  return (
    <div className="sec-container">
      <div className="card_container">
      {materias.map((item, index) => (
        <div className="card" key={index}>
          <h2>{item.info.idSemestre}</h2>
          <div className="img-container">
            <Image src={item.cardImg.src} alt={item.cardImg.alt} fill className="cardImg"/>
          </div>
          <div className="description">
          <h3>{item.info.tema}</h3>
          <p>
            El trabajo realizado por los estudiantes gira en torno a las
            actividades, actores y elmentos del {item.info.tema}, abordado desde
            las siguientes materias:
          </p>
          <ul>
            {item.info.cursos.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          </div>
          <Link href={seemore}>
          <button>Ver este PIA</button>
          </Link>
        </div>
      ))}
    </div>
    <Link className="return" href="/">Volver a inicio</Link>
    </div>
  );
}
