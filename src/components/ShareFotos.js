import React from 'react';
import '../styles/shareFotos.css'
const ShareFotos = () => {
    return (
        <section className="cajaShare">
        <div className="Titulo">
          <h3>#Memi&Matias</h3>
        </div>
        <div className="infoShare">
          <p>No te olvides de compartirnos las fotos que saques con tu celu!</p>
          <button><a href="https://photos.app.goo.gl/awkQ97yi6ewdrLri9">Comparti tus fotos</a></button>
        </div>
      </section>
    );
};

export default ShareFotos;