import React from 'react';
import '../styles/portada.css'
import ImgPortada from '../resources/foto principal-01.jpg'

const Portada = () => {
    return (
    <section className='portada'>
        <img src={ImgPortada} alt="" />
        <div className='efect'></div>
        <div className='names-box'>
            <h1>Memi y Matias</h1>
            <h5>NUESTRA GRAN AVENTURA</h5>
        </div>
    </section>
    );
};

export default Portada;