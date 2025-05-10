import { useState, useEffect } from "react";

import styles from "./nosotros.module.css";
import Image from "next/image";
import { data } from "./data";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
  const handleEsc = (e) => {
    if (e.key === "Escape") setSelectedImage(null);
  };
  window.addEventListener("keydown", handleEsc);
  return () => window.removeEventListener("keydown", handleEsc);
}, []);

  return (
    <>
      <div className={styles.ecomemoria_gallery_container}>
        {data.map((image) => (
          <figure className={styles.ecomemoria_gallery_image_container}>
            <div
              className={styles.ecomemoria_gallery_image_contain}
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt="Fotografía Proyecto EcoMemoria"
                fill
                className={styles.ecomemoria_gallery_image}
                key={image.src}
              />
            </div>
            <figcaption>Proceso de trabajo EcoMemoria</figcaption>
          </figure>
        ))}
      </div>
      {selectedImage && (
        <div
          className={styles.ecomemoria_modal_overlay}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className={styles.ecomemoria_modal_content}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Vista ampliada"
              width={800}
              height={500}
              className={styles.modal_image}
            />
            <button
              className={styles.ecomemoria_modal_close}
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
