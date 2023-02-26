import React from "react";
import "../styles/Planescard.css";

const Planescard = (props) => {
  const link = () => {
    var message =
      "https://wa.me/573178225494?text=Hola! Estoy interesado en su plan " +
      props.Planescard_message;
    window.open(message);
  };
  return (
    <div className="Planescard-container" id={props.Planescard_id}>
      <h3>{props.Planescard_title}</h3>
      <ul>
        <li>{props.Planescard_text}</li>
        <li>{props.Planescard_text}</li>
        <li>{props.Planescard_text}</li>
      </ul>
      <div>
        <button onClick={link}>Sube de Nivel</button>
      </div>
    </div>
  );
};
export { Planescard };
