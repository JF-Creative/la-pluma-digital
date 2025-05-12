import styles from "./escrito.module.css";
import { data } from "./info";

export default function Escrito() {
  return (
    <div className={styles.JBA_background_container}>
      <div className={styles.JBA_escrito_container}>
        <div className={styles.JBA_escrito_title}>
          {data.title}
        </div>
        <div className={styles.JBA_escrito_body}>
          <article>{data.paragraphs.map((section) => section)}</article>
        </div>
      </div>
    </div>
  );
}
