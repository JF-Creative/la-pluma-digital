import stylesIndexCard from "./indexCard.module.css";
import Image from "next/image";

export default function IndexMenuCard({ src, label, view, setCurrentView }) {

  console.log("setCurrentView en IndexMenuCard:", setCurrentView);


  return (
    <div className={stylesIndexCard.cardContainer}>
      <div className={stylesIndexCard.cardImageBloq}>
        <Image src={src} alt={label} fill className={stylesIndexCard.cardImage}/>
      </div>
      <div className={stylesIndexCard.cardBloq}>
        <h2 className={stylesIndexCard.cardTitle}>{label}</h2>
        <button
          className={stylesIndexCard.btn_verMas}
          onClick={() => setCurrentView(view)}
        >
          Ver más
        </button>
      </div>
    </div>
  );
}
