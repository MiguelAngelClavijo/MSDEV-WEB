import React from "react";
import {motion, useTransform, useScroll, useSpring } from "framer-motion";
import "../styles/Landing.css";
import keysicon from "../assets/icons/keysicon.svg";
import reacticon from "../assets/icons/reacticon.svg";
import jsicon from "../assets/icons/jsicon.svg";
import cssicon from "../assets/icons/cssicon.svg";
import backarrow from "../assets/icons/backarrow.svg";
import numvector from "../assets/icons/numvector.svg";
import backarrow2 from "../assets/icons/backarrow2.svg";
import numvector2 from "../assets/icons/numvector2.svg";

const Landing = () => {

  const {scrollY} = useScroll()
  const scrollData = useTransform(
    scrollY,
    [0, 100],
    [0,50],
    {clamp: false}
  )
const scrollOutput = useSpring(scrollData, {mass: 0.7})
  
  const link = () => {
    window.open(
      "https://wa.me/573178225494?text=Estoy listo para subir de nivel con uno de sus planes !!"
    );
  };
  return (
    <div className="Landing-Container">
      <div className="Landing-Container-Left">
        <motion.img src={keysicon} style = {{translateY: scrollOutput}}></motion.img>
        <motion.img src={reacticon} style = {{translateY: scrollOutput}}></motion.img>
        <h2>¡Tu sitio web es un reflejo de ti y de tu marca!</h2>
        <p>
          Permítenos ayudarte a causar una buena impresión con un diseño único
          de tu pagina web con las últimas tendencias
        </p>
        <div className="Landing-Container-Bottom">
          <p>¿Estas listo para llegar a un siguiente nivel?</p>
          <button onClick={link}>Habla con nosotros ahora →</button>
        </div>
      </div>
      <div className="Landing-Container-Right">
        <motion.img src={jsicon} style = {{translateY: scrollOutput}}></motion.img>
        <motion.img src={cssicon} style = {{translateY: scrollOutput}}></motion.img>
        <div className="Black-Card Landing-card">
          <div>
            <img src={backarrow} />
            <img src={numvector} />
          </div>
          <h3 id="Black-Card-Text-Header">Diseño Flexible</h3>
          <p id="Black-Card-Text-Body">
            Adaptable y responsive, para cualquier dispositivo o pantalla
            adaptandonos a ti
          </p>
        </div>

        <div className="Green-Card Landing-card">
          <div>
            <img src={numvector2} />
            <img src={backarrow2} />
          </div>

          <h3 id="Green-Card-Text-Header">“El usuario es primero”</h3>
          <p id="Green-Card-Text-Body">
            Elementos visuales cautivadores e interactivos para una experiencia
            de usuario memorable
          </p>
        </div>
      </div>
    </div>
  );
};

export { Landing };
