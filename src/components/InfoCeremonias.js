import React from 'react';
import InfoIglesia from './InfoIglesia';
import '../styles/infoIglesia.css'
import corazon from '../resources/corazones.png'
import InfoFiesta from './InfoFiesta';
const InfoCeremonias = () => {
    return (
        <div className='cajaCeremonias'>
            <InfoIglesia></InfoIglesia>
            <div className='cajaCorazon'>
                <img src={corazon} alt="hojas"/>
            </div>
            <InfoFiesta></InfoFiesta>
        </div>
    );
};

export default InfoCeremonias;