import Image from "next/image";
import Link from "next/link";
import "./footer.css";

export default function Footer() {
  const authors = [
    {
      name: "Samuel Santiago Cristancho S.    ",
      mail: "samuel.cristanchos@cun.edu.co",
      mailto: "mailto:samuel.cristanchos@cun.edu.co"
    },
    {
      name: "Jhasdlent Daniel Giraldo Pinto  ",
      mail: "jhasdlent.giraldo@cun.edu.co",
      mailto: "mailto:jhasdlent.giraldo@cun.edu.co"
    },
    {
      name: "Gabriela Fernanda Salinas Diaz  ",
      mail: "gabriela.salinas@cun.edu.co",
      mailto: "mailto:gabriela.salinas@cun.edu.co"
    },
    {
      name: "Brayan José Alzate León         ",
      mail: "brayan.alzatel@cun.edu.co",
      mailto: "mailto:gabriela.salinas@cun.edu.co"
    },
  ];



  return (
    <footer className="footer-inf-container">
      <div className="description-footer">
        Explora el Cañón del Combeima a través de esta infografía interactiva
        diseñada para viajeros, amantes de la naturaleza y ecoturistas. Con
        datos estadísticos, entrevistas en video, imágenes y tablas
        comparativas, entenderás por qué este paraíso natural es uno de los
        destinos más atractivos para el turismo sostenible en Colombia.
      </div>
      <div className="contacto">
        <h1 className="staff">Elaborado por:</h1>
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
            src="/combeima-turismo (1).png"
            alt="PIA Combeima - CUN Ibagué"
            fill
            className="logoInfFooter"
          />
        </div>
      </div>
    </footer>
  );
}
