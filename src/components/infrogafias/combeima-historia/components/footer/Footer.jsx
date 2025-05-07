import Image from "next/image";
import Link from "next/link";
import "./footer.css";

export default function Footer() {
  const authors = [
    {
      name: "name1",
      mail: "name1@cun.edu.co",
    },
    {
      name: "name2",
      mail: "name2@cun.edu.co",
    },
    {
      name: "name3",
      mail: "name3@cun.edu.co",
    },
  ];

  return (
    <footer className="footer-inf-container">
      <div className="description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae pariatur
        temporibus, et cupiditate fugit, impedit quibusdam officia placeat
        nesciunt accusantium reprehenderit suscipit! Eligendi commodi suscipit
        tenetur ratione consectetur, dolores amet!
      </div>
      <div className="contacto">
        <h1>Elaborado por:</h1>
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
