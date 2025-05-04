import "@/styles/about.css";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="about-container">
        <div className="img-logo-container">
          <Image
            src="/Logo1.png"
            alt="La Pluma Digital"
            fill
            className="logoAbout"
          />
        </div>
        <div className="text-container">
          <h2>Sobre Nosotros </h2>
          <p>
            <strong>La Pluma Digital</strong> es un proyecto comunicativo desarrollado con fines
            académicos, como parte de una propuesta formativa en el área de
            Comunicación Social de la <strong>Corporación Unificada Nacional de
            Educación Superior - CUN</strong>, sede Ibagué. Este espacio busca explorar
            nuevas formas de narrar e informar, combinando creatividad, ética y
            técnica para ofrecer contenidos diversos en un entorno digital. Cada
            sección ha sido diseñada con un enfoque reflexivo y estético,
            mostrando el potencial del periodismo narrativo y multimedia. Aquí
            se presentan noticias de actualidad, crónicas humanas, reportajes en
            profundidad, contenidos para la infancia, galerías fotográficas y
            producciones sonoras a través de la sección de Podcast. 
          </p>
          <p><strong>En La Pluma Digital, comunicar es crear.</strong> Y cada pieza publicada busca conectar,
            informar e inspirar desde una mirada crítica, cultural y pedagógica.
        </p>
        <p><strong>¡Bienvenido a este universo narrativo!</strong></p>
          <Link className="return" href="/">
            Volver a inicio
          </Link>
        </div>
      </div>
  );
}
