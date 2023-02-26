import React from "react";
import "../styles/Landing.css";
import keysicon from "../assets/icons/keysicon.svg";
import reacticon from "../assets/icons/reacticon.svg";
import jsicon from "../assets/icons/jsicon.svg";
import cssicon from "../assets/icons/cssicon.svg";
import backarrow from "../assets/icons/backarrow.svg";
import numvector from "../assets/icons/numvector.svg";
import backarrow2 from "../assets/icons/backarrow2.svg";
import numvector2 from "../assets/icons/numvector2.svg";

const Landing = () => {
  return (
    <div className="Landing-Container">
      <div className="Landing-Container-Left">
        <img src={keysicon}></img>
        <img src={reacticon}></img>
        <h2>Tu sitio web es un reflejo de ti y de tu marca</h2>
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
        <img src={jsicon}></img>
        <img src={cssicon}></img>
        <div className="Black-Card Landing-card">
          <div>
            <img src={backarrow} />
            <img src={numvector} />
          </div>
          <h3 id="Black-Card-Text-Header">Diseño Flexible</h3>
          <p id="Black-Card-Text-Body">
            Adaptable y responsive, para cualquier dispositivo o pantalla
            adaptandonos a ti
          </p>
        </div>

        <div className="Green-Card Landing-card">
          <div>
            <img src={numvector2} />
            <img src={backarrow2} />
          </div>

          <h3 id="Green-Card-Text-Header">“El usuario es primero”</h3>
          <p id="Green-Card-Text-Body">
            Elementos visuales cautivadores e interactivos para una experiencia
            de usuario memorable
          </p>
        </div>
      </div>
    </div>
  );
};

export { Landing };
