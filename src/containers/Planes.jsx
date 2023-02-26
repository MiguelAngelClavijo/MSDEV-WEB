import React from "react";
import dolarSign from "../assets/icons/dolarSign.svg";
import { Planescard } from "../components/Planescard";
import "../styles/Planes.css";

const Planes = () => {
  return (
    <div className="Planes-container">
      <div>
        <img src={dolarSign} />
        <p>Nuestros planes</p>
      </div>
      <h2>nuestro planes</h2>
      <div className="Planes-planescard-container">
        <Planescard
          Planescard_title="titulo"
          Planescard_text="texto"
          Planescard_id="Planescard_id_white"
          Planescard_message="Basico !!"
        />
        <Planescard
          Planescard_title="titulo"
          Planescard_text="texto"
          Planescard_id="Planescard_id_blue"
          Planescard_message="Deluxe !!"
        />
        <Planescard
          Planescard_title="titulo"
          Planescard_text="texto"
          Planescard_id="Planescard_id_green"
          Planescard_message="Master !!"
        />
      </div>
    </div>
  );
};

export { Planes };
