import React from "react";
import "../styles/Calltoaction.css";
import imgcta from "../assets/img/imgcta.png";

const Calltoaction = () => {
  return (
    <div className="Calltoaction-Container">
      <div className="Calltoaction-BlackCover"></div>
      <p id="Calltoaction-Title">Una nueva manera de entender el diseño !</p>
      <p id="Calltoaction-Text">
        Obten una consulta gratuita con MS DEV y aprende cómo puede mejorar tu
        negocio con un diseño ilimitado.
      </p>
      <button className="Calltoaction-Button-Cta">
        Eres libre de escoger, Comienza ya →
      </button>
    </div>
  );
};

export { Calltoaction };
