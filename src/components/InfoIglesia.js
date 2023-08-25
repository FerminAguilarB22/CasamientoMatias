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
                <p>Dia 30 de septiembre a las 16:45 en la Capilla Sagrado Corazón de Jesús Los Nogales</p>
                <button><a href="https://goo.gl/maps/quaFGg7rEGqhKNEs5" >Llegar a la ceremonia</a></button>
            </div>
        </section>
    );
};

export default InfoIglesia;