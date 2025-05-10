import styles from './estructura.module.css'
import Image from 'next/image'
import {data} from './data'


export default function Gallery(){
    return (
        <div className={styles.ecomemoria_gallery_container}>
            <figure className={styles.document_image_container}>
        {/* <div className={styles.document_image}>
          <Image src="/ecomemoria_media/4.jpg" alt="Fotos_JB-San-Jorge" width={1462} height={1000} />
        </div>
        <figcaption>Fotografías de archivo - Martha Perdomo.</figcaption> */}
        <h1>Estamos en construcción</h1>
      </figure>
        </div>
    )
}