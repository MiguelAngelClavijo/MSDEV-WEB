import React from "react";
import "../styles/Calltoaction.css";
import imgcta from "../assets/img/imgcta.png";

const Calltoaction = () => {
  const link = () => {
    window.open(
      "https://wa.me/573178225494?text=Estoy listo para subir de nivel con uno de sus planes !!"
    );
  };
  return (
    <div className="Calltoaction-Container">
      <div className="Calltoaction-BlackCover"></div>
      <p id="Calltoaction-Title">Una nueva manera de entender el diseño !</p>
      <p id="Calltoaction-Text">
        Obten una consulta gratuita con MS DEV y aprende cómo puede mejorar tu
        negocio con un diseño ilimitado.
      </p>
      <button onClick={link} className="Calltoaction-Button-Cta">
        Eres libre de escoger, Comienza ya →
      </button>
    </div>
  );
};

export { Calltoaction };
