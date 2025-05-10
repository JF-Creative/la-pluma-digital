"use client"
import {data} from "@/data/sanJorge";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from '@/styles/list-projects.module.css'
export default function Pia2025() {

const pathName = usePathname();


  return (
    <div className={styles.secContainer}>
      <div className={styles.cardContainer}>
      {data.map((item, index) => {
        const seemore = `${pathName}/${item.redirect}`
        return(
          <div className={styles.cardProject} key={index}>
            <h2>{item.projectName}</h2>
            <div className={styles.imgContainer}>
              <Image src={item.image.src} alt={item.image.alt} fill className={styles.cardImg}/>
            </div>
            <div className={styles.description}>
            <p>
            {item.projectDescription}
            </p>
            </div>
            <Link href={seemore}>
            <button className={styles.viewProject}>Ver proyecto</button>
            </Link>
          </div>
        )
      })}
    </div>
    <Link className="return" href="/">Volver a inicio</Link>
    </div>
  );
}
