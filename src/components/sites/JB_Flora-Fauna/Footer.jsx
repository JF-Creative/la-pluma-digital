import LogosBN from "@/components/LogosBN";
import {footerData} from "@/data/footer";
import Link from "next/link";
import Image from "next/image";
import "@/styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <section className="descripcion">
          <p>{footerData.derechos}</p>
        </section>
        <section className="boomContainer">
          <p>Más contenidos de estudiantes:</p>
          <Link href={footerData.boom.url} className="boomLink" target="blank">
            <div className="boomLogoContainer">
              <Image
                src={footerData.boom.logo}
                alt={footerData.boom.url}
                fill
                className="logoBoom"
              />
            </div>
          </Link>
        </section>
        <LogosBN />
      </div>
      <div className="footer-bottom">
        <p>
          {footerData.poweredBy.texto}  
        </p>
        <div className="powered-logo-container">
            <Image
              src={footerData.poweredBy.logo}
              alt={footerData.poweredBy.alt}
              fill
              className="powered-logo"
            />
          </div>
      </div>
    </footer>
  );
}
