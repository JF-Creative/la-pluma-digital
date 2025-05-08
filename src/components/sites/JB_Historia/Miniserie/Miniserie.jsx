import styles from './miniserie.module.css';

export default function Miniserie() {
    const cardsInfo = [
        { cardImage: "Soy una imagen del video", tituloCard: "Titulo1", iframeCode: "Seré el código del iframe", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { cardImage: "Soy una imagen del video", tituloCard: "Titulo2", iframeCode: "Seré el código del iframe", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { cardImage: "Soy una imagen del video", tituloCard: "Titulo3", iframeCode: "Seré el código del iframe", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }
    ];

    return (
         <div>
            <div className={styles.historie_card_container}>
                {cardsInfo.map((cardItem, index) => {
                    return (
                        <div key={index} className={styles.historie_card}>
                            <div className={styles.cardImage}>{cardItem.cardImage}</div>
                            <div className={styles.tituloCard}><h1>{cardItem.tituloCard}</h1></div>
                            <div className={styles.descriptionCard}><p>{cardItem.description}</p></div>
                            <button className={styles.btn_more}>Ver más</button>
                        </div>)
                }
                )}
            </div>
         </div>
    )
}
