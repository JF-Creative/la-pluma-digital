import styles from "../page.module.css";

export default function Inicio({ setCurrentView }) {
  const shortcuts = ["shortcut 1", "shortcut 2", "shortcut 3", "shortcut 4"];
  
  return(
    <>
    <div>Soy una página de inicio en construcción...</div>
    {/* <div className={styles.video_container}>Video en dron</div>
        <div className={styles.shortcuts}>
          {shortcuts.map((shortcut) => (
            <h1 key={shortcut} className={styles.shortcut_item}>
              {shortcut}
            </h1>
          ))}
        </div> */}
    </>
  )
}
