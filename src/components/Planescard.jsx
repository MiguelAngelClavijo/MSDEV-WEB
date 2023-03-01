import React from "react";
import "../styles/Planescard.css";

const Planescard = (props) => {


  const link = () => {
    var message =
    
      "https://wa.me/573178225494?text="+props.Planescard_message
    window.open(message);
  };

  var Benefits = props.Planescard_text.map(function (i, index) {
    return <li key = {index}>✓ {i}.</li>;
  });

  return (
    <div className="Planescard-container" id={props.Planescard_id}>
      <h3>{props.Planescard_title}</h3>
      <p>{props.Planescard_p}</p>
      <ul>{Benefits}</ul>
      <div>
        <button onClick={link}>{props.Planescard_button}</button>
      </div>
    </div>
  );
};
export { Planescard };
