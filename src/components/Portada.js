import React from 'react';
import '../styles/portada.css'
import ImgPortada from '../resources/portada.jpeg'

const Portada = () => {
    return (
    <section className='portada'>
        <img src={ImgPortada} alt="" />
        <div className='names-box'>
            <h1>Juan y Pili</h1>
            <h5>nuestra gran aventura</h5>
        </div>
    </section>
    );
};

export default Portada;