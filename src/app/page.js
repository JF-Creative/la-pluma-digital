import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.indexContainer}>
      <div className={styles.cardContainer1}>
        <h1>¡Bienvenido a la sustenación PIA!</h1>
        <div className={styles.imageContainer}>
          <Image
            src="/cun.jpg"
            alt="CUN Sede Ibagué"
            fill
            className={styles.image}
          />
        </div>
        <p className={styles.description}>Este espacio está pensado en esta ocasión para la sustenación PIA Semestre A 2025. De click en el botón para empezar.</p>
        <Link href="/PIA/2025"><button className={styles.button}>Ver proyectos PIA 2025</button></Link>
      </div>
    </div>
  );
}
