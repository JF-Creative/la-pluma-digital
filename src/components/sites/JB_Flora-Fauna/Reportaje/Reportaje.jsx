import styles from './reportaje.module.css'
import {data} from './data.js'


export default function ReportajeSonoro(){
    return (
        <div className={styles.ReportajeSonoro_body}>
            <h1 className={styles.ReportajeSonoro_title}>{data.title}</h1>
            <section className={styles.ReportajeSonoro_description}>{data.description.map(
                (linea)=><><p key={linea}>{linea}</p><br/></>
            )}</section>
            <div className={styles.ReportajeSonoro_iframeContainer}>{data.iframeCode}</div>
        </div>
    )
}