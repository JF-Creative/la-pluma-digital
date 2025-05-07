import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const authors = [
    {
      name: "Liseth Camila Ballen    ",
      mail: "liseth.ballen@cun.edu.co",
      mailto: "mailto:liseth.ballen@cun.edu.co",
    },
    {
      name: "Stephania Bernal  ",
      mail: "stephania.bernal@cun.edu.co",
      mailto: "mailto:stephania.bernal@cun.edu.co",
    },
    {
      name: "Danna Molina F.  ",
      mail: "danna.molinaf@cun.edu.co",
      mailto: "mailto:danna.molinaf@cun.edu.co",
    }
  ];

  return (
    <div className={styles.footerInfContainer}>
      <div className={styles.description_footer}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        ipsam unde nobis magni similique exercitationem quod quasi molestiae
        amet, blanditiis voluptate illum asperiores officiis iusto odit quaerat
        quam neque nihil.
      </div>
      <div className={styles.contacto}>
        <h1 className={styles.staff}>Elaborado por:</h1>
        <ul>
          {authors.map((author) => (
            <li key={author.mail}>
              {author.name}: <Link href={author.mailto}>{author.mail}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.logitos}>
        <div className={styles.log_contain}>
          <Image
            src="/san-jorge_wb.png"
            alt="PIA Combeima - CUN Ibagué"
            fill
            className={styles.logoInfFooter}
          />
        </div>
      </div>
    </div>
  );
}
