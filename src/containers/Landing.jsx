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
        <div className="Black-Card">
          <div className="Content-Black-Card">
            <div className="Black-Card-img">
              <img src={backarrow} />
              <img src={numvector} />
            </div>
            <div className="Black-Card-Text">
              <p id="Black-Card-Text-Header">Diseño Flexible</p>
              <p id="Black-Card-Text-Body">
                Adaptable y responsive, para cualquier dispositivo o pantalla
                adaptandonos a ti
              </p>
            </div>
          </div>
        </div>
        <div className="Green-Card">
          <div className="Content-Green-Card">
            <div className="Green-Card-img">
              <img src={numvector2} />
              <img src={backarrow2} />
            </div>
            <div className="Green-Card-Text">
              <p id="Green-Card-Text-Header">“El usuario es primero”</p>
              <p id="Green-Card-Text-Body">
                Elementos visuales cautivadores e interactivos para una
                experiencia de usuario memorable
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Landing };
