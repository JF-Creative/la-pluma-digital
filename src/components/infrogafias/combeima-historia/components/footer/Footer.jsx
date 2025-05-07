import Image from "next/image";
import Link from "next/link";
import "./footer.css";

export default function Footer() {
  const authors = [
    {
      name: "name1",
      mail: "name1@cun.edu.co",
      mailto: "mailto:name1@cun.edu.co"
    },
    {
      name: "name2",
      mail: "name2@cun.edu.co",
      mailto: "mailto:name1@cun.edu.co"
    },
    {
      name: "name3",
      mail: "name3@cun.edu.co",
      mailto: "mailto:name1@cun.edu.co"
    },
  ];

  return (
    <footer className="footer-inf-container">
      <div className="footerDescription">
        Explora el Cañón del Combeima a través de esta infografía interactiva
        diseñada para viajeros, amantes de la naturaleza y ecoturistas. Con
        datos estadísticos, entrevistas en video, imágenes y tablas
        comparativas, entenderás por qué este paraíso natural es uno de los
        destinos más atractivos para el turismo sostenible en Colombia.
      </div>
      <div className="contacto">
        <h1 className="footerTitle">Elaborado por:</h1>
        <ul>
          {authors.map((author) => (
            <li key={author.mail}>
              {author.name}: <Link href={author.mailto}>{author.mail}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="logitos">
        <div className="log-contain">
          <Image
            src="/combeima-historia (2).png"
            alt="PIA Combeima - CUN Ibagué"
            fill
            className="logoInfFooter"
          />
        </div>
      </div>
    </footer>
  );
}
