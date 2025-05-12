import styles from './estructura.module.css'
import Image from 'next/image'
import { imageInfo } from './data'

export default function Miniserie() {

    return (
        <div className={styles.infoContainer}>
            <div className={styles.infoBloq}>
                <div className={styles.infoItem}>
                    <section className={styles.section}>
                        <h1>INFORMACIÓN GENERAL</h1>
                        <p>Dentro del Proyecto Integrador de Comunicación Social del semestre A2025, se toma como temática principal la flora y la fauna representativa del Jardín Botánico San Jorge, teniendo en cuenta varias asignaturas como lo son: Producción Digital, Taller de Televisión Básica, Periodismo Digital y Producción de Contenidos Informativos.</p>
                        <p>Para este proyecto se cuenta con entrevistas a guías y a personas expertas en el tema.</p>
                    </section>
                    <section className={styles.sectionImage}>
                        {imageInfo.bloq1.map(
                            (image) => (
                                <div key={image.label} className={styles.imageContain}>
                                    <Image src={image.src} alt={image.label} className={image.className} fill />
                                </div>
                            )
                        )}
                    </section>
                    <section className={styles.section}>
                        <p>Dentro de la asignatura de Producción Digital se hizo una creación de logos en PNG y un esqueleto de página web teniendo en cuenta fuentes y paleta de colores.</p>
                    </section>
                    <section className={styles.sectionImage}>
                        {imageInfo.bloq2.map(
                            (image) => (
                                <div key={image.label} className={styles.imageContain}>
                                    <Image src={image.src} alt={image.label} className={image.className} fill />
                                </div>
                            )
                        )}
                    </section>
                </div>
            </div>
            <div className={styles.infoBloq2}>
                <section className={styles.sectionList}>
                    <ul>
                        <li>Para Taller de Televisión Básica se realizaron 3 episodios en forma de crónica y de reportaje combinando múltiples movimientos de cámara y planos de fotografía, así como una buena edición para un resultado final.</li>
                        <li>En Periodismo Digital se llevó a cabo un reportaje escrito multimedia con diferentes imágenes, videos e hipervínculos.</li>
                        <li>Finalmente, se realizó un pódcast en formato de reportaje para la asignatura de Producción de Contenidos Informativos.</li>
                    </ul>
                    <h2>Dato Curioso:</h2>
                </section>
                <section className={styles.sectionImage}>
                    <figure className={styles.document_image_container_b2}>
                        <div className={styles.imageContain}>
                            <Image
                                src={imageInfo.bloq3[0].src}
                                alt={imageInfo.bloq3[0].label}
                                fill
                                className={imageInfo.bloq3[0]}
                            />
                        </div>
                        <figcaption className={styles.document_description}>
                            <em>
                                {imageInfo.bloq3[0].label}
                            </em>
                        </figcaption>
                    </figure>
                    <figure className={styles.document_image_container_b2}>
                    <div className={styles.imageContain}>
                            <Image
                                src={imageInfo.bloq3[1].src}
                                alt={imageInfo.bloq3[1].label}
                                fill
                                className={imageInfo.bloq3[1]}
                            />
                        </div>
                        <figcaption className={styles.document_description}>
                            <em>
                                {imageInfo.bloq3[1].label}
                            </em>
                        </figcaption>
                    </figure>
                </section>
            </div>
        </div>
    )
}