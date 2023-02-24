import React from "react";
import '../styles/Planescard.css'
const Planescard = (props) => {
    return(
        <div className="Planescard-container" id={props.Planescard_id}>
            <h3>{props.Planescard_title}</h3>
            <ul>
                <li>{props.Planescard_text}</li>
                <li>{props.Planescard_text}</li>
                <li>{props.Planescard_text}</li>
            </ul>
            <button>Sube de Nivel</button>

        </div>
    );
};
export {Planescard}