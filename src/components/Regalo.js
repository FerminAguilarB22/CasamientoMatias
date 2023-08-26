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
                Ver mas
              </Boton>
            </ContenedorBotones>
            <Modal estadoModal={estadoModal} cambiarEstado={setEstadoModal}>
              <Contenido>
                <h5>Transferencias</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Debitis, quod.
                </p>
                <h5>Tienda de Regalos</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Debitis, quod.
                </p>
              </Contenido>
            </Modal>
          </div>
        </div>
      </section>
      <div className="formaCurva">
        <p>
          En el salon tambien se encontrara una urna por si queres hacernos el
          regalo ese mismo dia.
        </p>
      </div>
    </section>
  );
};

export default Regalo;

const ContenedorBotones = styled.div`
  padding: 40px;
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
    background: #A59776;
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