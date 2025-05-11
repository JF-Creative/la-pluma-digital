import styles from './dron_video.module.css'

export default function DroneVideo() {
  return (
    <video
      src={"/ecomemoria_media/videos/Video_Dron.mp4"}
      autoPlay
      loop
      muted
      playsInline
      className={styles.droneVideo}
    />
  );
}
