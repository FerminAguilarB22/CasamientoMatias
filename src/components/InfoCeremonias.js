import React from 'react';
import InfoIglesia from './InfoIglesia';
import '../styles/infoIglesia.css'
import InfoFiesta from './InfoFiesta';
const InfoCeremonias = () => {
    return (
        <div className='cajaCeremonias'>
            <InfoIglesia></InfoIglesia>
  
    
            <InfoFiesta></InfoFiesta>
        </div>
    );
};

export default InfoCeremonias;