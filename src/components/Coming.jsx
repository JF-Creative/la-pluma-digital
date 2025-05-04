import Link from "next/link";
import "@/styles/comming.css";

export default function Coming() {
  return (
    <div className="section-container">
      <section className="comingSoon">
        <h2>Próximamente</h2>
        <p>
          Estamos trabajando en el contenido de esta sección. ¡Vuelve pronto!
        </p>
        <Link className="return" href="/">
          Volver a inicio
        </Link>
      </section>
    </div>
  );
}
