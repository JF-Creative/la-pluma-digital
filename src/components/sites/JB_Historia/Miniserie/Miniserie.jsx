import styles from "./miniserie.module.css";
import { cardsInfo } from "./data";

export default function Miniserie() {
  return (
    <div className={styles.mainSite}>
      <div className={styles.historie_card_container}>
        {cardsInfo.map((cardItem, index) => {
          return (
            <div key={index} className={styles.historie_card}>
              <div className={styles.cardImage}>{cardItem.cardImage.alt}</div>
              <div className={styles.tituloCard}>
                <h2 className={styles.video_numCap}>{cardItem.numCapitulo}</h2>
                <h1 className={styles.video_title}>{cardItem.tituloCard}</h1>
              </div>
              <div className={styles.descriptionCard}>
                <p>{cardItem.description}</p>
              </div>
              <button className={styles.btn_more}>Ver más</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
