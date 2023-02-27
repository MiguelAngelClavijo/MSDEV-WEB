import React from "react";
import stepbystepIcon from "../assets/icons/stepbystep.svg";
import { Stepcard } from "../components/Stepcard";
import "../styles/Stepbystep.css";

const Stepbystep = () => {
  return (
    <div className="Stepbystep-container" id="Stepbystep">
      <div className="Stepbystep-container-mark">
        <img src={stepbystepIcon} />
        <p>Paso a paso</p>
      </div>
      <h2> Tan sencillo como</h2>
      <div
        className="Stepbystep-container-stepcard"
        id="Stepbystep_container_black"
      >
        <Stepcard
          cardTitle="1. Agenda tu Cita"
          cardText="Contáctanos y programa tu  reunión gratuita en línea para discutir tus necesidades y objetivos."
          StepcardId="stepcard_white"
        />
      </div>
      <div
        className="Stepbystep-container-stepcard"
        id="Stepbystep_container_white"
      >
        <Stepcard
          cardTitle="2. Diseño Ideal"
          cardText="Nuestro equipo de expertos trabajará en estrecha colaboración contigo para crear un diseño que cumpla con tus expectativas y objetivos."
          StepcardId="stepcard_black"
        />
      </div>
      <div
        className="Stepbystep-container-stepcard"
        id="Stepbystep_container_purple"
      >
        <Stepcard
          cardTitle="3. Vive tu marca"
          cardText="Una vez que estés satisfecho con el diseño, implementaremos tu proyecto y comenzarás a ver los resultados que deseas."
          StepcardId="stepcard_green"
        />
      </div>
    </div>
  );
};

export { Stepbystep };
