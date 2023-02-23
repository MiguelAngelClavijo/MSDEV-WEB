import React from "react";
import "../styles/Navbar.css";
import lang from "../assets/icons/lang.svg";
import downarrow from "../assets/icons/downarrow.svg";

const Navbar = () => {
  return (
    <div className="Navbar-Container">
      <div className="Navbar-Container-Left">
        <h1 className="Navbar-logo">MS DEV</h1>
        <ul className="Navbar-links">
          <li>Beneficios</li>
          <li>Planes</li>
          <li>Precios</li>
          <li>Contacto</li>
        </ul>
      </div>
      <div className="Navbar-Container-Right">
        <img src={lang} alt="lang" />
        <p>ES</p>
        <img src={downarrow} alt="downarrow" />
        <button id="Navbar-Button">Sube de nivel</button>
      </div>
    </div>
  );
};

export { Navbar };
