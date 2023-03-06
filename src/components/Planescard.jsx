import React, { useEffect } from "react";
import "../styles/Planescard.css";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const Planescard = (props) => {
  const count = useMotionValue(props.Planescard_number);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, props.Planescard_target, { duration: 1 });
    console.log(props.Planescard_target);
    return animation.stop;
  }, [props.Planescard_target]);
  const link = () => {
    var message = "https://wa.me/573178225494?text=" + props.Planescard_message;
    window.open(message);
  };

  var Benefits = props.Planescard_text.map(function (i, index) {
    return <li key={index}>✓ {i}.</li>;
  });

  return (
    <div className="Planescard-container" id={props.Planescard_id}>
      <h3>{props.Planescard_title}</h3>
      <p>{props.Planescard_p}</p>
      <ul>{Benefits}</ul>
      <section className="Planescard-price-container">
        <p> Desde:</p>
        <div>
          <div className="Planescard-price-container-text">
            <motion.span>{rounded}</motion.span>
            <span>K</span>
            <span id="Planescard-price-container-text-cop"> cop</span>
          </div>
          <button onClick={link}>{props.Planescard_button}</button>
        </div>
      </section>
    </div>
  );
};
export { Planescard };
