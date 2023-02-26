import React from 'react'
import '../styles/Stepcard.css'

const Stepcard = (props) => {
    return(
        <div className='Stepcard-container'id={props.StepcardId}>
            <h3 >{props.cardTitle}</h3>
            <p>{props.cardText}</p>
        </div>
    );
};
export {Stepcard}