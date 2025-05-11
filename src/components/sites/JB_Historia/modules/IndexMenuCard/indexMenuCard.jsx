import stylesIndexCard from './indexCard.module.css'
import Image from 'next/image'

export default function IndexMenuCard({ src, label, component, setMain }) {
    return (
      <div className={stylesIndexCard.cardContainer}>
        <div className={stylesIndexCard.cardImageBloq}>
          <Image
            src={src}
            alt={label}
            fill
          />
        </div>
        <div className={stylesIndexCard.cardBloq}>
          <h2 className={stylesIndexCard.cardTitle}>{label}</h2>
 <button className={stylesIndexCard.btn_verMas} onClick={() => setMain(component)}>Ver más</button>
        </div>
      </div>
    )
  }