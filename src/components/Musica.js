import React from 'react';
import musica from '../resources/Musica.png'
const Musica = () => {
    return (
        <section>
        <section className="cajaMusica">
        <div className="imgMusica">
          <img src={musica} alt="musica" />
        </div>
        <div className="infoMusica">
            <h5>¿Que canción no puede faltar?</h5>
          <p>¡Queremos crear una playlist inolvidable!</p>
          <button><a href="https://open.spotify.com/intl-es">Sugerir canción</a></button>
        </div>
        </section>
        <div className="dressCode">
            <h5>Dress code</h5>
        <p id='elegante'>
            Elegante
        </p>
      </div>
      </section>
    );
};

export default Musica;