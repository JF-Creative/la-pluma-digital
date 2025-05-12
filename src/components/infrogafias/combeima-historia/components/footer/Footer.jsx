import Image from "next/image";
import Link from "next/link";
import "./footer.css";

export default function Footer() {
  const authors = [
    {
      name: "Laura Carolina Villalba García",
      mail: "laura.villalbag@cun.edu.co",
      mailto: "mailto:laura.villalbag@cun.edu.co"
    },
    {
      name: "Blader Santiago Jiménez S.",
      mail: "blader.jimenez@cun.edu.co",
      mailto: "mailto:blader.jimenez@cun.edu.co"
    },
    {
      name: "María Jose Quintero Falla",
      mail: "maria.quinterffa@cun.edu.co",
      mailto: "mailto:maria.quinterffa@cun.edu.co"
    },
  ];

  return (
    <footer className="footer-inf-container">
      <div className="footerDescription">
        Esta infografía presenta un recorrido por la historia del Cañón del Combeima a través de relatos y hechos transmitidos por sus propios habitantes. A través de entrevistas y testimonios, recopilamos memorias vivas que revelan la riqueza cultural, los cambios sociales y los momentos clave que han marcado la identidad de esta región. Una mirada auténtica desde la voz de quienes han vivido y construido la historia del Cañón.
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
