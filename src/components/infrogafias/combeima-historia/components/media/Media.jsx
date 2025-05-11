import styles from "./media.module.css";
import { data } from "./data";
import Image from "next/image";
import Link from "next/link";

export default function Media() {
  return (
    <div className={styles.mediaContainer}>
      <div className={styles.videosContainer}>
        {data.video.map((v) => (
          <div className={styles.videoInfoContainer} key={v.idVideo}>
            <h4 className={styles.idVideo}>{v.title}</h4>
            <div className={styles.videoContainer}>
              <Image
                src={v.srcImage}
                alt={v.title}
                fill
                className={styles.imageVideo}
              />
              <Link href={`https://www.youtube.com/watch?v=${v.idVideo}`} target="blank_">
                <div className={styles.shadow}>
                  <Image
                    src="/youtube_2504965.png"
                    alt="ver video"
                    width={50}
                    height={50}
                    className={styles.icoVideo}
                  />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.audioContainer}>{data.audio}</div>
    </div>
  );
}
