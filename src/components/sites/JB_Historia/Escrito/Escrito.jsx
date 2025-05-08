import styles from './escrito.module.css';

const paragraphs = [
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur amet magni, ea iusto in blanditiis, alias quisquam ad doloremque et maiores corrupti non ducimus beatae commodi quas pariatur laudantium nostrum!",
    "Consectetur adipisicing elit. Odit, libero. Eos expedita necessitatibus, harum non, voluptatem quam iste blanditiis, vitae rem voluptas obcaecati? Ipsa pariatur suscipit ut, sunt esse inventore.",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, sed reprehenderit. Dolor, incidunt! Consectetur cumque dicta, impedit officia laboriosam temporibus, beatae exercitationem sapiente perspiciatis repudiandae alias molestiae ut nesciunt obcaecati.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, maxime inventore, beatae pariatur repudiandae doloribus quasi optio incidunt expedita possimus voluptates debitis dolorum perferendis. Quod quisquam necessitatibus maiores aliquam. Veritatis!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam est velit dolorem cumque, ipsum, maiores error necessitatibus incidunt earum id quae fuga. Quaerat necessitatibus doloremque, optio temporibus sapiente cumque illo?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus et inventore ratione quas pariatur cumque dolorem. Cum, ratione officia! Doloremque, cum alias, incidunt perspiciatis maxime reprehenderit laboriosam inventore minus atque.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis voluptatem expedita nostrum tempore. Blanditiis necessitatibus fuga pariatur velit temporibus, voluptatibus, repudiandae dolores animi voluptatum non beatae alias eos, voluptatem sequi!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus temporibus incidunt, distinctio repellendus necessitatibus minima iste inventore perspiciatis tempora sint. Fugiat, itaque! Atque, voluptates? Voluptatum repudiandae nihil necessitatibus consequatur sint?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, deserunt nisi! Dolore dicta, optio beatae molestias qui voluptatibus, sunt architecto repellendus exercitationem culpa voluptatum inventore. Eligendi sequi temporibus voluptatem incidunt.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nihil consectetur quisquam necessitatibus debitis, vitae iste! Iure minima vitae repellendus? Dolorem est consequatur necessitatibus cumque dolores corrupti eligendi quis vero!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsa, recusandae minus, iure praesentium dolorum nostrum ullam incidunt error explicabo, atque ratione? Ad eveniet, sint tempore repellat voluptas maxime excepturi.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod vitae repellendus necessitatibus rerum incidunt architecto quia? Quidem cumque exercitationem necessitatibus praesentium tempora beatae, cum distinctio? Inventore dolores esse quibusdam voluptatem.",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, error dignissimos. Vel quas, fuga voluptatum exercitationem est cumque. Architecto et ratione dignissimos cumque officia dicta repellendus, dolore sequi doloremque recusandae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis magnam nisi id? Iusto ut dicta architecto! Tempora quisquam quasi incidunt, dolores blanditiis, saepe voluptatibus eligendi minima voluptatem, necessitatibus cumque ab.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore pariatur, saepe necessitatibus fuga delectus quis maiores tempora beatae voluptas dolores, corrupti doloremque, voluptatum molestias placeat minima. Quam, dolor! Quisquam, exercitationem?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores temporibus sint vitae iste? Fugit sequi excepturi, eligendi, molestiae temporibus esse exercitationem quisquam voluptas, porro cum blanditiis minima tempora vero! Voluptates!",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur ut recusandae, quibusdam reprehenderit praesentium tempora molestias voluptatem! Facere debitis dolor reprehenderit. Voluptate quas sed atque? Itaque voluptatibus maiores minima sequi.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium officia, iste expedita dolores beatae inventore omnis repellendus, recusandae blanditiis, ducimus cumque quam! Quam suscipit, et exercitationem doloremque cum error reprehenderit?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis accusamus distinctio minima. Aliquam, consequatur recusandae. At ipsum ratione doloremque, dolorem eligendi error quasi omnis dolorum voluptates, exercitationem libero reprehenderit?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eligendi fugit exercitationem excepturi, sequi doloremque, maxime animi quam sapiente ducimus magnam! Aspernatur sed, eligendi fugit cumque esse incidunt recusandae repudiandae."
];

export default function Escrito() {
    return (
        <div className={styles.JBA_background_container}>
            <div className={styles.JBA_escrito_container}>
            <div className={styles.JBA_escrito_title}>
                <h1>Titulo del texto escrito</h1>
            </div>
            <div className={styles.JBA_escrito_body}> 
                <article>                
                    {paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                 </article>
            </div>
        </div>
    
        </div>
    )
}

