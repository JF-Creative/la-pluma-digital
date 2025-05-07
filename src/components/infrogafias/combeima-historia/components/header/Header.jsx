import Image from "next/image";
import "./header.css"


export default function Header() {
   
  return (
    <div className="headerInf">
      <div className="cont1">
      <div className="logoInfContainer">
        <Image
            src="/combeima-historia (1).png"
            alt="Cañón del Combeima - Datos Históricos"
            fill
            className="logoInfHeader"
          />
        </div>
        <div className="txtContainer">
          <h1 className="headerTitle">Cañón del Combeima</h1>
          <h2 className="headerSubtitle">Datos Históricos</h2>
        </div>
      </div>
      <h1><em>&quot;Impera la ley del silencio&quot;</em></h1>
    </div>
  );
}
