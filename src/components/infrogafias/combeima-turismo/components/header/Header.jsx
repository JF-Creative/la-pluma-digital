import Image from "next/image";
import "./header.css";

export default function Header() {
  return (
    <div className="headerInfTur">
      <div className="logoInfContainerTur">
          <Image
            src="/combeima-turismo (2).png"
            alt="Cañón del Combeima - Datos Históricos"
            fill
            className="logoInfHeader"
          />
        </div><div className="cont2">
        
      </div>
      <div className="refull"></div>
    </div>
  );
}
