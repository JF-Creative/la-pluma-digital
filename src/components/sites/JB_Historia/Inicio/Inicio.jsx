
import styles from "../page.module.css";
import DroneVideo from "../modules/DronVideo/DronVideo";
import IndexMenuCard from "../modules/IndexMenuCard/indexMenuCard";

import Miniserie from "../Miniserie/Miniserie";
import Reportaje from "../Reportaje/Reportaje";
import Escrito from "../Escrito/Escrito";
import Estructura from "../Estructura/Estructura";

export default function Inicio({ onSelectComponent }) {
  const shortcutInfo = [
    {
      image: {
        src: ""
      }, label: "Miniserie", component: <Miniserie />
    },
    {
      image: {
        src: ""
      }, label: "Reportaje", component: <Reportaje />
    },
    {
      image: {
        src: ""
      }, label: "Escrito", component: <Escrito />
    },
    {
      image: {
        src: ""
      }, label: "Estructura", component: <Estructura />
    }
  ];

  return (
    <>
      <div className={styles.video_container}><DroneVideo /></div>
      <div className={styles.shortcuts}>
        {shortcutInfo.map((shortcut) => (
          <IndexMenuCard
            key={shortcut.label}
            src={shortcut.image.src}
            label={shortcut.label}
            component={shortcut.component}
            setMain={onSelectComponent}
          />)
        )}
      </div>
    </>
  );
}