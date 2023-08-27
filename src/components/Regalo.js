import React from "react";
import regalo from "../resources/regalo.png";
import styled from "styled-components";
import Modal from "./Modal";
import { useState } from "react";

const Regalo = () => {
  const [estadoModal, setEstadoModal] = useState(false);
  return (
    <section className="box">
      <section className="cajaRegalo">
        <div className="imgRegalo">
          <img src={regalo} alt="copas" />
        </div>
        <div className="infoRegalo">
          <p>Si deseas hacernos un regalo</p>
          <div>
            <ContenedorBotones>
              <Boton
                onClick={() => {
                  setEstadoModal(!estadoModal);
                }}
              >
                Ver más
              </Boton>
            </ContenedorBotones>
            <Modal estadoModal={estadoModal} cambiarEstado={setEstadoModal}>
              <Contenido>
                <h5>Transferencias</h5>
                <p>ICBC Alias: memiymatias.23</p>
                <h5>Tienda de Regalos</h5>
                <p><a href="https://instagram.com/plaza_yerbabuena?igshid=MzRlODBiNWFlZA==">Plaza Yerba Buena</a></p>
                <p><a href="https://instagram.com/plaza_yerbabuena?igshid=MzRlODBiNWFlZA==">Pato Gallo deco Bazar</a></p>
              </Contenido>
            </Modal>
          </div>
        </div>
      </section>
      <div className="formaCurva">
        <p>
          En el salón tambien se encontrara un buzón por si queres hacernos el
          regalo ese mismo diá.
        </p>
      </div>
    </section>
  );
};

export default Regalo;

const ContenedorBotones = styled.div`
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Boton = styled.button`
  display: block;
  padding: 10px 30px;
  border-radius: 100px;
  color: #fff;
  border: none;
  background: #977b66;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  transition: 0.3s ease all;

  &:hover {
    background: #a59776;
  }
`;

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h5 {
    font-family: Beyond Infinity;
    font-size: 2.8rem;
    color: #977b66;
    font-weight: lighter;
  }

  p {
    margin: 6px 0px;
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 1rem;
    color: #977b66;
  }
`;
