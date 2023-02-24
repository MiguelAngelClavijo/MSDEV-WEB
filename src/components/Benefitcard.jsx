import React from "react";
import '../styles/Benefitcard.css'
const Benefitcard = (props) => {
    return(
        <div className="Benefitcard-container">
            <div id = {props.idcolor}>
                <img src={props.imgUrl}/>
            </div>
            <h3>{props.headingText}</h3>
            <p>{props.text}</p>
        </div>
    );
};

export {Benefitcard}