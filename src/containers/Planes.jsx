import React from "react";
import dolarSign from "../assets/icons/dolarSign.svg";
import { Planescard } from "../components/Planescard";
import "../styles/Planes.css";
const Planescard_Basic = ["1", "2", "3", "4", "5", "6"];
const Planescard_Deluxe = ["1", "2", "3"];
const Planescard_Master = ["1", "2"];

const Planes = () => {
  return (
    <div className="Planes-container" id="Planes">
      <div>
        <img src={dolarSign} />
        <p>Nuestros planes</p>
      </div>
      <h2>Explora nuestas opciones</h2>
      <div className="Planes-planescard-container">
        <Planescard
          Planescard_title="Basico"
          Planescard_text={Planescard_Basic}
          Planescard_id="Planescard_id_white"
          Planescard_message="Basico !!"
        />
        <Planescard
          Planescard_title="Deluxe"
          Planescard_text={Planescard_Deluxe}
          Planescard_id="Planescard_id_blue"
          Planescard_message="Deluxe !!"
        />
        <Planescard
          Planescard_title="Master"
          Planescard_text={Planescard_Master}
          Planescard_id="Planescard_id_green"
          Planescard_message="Master !!"
        />
      </div>
    </div>
  );
};

export { Planes };
