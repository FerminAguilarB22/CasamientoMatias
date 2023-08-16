import React from "react";
import "../styles/albumFotos.css";
import Corazon from "../resources/corazones.png";
import Foto1 from "../resources/nosotros1.jpg";
const AlbumFotos = () => {
  return (
    <section className="album-fotos">
      <div className="nosotros">
        <div className="corazon">
          <img src={Corazon} alt="corazon" />
        </div>
        <h2>Nosotros</h2>
        <div className="corazon">
          <img src={Corazon} alt="corazon" />
        </div>
      </div>
      <section className="pics-box">
        <div className="pic-1 pic-templete">
          <div className="foto">
            <img src={Foto1} alt="pareja"/>
          </div>
        </div>
        <div className="pic-2 pic-templete">
          <div className="foto">
            <img src={Foto1} alt="pareja"/>
          </div>
        </div>
        <div className="pic-3 pic-templete">
          <div className="foto">
            <img src={Foto1} alt="pareja"/>
          </div>
        </div>
        <div className="pic-4 pic-templete">
          <div className="foto">
            <img src={Foto1} alt="pareja"/>
          </div>
        </div>
        <div className="pic-5 pic-templete">
          <div className="foto">
            <img src={Foto1} alt="pareja"/>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AlbumFotos;
