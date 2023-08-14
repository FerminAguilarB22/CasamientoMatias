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
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, cum? Nemo quam consequatur error at soluta non et saepe similique?</p>
                <button>llegar a la ceremonia</button>
            </div>
        </section>
    );
};

export default InfoIglesia;