import React from "react";
import codeIcon from '../assets/icons/codeIcon.svg'
import pincel from '../assets/icons/Pincel.svg'
import time from '../assets/icons/time.svg'
import lowPrice from '../assets/icons/lowPrice.svg'



import { Benefitcard } from "../components/Benefitcard";

import '../styles/Howitworks.css'


const Howitworks = () => {
    return(
        <div className="Howitworks-container">
            <div>
                <img src={codeIcon}/>
                <p> Como trabajamos</p>
            </div>
            <h2>Ten un sitio web excepcional</h2>
            <p id ="Howitworks-paragraph">Obtén más que un sitio web. Déjanos ayudarte a hacer realidad tu visión y maximizar tu presencia en línea con nuestro diseño, estrategia y experiencia.</p>
            <div className="Howitworks-benefits-container">
                <Benefitcard imgUrl = {pincel} headingText= "Diseño rapido" text = "Podrás ver como quedará tu sitio web en tan solo días" idcolor = "benefit_blue" />
                <Benefitcard imgUrl = {time} headingText= "Respuesta rápida" text = "Estamos disponibles para cuando lo necesites" idcolor = "benefit_purple" />
                <Benefitcard imgUrl = {lowPrice} headingText= "Precios para ti" text = "Podrás ver como quedará tu sitio web en tan solo días" idcolor = "benefit_green"/>
            </div>
        </div>
    );
};

export {Howitworks};