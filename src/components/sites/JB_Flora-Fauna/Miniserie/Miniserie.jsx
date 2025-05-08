import styles from './miniserie.module.css';

export default function Miniserie() {
    const cardsInfo = [
        {
            cardImage: "Soy una imagen del video",
            iframeCode: "Seré el código del iframe",
            description: "En este episodio vamos a visitar el Jardín Botánico San Jorge para conocer los diferentes animales que viven allí. Vamos a ver muchas aves de colores, mariposas, ranas y otros animales que se esconden dentro de las plantas. También hablaremos con una experta que nos contará algunos datos curiosos sobre ellos. Adéntrate con nosotros en una aventura llena de naturaleza y descubrimientos."
        },
        {
            cardImage: "Soy una imagen del video",
            iframeCode: "Seré el código del iframe",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            cardImage: "Soy una imagen del video",
            iframeCode: "Seré el código del iframe",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
    ];

    return (
        <div className={styles.speciesVideoContainer}>
            <section className={styles.section_historie}>
                <p className={styles.species_video_description}>A los pies de la cordillera central, entre la niebla y el canto de las aves, el Jardín Botánico San Jorge guarda un universo oculto que vibra con la vida. “El Pulmón Verde” es una miniserie documental de tres episodios que exploran la riqueza natural de este lugar presente en Ibagué, siendo los dos primeros narrados en forma de crónica y el tercero en forma de reportaje.</p>
                <ul className={styles.species_section_historie_list}>
                    <li>El primer episodio hablará sobre las diferentes especies de fauna que se pueden encontrar a lo largo y ancho del Jardín Botánico San Jorge.</li>
                    <li>En el segundo episodio, se llevará a cabo la temática de la flora del Jardín Botánico San Jorge y la importancia de la conservación del mismo.</li>
                    <li>El tercer episodio, será un resumen de la importancia de los dos primeros, donde se abordará lo importante de cada uno.</li>
                </ul>
            </section>
            <div className={styles.species_historie_card_container}>
                {cardsInfo.map((cardItem, index) => {
                    return (
                        <div key={index} className={styles.species_historie_card}>
                            <div className={styles.species_cardImage}>{cardItem.cardImage}</div>
                            <div className={styles.species_tituloCard}><h1>{cardItem.tituloCard}</h1></div>
                            <div className={styles.species_descriptionCard}><p>{cardItem.description}</p></div>
                            <button className={styles.species_btn_more}>Ver ahora</button>
                        </div>)
                }
                )}
            </div>
        </div>
    )
}
