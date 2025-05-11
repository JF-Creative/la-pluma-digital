import styles from "./estructura.module.css";
import Image from "next/image";
import { data } from "./data";

export default function Structure() {
  return (
    <div className={styles.structure_container}>
      <div className={styles.structure_infoBlock}>
        <h1 className={styles.structure_titleSection}>Memoria Viva</h1>
      </div>
      <div className={styles.structure_infoBlock2}>
        {data.bloq1.map((item) => (
          <div className={styles.structure_bloq2}>
            <h2 className={styles.structure_subtitleSection}>{item.title}</h2>
            <div className={styles.structure_bloq2_imageContainer}>
              <Image
                src={item.src}
                alt={item.title}
                fill
                className={styles.structure_bloq1_image}
              />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.structure_infoBlock3}>
        <div className={styles.structure_bloq3}>
          <h2 className={styles.structure_subtitleSection}>{data.bloq2.title}</h2>
          <div className={styles.structure_bloq3_imageContainer}>
              <Image
                src={data.bloq2.principalImage.src}
                alt={data.bloq2.principalImage.title}
                fill
                className={styles.structure_bloq3_image}
              />
            </div>
        </div>
        <div className={styles.structure_bloq4}>
          {data.bloq2.otherImages.map(
            (item)=>(
              <div className={styles.structure_bloq4_imageContainer}>
              <Image
                src={item.src}
                alt={item.title}
                fill
                className={styles.structure_bloq4_image}
              />
            </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}