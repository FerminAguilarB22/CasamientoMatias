import React from 'react';
import iglesia from '../resources/iglesia.png'
import '../styles/infoIglesia.css'

const InfoIglesia = () => {
    return (
        <section className='cajaIglesia'>
            <div className='imgIglesia'>
                <img src={iglesia} alt="iglesia" />
            </div>
            <div className='infoIglesia'>
                <h2>Ceremonia</h2>
                <p>La ceremonia se realizará el 28 de Julio a las 18:00 horas en la
Parroquia Nuestra Señora Del Valle. Clickea en el botón y recibi las indicaciones de como llegar.</p>
                <button><a href="https://goo.gl/maps/q6aenhbM5ht2eDzm8" >Llegar a la ceremonia</a></button>
            </div>
        </section>
    );
};

export default InfoIglesia;