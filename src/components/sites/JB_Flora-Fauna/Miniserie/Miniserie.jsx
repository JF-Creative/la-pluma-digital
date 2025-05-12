import { useState } from "react";
import Image from "next/image";
import styles from "./miniserie.module.css";
import { cardsInfo } from "./data";

export default function Miniserie() {
    const [selectedVideoId, setSelectedVideoId] = useState(null);
    
      const handleCardClick = (videoId) => {
        setSelectedVideoId(videoId);
      };
    
      const closeModal = () => {
        setSelectedVideoId(null);
      };
    
    return (
        <div className={styles.speciesVideoContainer}>
            <section className={styles.section_historie}>
                <h1 className={styles.title}>Miniserie El Pulmón Verde</h1>
                <p className={styles.species_video_description}>A los pies de la cordillera central, entre la niebla y el canto de las aves, el Jardín Botánico San Jorge guarda un universo oculto que vibra con la vida. “El Pulmón Verde” es una miniserie documental de tres episodios que exploran la riqueza natural de este lugar presente en Ibagué, siendo los dos primeros narrados en forma de crónica y el tercero en forma de reportaje.</p>
            </section>
            <div className={styles.historie_card_container}>
                    {cardsInfo.map((cardItem, index) => (
                      <div key={index} className={styles.historie_card}>
                        <div className={styles.cardImage}>
                          <Image
                            src={cardItem.cardImage.src}
                            alt={cardItem.cardImage.alt}
                            fill
                            className={styles.ImagePreviewVideo}
                          />
                        </div>
                        <div className={styles.tituloCard}>
                          <h2 className={styles.video_numCap}>{cardItem.numCapitulo}</h2>
                          <h1 className={styles.video_title}>{cardItem.tituloCard}</h1>
                        </div>
                        <div className={styles.descriptionCard}>
                          <p>{cardItem.description}</p>
                        </div>
                        <button
                          className={styles.btn_more}
                          onClick={() => handleCardClick(cardItem.videoId)}
                        >
                          Ver más
                        </button>
                      </div>
                    ))}
                  </div>
            
                  {selectedVideoId && (
                    <div className={styles.ecomemoria_modal_overlay} onClick={closeModal}>
                      <div
                        className={styles.ecomemoria_modal_content}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className={styles.videoWrapper}>
                          <iframe
                            width="1280"
                            height="720"
                            src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1&rel=0`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                          ></iframe>
                        </div>
                        <button
                          className={styles.ecomemoria_modal_close}
                          onClick={closeModal}
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  )}
        </div>
    )
}
