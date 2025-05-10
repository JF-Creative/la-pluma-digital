"use client"
import { materias as dataMaterias } from "@/data/pia2025";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from '@/styles/list-projects.module.css'

export default function Pia2025() {
  const pathName = usePathname();

  return (
    <div className={styles.secContainer}>
      <div className={styles.cardContainer}>
        {dataMaterias.materias.map((item, index) => {
          return (
            <div className={styles.cardProject} key={index}>
              <h2>{item.info.idSemestre}</h2> 
              <div className={styles.imgContainer}>
                <Image src={item.cardImg.src} alt={item.cardImg.alt} fill className={styles.cardImg} />
              </div>
              <div className={styles.description}>
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
              <Link href={`${pathName.replace(/\/$/, "")}/${item.redirect}`}>
                <button className={styles.viewProject}>Ver este PIA</button>
              </Link>
            </div>
          );
        })}
      </div>
      <Link className="return" href="/">Volver a inicio</Link>
    </div>
  );
}
