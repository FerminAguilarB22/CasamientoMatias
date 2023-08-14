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
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, cum? Nemo quam consequatur error at soluta non et saepe similique?</p>
            <button>llegar a la fiesta</button>
        </div>
    </section>
    );
};

export default InfoFiesta;