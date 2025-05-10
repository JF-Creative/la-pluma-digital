import Link from "next/link";
import Image from "next/image";
import styles from "./escrito.module.css";

export const data = {
  title: <h1>Cañón del Combeima</h1>,
  paragraphs: [
    <section key="1">
      <p>
        En lo alto del cerro noroccidental de Ibagué, un terreno olvidado
        comenzó a transformarse gracias a la visión de un licenciado en biología
        y química. El espacio que parecía condenado al abandono, floreció en el
        año 2000 como el{" "}
        <Link
          href="https://www.facebook.com/JardinBotanicoSan.Jorge.Ibague/"
          target="blank_"
          className={styles.link_written_report}
        >
          <strong>Jardín Botánico San Jorge</strong>
        </Link>
        , convirtiéndose en un refugio natural y vital para la ciudad.
      </p>
      <p>
        En este lugar no solo se respira naturaleza, sino también historia, la
        cual refleja lo perseverante y determinada que es la madre tierra. El
        Jardín Botánico San Jorge es testimonio de la fuerza de la naturaleza y
        del compromiso humano por preservarla. Su historia, comienza mucho antes
        de convertirse en un jardín: cuando pertenecía a la{" "}
        <Link
          href="https://es.wikipedia.org/wiki/Familia_Salesiana"
          target="blank_"
          className={styles.link_written_report}
        >
          <strong>comunidad salesiana</strong>
        </Link>
        , quienes utilizaban el terreno para actividades espirituales y
        educativas, con la intención de servir a Dios con fidelidad.
      </p>
      ,
      <figure className={styles.document_image_container}>
        <div className={styles.document_image}>
          <Image src="/ecomemoria_media/1.jpg" alt="Fotos_JB-San-Jorge" width={400} height={298} className={styles.image_rep_escrito} />
        </div>
        <figcaption>Fotografía extraída de: Monumentos de Ibagué</figcaption>
      </figure>
    </section>,
    <section key="2">
      <h2>Una tesis que floreció en tierras salesianas</h2>
      <p>
        En 1997, el Licenciado Germán Oyuela llegó a Colombia con el propósito
        académico de desarrollar su tesis de Maestría en Gestión y Conservación
        del Medio Ambiente. Su idea inicial era construir un serpentario, pero
        también contemplaba la posibilidad de crear una colección botánica, fue
        así como eligió su segunda opción, inició su búsqueda en lugares que
        fueran idóneos para el desarrollo de su proyecto; tras evaluar dos
        posibles lugares en Ibagué, El Palmar y la Granja San Jorge, se inclinó
        por La Granja. El único inconveniente era que el terreno pertenecía a la
        comunidad salesiana.
      </p>
      <figure className={styles.document_image_container}>
        <div className={styles.document_images}>
          <div className={styles.document_image}>
            <Image src="/ecomemoria_media/2.jpg" alt="Fotos_JB-San-Jorge" width={1600} height={1080} />
          </div>
          <div className={styles.document_image}>
            <Image src="/ecomemoria_media/3.jpg" alt="Fotos_JB-San-Jorge" width={1600} height={1015} />
          </div>
        </div>
        <figcaption>Fotografías de archivo - Martha Perdomo.</figcaption>
      </figure>
      <p>
        Para Oyuela lograr un acuerdo con la congregación, y mediante una
        propuesta clara logró que el terreno le fuera entregado{" "}
        <Link
          href="https://es.wikipedia.org/wiki/Comodato"
          target="blank_"
          className={styles.link_written_report}
        >
          <strong>en comodato</strong>
        </Link>
        , esto, le permitió avanzar en el diseño de un jardín botánico. En 1999,
        con el apoyo de la{" "}
        <Link href="https://arcoiris.com.co/quienes-somos/" target="blank_"
          className={styles.link_written_report}>
          <strong>Corporación Nuevo Arcoíris</strong>
        </Link>{" "}
        y el proyecto “Territorio de Paz”, se presentó la idea final. Durante el
        proceso de construcción y consolidación del jardín se presentaron retos,
        entre esos Germán Oyuela nos cuenta que:
      </p>
      <div className={styles.escrito_iframe_container}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/cSSmxnW4TOw?si=wdvwhmtVnc5m_dkb"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <p>
        La ciudad de Ibagué ya contaba con un Jardín Botánico de la{" "}
        <Link href="http://www.ut.edu.co/" target="blank_"
          className={styles.link_written_report}>
          <strong>Universidad del Tolima</strong>{" "}
        </Link>
        , fundado en 1968, y no había interés en compartir ese reconocimiento.
        Sin embargo, Oyuela investigó y consultó directamente con el presidente
        de la red:
      </p>
      <div className={styles.escrito_iframe_container}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Mzmvit3FVOs?si=n0ZebPwadCdlxiMs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <p>
        Oyuela acelera el desarrollo de los requerimientos que le solicitaban y
        el 10 de mayo del 2000, en sólo seis meses el Jardín Botánico San Jorge
        quedó oficialmente constituido, abriendo sus puertas al público el 14 de
        octubre del mismo año como un regalo a la ciudad en su cumpleaños.
      </p>
      <figure className={styles.document_image_container}>
        <div className={styles.document_image}>
          <Image src="/ecomemoria_media/4.jpg" alt="Fotos_JB-San-Jorge" width={1462} height={1000} />
        </div>
        <figcaption>Fotografías de archivo - Martha Perdomo.</figcaption>
      </figure>
      <p>
        Pero cabe resaltar, que la Universidad de Tolima nació en la Granja San
        Jorge, ya que los primeros procesos de formación que se hicieron en la
        ciudad de Ibagué fueron de tecnólogos agrícolas y forestales. También se
        formaban técnicos agropecuarios en el espacio donde se encuentra hoy en
        día el Jardín Botánico San Jorge y en el Claustro San Jorge, en el que
        actualmente funciona el Colegio Musical Amina Melendro de Pulecio.
      </p>
    </section>,
    <section key="3">
      <h2>SEMBRANDO FUTURO</h2>
      <h3>Semillas de Paz: Raíces Educativas</h3>
      <p>
        Ya consolidado el Jardín Botánico San Jorge dio paso a proyectos
        transformadores. Uno de ellos es “Territorio de Paz”, del cual nace el
        programa “Semillas de Paz”, diseñado para niñas, niños y jóvenes. Este
        programa se desarrolla en cuatro espacios:
      </p>
      <ol className={styles.section_ol_ul}>
        <li>
          <strong>El Yin y el Yang:</strong> Simboliza la armonía entre
          contrarios y la complementariedad.
        </li>
        <li>
          <strong>El Templo de la Meditación:</strong> Espacio para el
          autoconocimiento y la autoestima.
        </li>
        <li>
          <strong>La Mesa de la Palabra:</strong> Espacio donde los chicos dejan
          una piedra como símbolo del compromiso con el diálogo, por encima de
          la violencia.
        </li>
        <li>
          <strong>El Espacio de Liderazgo:</strong> Fomenta habilidades para la
          acción positiva y la transformación social.
        </li>
      </ol>
    </section>,
    <section key="4">
      <h3>Aprende con Combi Y Chipi</h3>
      <p>
        De forma complementaria, el Jardín Botánico San Jorge desarrolla
        cartillas educativas creadas junto a docentes de Ibagué. Estas
        herramientas están pensadas para enseñar a cuidar el medio ambiente de
        una manera divertida. Sus protagonistas son:
      </p>
      <ul className={styles.section_ol_ul}>
        <li>
          <strong>Combi:</strong> hija del río Combeima
        </li>
        <li>
          <strong>Chipi:</strong> hijo del río Chipalo
        </li>
      </ul>
      <figure className={styles.document_image_container}>
        <div className={styles.document_images}>
          <div className={styles.document_image}><Image src="/ecomemoria_media/5.jpg" alt="Fotos_JB-San-Jorge" width={1072} height={1408} /></div>
          <div className={styles.document_image}><Image src="/ecomemoria_media/6.jpg" alt="Fotos_JB-San-Jorge" width={1072} height={1408} /></div>
          <div className={styles.document_image}><Image src="/ecomemoria_media/7.jpg" alt="Fotos_JB-San-Jorge" width={1072} height={1408} /></div>
        </div>
        <figcaption>
          Fotografía de archivo - Jardín Botánico San Jorge.
        </figcaption>
      </figure>
      <p>
        Ambos personajes guían a los niños y jóvenes por un camino de conciencia
        ecológica, con juegos y cuentos que conectan la ciudad con sus ríos y
        biodiversidad. Además, el Jardín Botánico San Jorge ofrece guías
        turísticas que acompañan al visitante durante su recorrido, brindando
        seguridad, orientación y datos curiosos sobre este ecosistema urbano.
      </p>
    </section>,
    <section key="5">
      <h2>Un legado que sigue vivo</h2>
      <p>
        El Jardín Botánico San Jorge no es solo un espacio verde en medio de la
        ciudad, es una escuela viva, un museo natural y un refugio de historias
        que florecen con cada visitante. En cada sendero se respira el esfuerzo
        de quienes creyeron en transformar un terreno olvidado en un territorio
        de paz, conocimiento y conexión con la tierra. Según la GBIF (Global
        Biodiversity Information Facility) el Jardín Botánico San Jorge, resalta
        por su colección de Aráceas, que incluyen aproximadamente 120 especies,
        convirtiéndola en la colección más grande de esta familia en
        Latinoamérica registrada en un jardín botánico. Hoy, más que nunca el
        jardín necesita personas que, aparte de visitarlo, lo vean como un lugar
        de conocimiento, desde el amor por la fuente de vida que es la
        naturaleza. No te pierdas la oportunidad de visitarlo y aprender de sus
        maravillas.
      </p>
      <figure className={styles.document_image_container}>
        <div className={styles.document_image}>
          <Image src="/ecomemoria_media/8.png" alt="Fotos_JB-San-Jorge" width={450} height={269} />
        </div>
        <figcaption>Fotografía extraída de: Monumentos de Ibagué.</figcaption>
      </figure>
    </section>,
  ],
};
