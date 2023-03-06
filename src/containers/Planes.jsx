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
  "¡Hola! Ya cuento con un diseño propio. Estoy listo para llevar mi proyecto al siguiente nivel. Me interesa el plan Básico. %0A ¡Agendemos una cita lo antes posible!";
const basictextWithout =
  "¡Hola! Estoy interesado en el plan básico para dar el primer paso en mi proyecto, quiero empezar a destacar en línea con ustedes. %0A ¡Agendemos una cita lo antes posible!";
const deluxeTextWith =
  "¡Hola! Cuento con mi propia imagen de marca. Me interesa el plan Deluxe, para personalizar y optimizar mmi presencia en línea. %0A ¡Agendemos una cita lo antes posible!";
const deluxeTextWithout =
  "¡Hola! Me interesa el plan Deluxe, quiero obtener una presencia en línea de alta calidad y personalizada desde 0 con ustedes. %0A ¡Agendemos una cita lo antes posible!";
const masterTextWith =
  "¡Es hora de despegar! Quiero el plan Máster para tener todo lo que necesito desde 0 para impulsar mi proyecto al siguiente nivel. %0A ¡Agendemos una cita lo antes posible!";
const masterTextWithout =
  "¡Hola! Estoy interesado en el mejor plan para hacer realidad mis objetivos. Necesito una solución personalizada, creando a la medida la imagen de mi empresa. %0A ¡Agendemos una cita lo antes posible";
const Planes = () => {
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
          Planescard_p="¡ Hazte notar en linea con estilo y facilidad !"
          Planescard_text={Planescard_Basic}
          Planescard_id="Planescard_id_white"
          Planescard_message={basicText}
          Planescard_button="¡Comienza ahora!"
        />
        <Planescard
          Planescard_title="Deluxe"
          Planescard_p="Impulsa tu presencia en linea con nuestra solución dinámica"
          Planescard_text={Planescard_Deluxe}
          Planescard_id="Planescard_id_blue"
          Planescard_message={deluxeText}
          Planescard_button="¡Sube de nivel!"
        />
        <Planescard
          Planescard_title="Máster"
          Planescard_p="Maximiza tu éxito con nuestro plan Máster"
          Planescard_text={Planescard_Master}
          Planescard_id="Planescard_id_green"
          Planescard_message={masterText}
          Planescard_button="¡Impulsa tu carrera!"
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
