import Link from "next/link";
import Image from "next/image";
import styles from "./escrito.module.css";

export const data = {
  title: (
    <>
      <h1>EL PULMÓN VERDE DE IBAGUÉ</h1>
      <h2>JARDÍN BOTÁNICO SAN JORGE</h2>
    </>
  ),
  paragraphs: [
    <section key="1">
      <p>
        Lleno de deslumbrantes especies de fauna y flora que lo rodean, el
        Jardín Botánico San Jorge se bautiza como un emblema natural del
        departamento del Tolima.
      </p>
      <p>
        En el centro-occidente de Colombia encontramos Ibagué, la capital del
        departamento del Tolima, ciudad de los ocobos florecidos y comúnmente
        conocida como la Capital Musical, en ella está ubicado actualmente el
        Jardín Botánico San Jorge, un lugar turístico, emblemático, majestuoso y
        sereno que antiguamente funcionó como claustro de oración y conexión
        espiritual de los sacerdotes Salesianos.{" "}
      </p>
      <p>
        Es un espacio de 60 hectáreas en las que los visitantes pueden recorrer
        senderos de bosque subandino y conocer múltiples especies de fauna y
        flora. Este espacio de preservación natural se construyó bajo cuatro
        pilares: La educación ambiental, la conservación, la{" "}
        <Link
          href="https://monumentosdeibague.es.tl/Jardin-Botanico-San-Jorge.htm#google_vignette"
          target="blank_"
          className={styles.link_written_report}
        >
          investigación y recreación
        </Link>
      </p>
      <div className={styles.escrito_iframe_container}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ha1Z_Of4OG0?si=wdvwhmtVnc5m_dkb"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <p>
        Dentro de sus instalaciones, se pueden encontrar varios guías expertos
        en la botánica, quienes son los conductores hacia un maravilloso mundo
        natural y cargado de muchas historias, creencias, tradiciones y sobre
        todo, arduas labores naturales que permiten que los visitantes se
        adentren en la tranquilidad que genera este espacio, transportándose
        hacia un lugar de ensueño, promoviendo que se mantenga un hábitat
        natural único dentro de la ciudad de Ibagué.
      </p>
      <p>
        En este sitio se destacan las colecciones de orquídeas; también, las de
        bromelias, palmas y heliconias, así como una que está compuesta por
        plantas medicinales y aromáticas, Según el botánico estadounidense Tomas
        Croat del Jardín Botánico de Missouri, nuestro pulmón verde &quot;posee 110
        especies de Aráceas lo que la convierte en la colección más grande de
        aráceas en Suramérica&quot;.
      </p>
    </section>,
    <section key="2">
      <div className={styles.JBA_image_n_text}>
        <figure className={styles.document_image_container_b2}>
          <div className={styles.document_image}>
            <Image
              src="/pulmon_verde/1.jpg"
              alt="Fotos_JB-San-Jorge"
              width={1500}
              height={1500}
              className={styles.image_rep_escrito}
            />
          </div>
          <figcaption className={styles.document_description}>
            <em>
              <b>Fotografía:</b> Jardín Botánico San Jorge. Paula Daniela
              Naranjo (2025)
            </em>
          </figcaption>
        </figure>
        <p className={styles.JBA_image_n_text_Text}>
          Otros tesoros naturales que posee el Jardín Botánico San Jorge son:
          Una Huerta Alimenticia y Fruta que contienen: Maíz, Fríjol, Yuca,
          Maní, Tomate, Ají. Aguacate, Chirimoya, Mamey, Zapote, Guayaba,
          Achupalla (Piña), Papaya, Cacao y otros; además tiene múltiples
          plantas medicinales y comestibles que se pueden usar en caso de ser
          necesarias o en caso de querer darle un toque delicioso a las
          diferentes comidas que se preparan a diario.
        </p>
      </div>
    </section>,
    <section key="3">
      <div className={styles.JBA_image_n_text}>
        <p className={styles.JBA_image_n_text_Text}>
          Además de eso, posee un mariposario: entre las cuales se destacan la
          mariposa de la pasionaria, Itomino manchado, saltarín común, Atigrada
          y muchas más. Otro aspecto interesante de la fauna es que se pueden
          encontrar: Armadillos, Chuchas, Guatín, Murciélago, Perro de monte y
          otros.
        </p>
        <figure className={styles.document_image_container_b2}>
          <div className={styles.document_image}>
            <Image
              src="/pulmon_verde/2.jpg"
              alt="Fotos_JB-San-Jorge"
              width={1500}
              height={1500}
              className={styles.image_rep_escrito}
            />
          </div>
          <figcaption className={styles.document_description}>
            <em>
              <b>Fotografía:</b> Jardín Botánico San Jorge. Laura Carolina
              Villalba (2025)
            </em>
          </figcaption>
        </figure>
      </div>
    </section>,
    <section key="4">
      <p>
        En conclusión, El Jardín Botánico San Jorge se posiciona como uno de los
        tesoros más valiosos de Ibagué y del departamento del Tolima. No solo
        resguarda una inmensa riqueza en flora y fauna, sino que también cumple
        una función vital en la educación ambiental, la investigación científica
        y la recreación consciente. Gracias al compromiso de sus expertos, guías
        y visitantes, este espacio natural se mantiene vivo, ofreciendo
        conocimiento, belleza y tranquilidad a quienes deciden recorrer sus
        senderos.
      </p>
      <p>
        Así, el Jardín Botánico San Jorge no es simplemente un sitio turístico:
        es un recordatorio constante de la importancia de preservar lo que nos
        rodea. En cada hoja, en cada especie, en cada historia compartida, se
        encuentra el llamado urgente a proteger nuestra biodiversidad. Visitarlo
        es una experiencia transformadora que deja huella en el corazón y en la
        conciencia. Porque cuidar la naturaleza es también cuidarnos a nosotros
        mismos.
      </p>
    </section>,
  ],
};
