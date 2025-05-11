import LogosBN from "@/components/LogosBN";
import {footerData} from "@/data/footer";
import Link from "next/link";
import Image from "next/image";
import styles from '@/styles/footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerTop}>
        <section className={styles.footerDescription}>
          <p>{footerData.derechos}</p>
        </section>
        <section className={styles.boomContainer}>
          <p>Más contenidos realizados por los estudiantes de la CUN en El Boom:</p>
          <Link href={footerData.boom.url} className={styles.boomLink} target="blank">
            <div className={styles.boomLogoContainer}>
              <Image
                src={footerData.boom.logo}
                alt={footerData.boom.url}
                fill
                className={styles.logoBoom}
              />
            </div>
          </Link>
        </section>
        <LogosBN />
      </div>
      <div className={styles.footerBottom}>
        <p>
          {footerData.poweredBy.texto}  
        </p>
        <div className={styles.poweredLogoContainer}>
            <Image
              src={footerData.poweredBy.logo}
              alt={footerData.poweredBy.alt}
              fill
              className={styles.poweredLogo}
            />
          </div>
      </div>
    </footer>
  );
}
