import React from 'react'
import stepbystepIcon from '../assets/icons/stepbystep.svg'
import { Stepcard } from '../components/Stepcard'
import '../styles/Stepbystep.css'

const Stepbystep = () => {
    return (
        <div className='Stepbystep-container'>
            <div className='Stepbystep-container-mark'>
                <img src={stepbystepIcon} />
                <p>Paso a paso</p>
            </div>
            <h2> Tan sencillo como</h2>
            <div className = "Stepbystep-container-stepcard"id = "Stepbystep_container_black">
            <Stepcard cardTitle="1. Agenda tu Cita" cardText = "No lo je aun" StepcardId= "stepcard_white"/>
            </div>
            <div className = "Stepbystep-container-stepcard" id = "Stepbystep_container_white">
                <Stepcard cardTitle="2. Diseño Ideal" cardText = "No lo je aun"StepcardId= "stepcard_black"/>
            </div>
            <div className = "Stepbystep-container-stepcard" id = "Stepbystep_container_purple">
                <Stepcard cardTitle="3. Vive tu marca" cardText = "No lo je aun"StepcardId= "stepcard_green"/>
            </div>
        </div>
    )
}

export { Stepbystep }