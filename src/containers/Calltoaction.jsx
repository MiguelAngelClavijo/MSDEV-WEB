import React from "react";
import "../styles/Calltoaction.css";

const Calltoaction = () => {
  const link = () => {
    window.open(
      "https://wa.me/573178225494?text=Hola! Quiero impulsar mi carrera al siguiente nivel y me gustaría saber cómo puedo hacerlo. ¿Podemos programar una reunión para discutir cómo podemos trabajar juntos?"
    );
  };

  return (
    <div className="Calltoaction-Container" id="Calltoaction">
      <div className="Calltoaction-BlackCover"></div>
      <p id="Calltoaction-Title">
        Si quieres ser el mejor, debes mostrar lo mejor
      </p>
      <p id="Calltoaction-Text">
        Muestra tu trabajo profesionalmente en línea y destaca de la multitud
      </p>
      <button onClick={link} className="Calltoaction-Button-Cta">
        Eres libre de escoger, Agenda{" "}
        <span id="Calltoaction-Button-Cta-Free">Gratis</span> tu cita ahora →
      </button>
    </div>
  );
};

export { Calltoaction };
