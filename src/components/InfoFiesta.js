import React from 'react';
import copas from '../resources/copas.png'
import '../styles/infoFiesta.css'
const InfoFiesta = () => {
    return (
        <section className='cajaFiesta'>
        <div className='imgFiesta'>
            <img src={copas} alt="copas" />
        </div>
        <div className='infoFiesta'>
            <h2>Fiesta</h2>
            <p>Después de la ceremonia festejaremos en el Salón Country San Pablo</p>
            <button><a href="https://goo.gl/maps/b5StihnNmpyDoYtz9">Llegar a la fiesta</a></button>
        </div>
    </section>
    );
};

export default InfoFiesta;