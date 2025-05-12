import styles from './bibliografia.module.css'
import { bibliografia } from './data'

export default function Bibliografia(){
    return(
        <div className={styles.bibliografia_container}>
            <h1 className={styles.title}>Referencias</h1>
            <div className={styles.info_container}>
                <ul className={styles.bibliografia}>
                    {bibliografia.map(
                        (item)=><li key={item} className={styles.item}>{item}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}