"use client";
import Link from "next/link";
import "@/styles/project.css";
import { data } from "@/data/combeima";
import { useState } from "react";
import CombeimaHistoria from "@/components/infrogafias/combeima-historia/CombeimaHistoria";
import CombeimaTurismo from "@/components/infrogafias/combeima-turismo/CombeimaTurismo"
export default function Pia2025() {
  const [current, setCurrent] = useState({component:<CombeimaHistoria />, key: "CombeimaHistoria"});

  const handleCurrent = (label) => {
    const components = [
      {
        component: <CombeimaHistoria />,
        key: "CombeimaHistoria"
      },
      {
        component: <CombeimaTurismo/>,
        key: "CombeimaTurismo"
      }
    ];

    const index = data.botones.findIndex((boton) => boton === label);

    const newComp =
      index !== -1 ?
        components[index]
        : "Lo sentimos, no encontramos ese componente";

    setCurrent(newComp);
  };

  return (
    <div className="sec-inf-container">
      <div className="inf-container">
          <div className="inf-description">
              <h2>{data.title}</h2>
              {Array.isArray(data.description) ? (
                  data.description.map((paragraph, index) => (
                      <p key={`description-p-${index}`}>
                          {paragraph}
                      </p>
                  ))
              ) : (
                  <p>{data.description}</p>
              )}
              {data.botones.map((btn) => (
                  <button key={btn} onClick={() => handleCurrent(btn)}>
                      {btn}
                  </button>
              ))}
          </div>
          <div className="infografia">{current.component}</div> 
      </div>
          
      <div className="links">
        <Link className="return" href="./">
          Volver a proyectos
        </Link>
        <Link className="return" href="/">
          Volver a Inicio
        </Link>
      </div>
    </div>
  );
}
