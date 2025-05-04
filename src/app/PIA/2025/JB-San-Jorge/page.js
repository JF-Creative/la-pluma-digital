"use client"
import data from "@/data/sanJorge.json";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import '@/styles/list-projects2.css'

export default function Pia2025() {

const pathName = usePathname();


  return (
    <div className="sec-container">
      <div className="card_container">
      {data.map((item, index) => {
        const seemore = `${pathName}/${item.redirect}`
        return(
          <div className="card" key={index}>
            <h2>{item.projectName}</h2>
            <div className="img-container">
              <Image src={item.image.src} alt={item.image.alt} fill className="cardImg"/>
            </div>
            <div className="description">
            <p>
            {item.projectDescription}
            </p>
            </div>
            <Link href={seemore}>
            <button>Ver proyecto</button>
            </Link>
          </div>
        )
      })}
    </div>
    <Link className="return" href="/">Volver a inicio</Link>
    </div>
  );
}
