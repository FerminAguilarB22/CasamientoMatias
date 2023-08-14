import React from 'react';
import InfoIglesia from './InfoIglesia';
import '../styles/infoIglesia.css'
import hojas from '../resources/hojas.png'
import InfoFiesta from './InfoFiesta';
const InfoCeremonias = () => {
    return (
        <div className='cajaCeremonias'>
            <InfoIglesia></InfoIglesia>
            <div className='cajaHojas'>
                <img src={hojas} alt="hojas"/>
            </div>
            <InfoFiesta></InfoFiesta>
        </div>
    );
};

export default InfoCeremonias;