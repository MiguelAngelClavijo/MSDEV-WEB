import React from "react";
import "../styles/Calltoaction.css";

const Calltoaction = () => {
  const link = () => {
    window.open(
      "https://wa.me/573178225494?text=Estoy listo para subir de nivel con uno de sus planes !!"
    );
  };

  return (
    <div className="Calltoaction-Container" id="Calltoaction">
      <div className="Calltoaction-BlackCover"></div>
      <p id="Calltoaction-Title">Una nueva manera de entender el diseño !</p>
      <p id="Calltoaction-Text">
        Obten una consulta gratuita con MS DEV y aprende cómo puede mejorar tu
        negocio con un diseño ilimitado.
      </p>
      <button onClick={link} className="Calltoaction-Button-Cta">
        Eres libre de escoger, Agenda{" "}
        <span id="Calltoaction-Button-Cta-Free">Gratis</span> tu cita ahora →
      </button>
    </div>
  );
};

export { Calltoaction };
