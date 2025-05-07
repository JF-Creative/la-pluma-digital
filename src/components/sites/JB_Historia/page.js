import styles from './page.module.css'
import Header from './modules/Header/Header'
import Footer from './modules/Footer/Footer';

export default function Inicio() {


    const shortcuts = [
      "shortcut 1",
      "shortcut 2",
      "shortcut 3",
      "shortcut 4"
    ]


    return (
      <div className={styles.site}>
        <Header/>
        <div className={styles.mainSite}>
          <div className={styles.video_container}>Video en dron</div>
          <div className={styles.shortcuts}>
            {shortcuts.map(
              (shortcut)=><h1 key={shortcut} className={styles.shortcut_item}>{shortcut}</h1>
            )}
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
  