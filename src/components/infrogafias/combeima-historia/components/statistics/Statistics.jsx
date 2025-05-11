import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./statistics.module.css";
import tabla1 from "../../media/primera pregunta.png";
import tabla2 from "../../media/segunda pregunta.png";
import tabla3 from "../../media/tercera pregunta.png";

export default function Statistics() {
  const [dataImage, setDataImage] = useState(tabla1);

  const btns = [
    { name: "Pregunta 1", src: tabla1 },
    { name: "Pregunta 2", src: tabla2 },
    { name: "Pregunta 3", src: tabla3 },
  ];

  return (
    <div className={styles.data_statics_Container}>
      <div className={styles.btn_data_container}>
        {btns.map((btn) => (
          <div
            className={styles.btn_container}
            key={btn.name}
            onClick={() => setDataImage(btn.src)}
          >
            <button className={styles.btn_statics}>{btn.name}</button>
          </div>
        ))}
        <div className={styles.btn_container}>
          <Link
            href={
              "https://drive.google.com/drive/folders/1wxb8r-5cfYJy5QtVAJOGHNKFbtto-rjB?usp=drive_link"
            }
            target="blank"
          >
            <button className={styles.btn_statics}>Ver más</button>
          </Link>
        </div>
      </div>
      <div className={styles.image_data_container}>
        <div className={styles.img_container_tur}>
          <Image
            src={dataImage}
            alt="Estadísticas Turismo"
            fill
            className={styles.imageStatics}
          />
        </div>
      </div>
    </div>
  );
}
