import React from "react";
import "../styles/Landing.css";
import keysicon from "../assets/icons/keysicon.svg";
import reacticon from "../assets/icons/reacticon.svg";
import jsicon from "../assets/icons/jsicon.svg";
import cssicon from "../assets/icons/cssicon.svg";

const Landing = () => {
  return (
    <div className="Landing-Container">
      <div className="Landing-Container-Left">
        <img src={keysicon} />
        <img src={reacticon} />
        <p>Tu sitio web es un reflejo de ti y de tu marca</p>
        <p>
          Permítenos ayudarte a causar una buena impresión con un diseño único
          de tu pagina web con las últimas tendencias
        </p>
        <div className="Landing-Container-Bottom">
          <p>¿Estas listo para llegar a un siguiente nivel?</p>
          <button>Habla con nosotros ahora →</button>
        </div>
      </div>
      <div className="Landing-Container-Right">
        <img src={jsicon} />
        <img src={cssicon} />
        <div className="Black-Card"></div>
        <div className="Green-Card"></div>
      </div>
    </div>
  );
};

export { Landing };
