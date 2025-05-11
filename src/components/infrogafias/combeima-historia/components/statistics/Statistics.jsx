import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import "./appcss.css";
import tabla1 from "../../media/primera pregunta.png" 
import tabla2 from "../../media/segunda pregunta.png" 
import tabla3 from "../../media/tercera pregunta.png" 

export default function Statistics() {
  const [dataImage, setDataImage] = useState(tabla1);

  const btns = [
    { "name": "Geografía", "src": tabla1},
    { "name": "Demografía", "src": tabla2 },
    { "name": "Economía", "src": tabla3 },
  ];

  return (
    <div className="data-statics-Container">
      <div className="image-data-container">
      <div className="img-container-tur">
      <Image
        src={dataImage}
        alt="Estadísticas Turismo"
        fill
        className="imageStatics"        
        />
      </div>
      </div>
      <div className="btn-data-container">
        {btns.map((btn) => (
          <div className="btn-container" key={btn.name} onClick={()=>setDataImage(btn.src)}>
            <button className="btn-statics">
              {btn.name}
            </button>
          </div>
        ))}
        <div className="btn-container">
          <Link href={"https://drive.google.com/drive/folders/1wxb8r-5cfYJy5QtVAJOGHNKFbtto-rjB?usp=drive_link"} target="blank"><button className="btn-statics">Ver más</button></Link>
        </div>
      </div>
    </div>
  );
}
