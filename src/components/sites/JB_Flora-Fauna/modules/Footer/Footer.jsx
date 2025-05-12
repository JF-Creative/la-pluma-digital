import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const authors = [
    {
      name: "Jose Luis González    ",
      mail: "jose.gonzalezve@cun.edu.co",
      mailto: "mailto:jose.gonzalezve@cun.edu.co",
    },
    {
      name: "Paula Daniela Naranjo  ",
      mail: "paula.naranjo@cun.edu.co",
      mailto: "mailto:paula.naranjo@cun.edu.co",
    }
  ];

  return (
    <div className={styles.footerInfContainer}>
      <div className={styles.description_footer}>
        © 2025 El Pulmón Verde. El contenido aquí publicado es meramente con fines académicos en el marco del Proyecto Integrador A2025 de Comunicación Social de la CUN regional Ibagué.
      </div>
      <div className={styles.contacto}>
        <h1 className={styles.staff}>Elaborado por:</h1>
        <ul>
          {authors.map((author) => (
            <li key={author.mail}>
              {author.name}: <Link href={author.mailto}>{author.mail}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.logitos}>
        <div className={styles.log_contain}>
          <Image
            src="/sanjorge-cun.png"
            alt="PIA Combeima - CUN Ibagué"
            fill
            className={styles.logoInfFooter}
          />
        </div>
      </div>
    </div>
  );
}
