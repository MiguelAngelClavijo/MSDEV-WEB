import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dolarSign from "../assets/icons/dolarSign.svg";
import { Planescard } from "../components/Planescard";
import "../styles/Planes.css";

const Planescard_Basic = [
  "Garantizamos un resultado exactamente igual a la propuesta",
  "Conexión con una red social para aumentar tu alcance",
  "Diseño de Página web Estática con Call to Action",
];

const Planescard_Deluxe = [
  "Funcionalidades limitadas para mantener el costo accesible",
  "Diseño hecho a la medida dependiendo de tus necesidades",
  "Funcionalidades de correo y redes sociales",
  "Asesoramiento de desarrollo y de proyecto",
  "Sitio Web dinámico y llamativo",
];
const Planescard_Master = [
  "Posicionamiento inicial en linea para tu marca o proyecto",
  "Desarrollo personalizado con diferentes funcionalidades",
  "Integración completa con tu estrategia de marketing",
  "Experiencia de usuario Excepcional",
  "Soporte Técnico prioritario",
];

const basictextWith =
  "¡Hola! Sabemos que cuentas con un diseño propio. Estás un paso más cerca de llevar tu proyecto al siguiente nivel. Con este plan Básico, tendrás una presencia online a un precio accesible. %0A ¡Comencemos! %0A ¡Agendemos una cita lo antes posible!";
const basictextWithout =
  "¡Genial! Has elegido el plan básico para dar el primer paso en tu proyecto, déjanos ayudarte creando desde cero el diseño de tu empresa. Con esta opción, tendrás lo que necesitas para %0A empezar a destacar en línea. ¡Adelante! %0A ¡Agendemos una cita lo antes posible!";
const deluxeTextWith =
  "¡Excelente elección! Implementemos tu imagen de marca. Con el plan Deluxe, podrás personalizar y optimizar tu presencia en línea para un mayor impacto en tus clientes. ¡Estamos emocionados de trabajar juntos!%0A¡Agendemos una cita lo antes posible!";
const deluxeTextWithout =
  "¡Vamos por más! Con el plan Deluxe, obtendrás una presencia en línea de alta calidad y personalizada creando juntos desde 0 la imagen de tu empresa, para hacer crecer tu proyecto al siguiente nivel. ¡Listos para comenzar!%0A¡Agendemos una cita lo antes posible!";
const masterTextWith =
  "¡Es hora de despegar! Con el plan Máster, tendrás todo lo que necesitas para llevar tu proyecto al siguiente nivel, incluyendo el diseño de tu empresa, funcionalidades y una presencia online personalizada. ¡Estamos listos!%0A¡Agendemos una cita lo antes posible!";
const masterTextWithout =
  "¡Felicidades! Has elegido el mejor plan para hacer realidad tus objetivos. Con nuestra solución personalizada, crearemos a la medida la imagen de tu empresa así estarás en camino a alcanzar el éxito que mereces.%0A¡Agendemos una cita lo antes posible";

const Planes = () => {
  const [number1, setNumber1] = useState(30);
  const [number2, setNumber2] = useState(60);
  const [number3, setNumber3] = useState(90);
  const [masterText, setMasterText] = useState("master");
  const [deluxeText, setDeluxeText] = useState("deluxe");
  const [basicText, setbasicText] = useState("basic");
  const [isActive, setIsActive] = useState(false);
  const toggle = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    isActive ? setbasicText(basictextWith) : setbasicText(basictextWithout);
    isActive ? setDeluxeText(deluxeTextWith) : setDeluxeText(deluxeTextWithout);
    isActive ? setMasterText(masterTextWith) : setMasterText(masterTextWithout);
    isActive ? setNumber1(100) : setNumber1(150);
    isActive ? setNumber2(300) : setNumber2(350);
    isActive ? setNumber3(700) : setNumber3(800);
  });

  return (
    <div className="Planes-container" id="Planes">
      <div>
        <img src={dolarSign} />
        <p>Nuestros planes</p>
      </div>
      <h2>Explora nuestas opciones</h2>

      <div className="Planes-sliderContainer">
        <p>¿Ya cuentas con un diseño?</p>
        <div className="Planes-Switch-Container">
          <span>No</span>
          <div className="Planes-switch" data-ison={isActive} onClick={toggle}>
            <motion.div
              className="Planes-handle"
              data-ison={isActive}
              animate={{
                transition: { type: "spring", stiffness: 700, damping: 30 },
              }}
              layout
            ></motion.div>
          </div>
          <span>Si</span>
        </div>
      </div>
      <div className="Planes-planescard-container">
        <Planescard
          Planescard_title="Básico"
          Planescard_p="¡Hazte notar en linea con estilo y facilidad!"
          Planescard_text={Planescard_Basic}
          Planescard_id="Planescard_id_white"
          Planescard_message={basicText}
          Planescard_button="¡Comienza ahora!"
          Planescard_number={30}
          Planescard_target={number1}
        />
        <Planescard
          Planescard_title="Deluxe"
          Planescard_p="Impulsa tu presencia en linea con nuestra solución dinámica"
          Planescard_text={Planescard_Deluxe}
          Planescard_id="Planescard_id_blue"
          Planescard_message={deluxeText}
          Planescard_button="¡Sube de nivel!"
          Planescard_number={60}
          Planescard_target={number2}
        />
        <Planescard
          Planescard_title="Máster"
          Planescard_p="Maximiza tu éxito con nuestro plan Máster"
          Planescard_text={Planescard_Master}
          Planescard_id="Planescard_id_green"
          Planescard_message={masterText}
          Planescard_button="¡Impulsa tu carrera!"
          Planescard_number={90}
          Planescard_target={number3}
        />
      </div>
      <p>
        *Todos nuestros planes cuentan con vista adaptada a todos los
        dispositivos.{" "}
      </p>
      <p>*Los planes que requieran diseño incluyen 2 revisiones. </p>
    </div>
  );
};

export { Planes };
