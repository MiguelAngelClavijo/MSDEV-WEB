import React from "react";
import "../styles/Footer.css";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import linkedin from "../assets/icons/linkedin.svg";
import behance from "../assets/icons/behance.svg";

const Footer = () => {
  return (
    <div className="Footer-Container">
      <div className="Footer-Logo">
        <p id="Footer-Logo-Name">MS DEV</p>
        <p id="Footer-Logo-Register">® 2023 MS Dev</p>
      </div>
      <div className="Footer-Form">
        <div className="Footer-Form-Head">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="¿Prefieres por correo? Escribenos"
          />
          <button id="Footer-Btn">Enviar</button>
        </div>
        <div className="Footer-Form-Bottom">
          <a
            href="https://celestial-cannon-390.notion.site/T-rminos-y-Condiciones-b947dda8d2be4b0eaf9fd67ad3a7050b"
            target="_blank"
          >
            <p>Terminos y condiciones </p>
          </a>
          <a
            href="https://celestial-cannon-390.notion.site/Pol-tica-de-Privacidad-c40ff4cb38784c64bd62b804ef15217f"
            target="_blank"
          >
            <p>Politica de privacidad</p>
          </a>
        </div>
      </div>
      <div className="Footer-Icons">
        <p>
          <img src={facebook}></img>
        </p>
        {/* <p>
          <img src={linkedin}></img>
        </p>
        <p>
          <img src={instagram}></img>
        </p>
        <p>
          <img src={behance}></img>
        </p> */}
      </div>
    </div>
  );
};

export { Footer };
