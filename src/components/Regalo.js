import React from "react";
import regalo from "../resources/regalo.png";
import { useState } from "react";
import ModalRegalo from "./ModalRegalo";
const Regalo = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // const openModal = () => {
  //   setModalOpen(true);
  // };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <section className="box">
      <section className="cajaRegalo">
        <div className="imgRegalo">
          <img src={regalo} alt="copas" />
        </div>
        <div className="infoRegalo">
          <p>Si deseas hacernos un regalo</p>
          <button>Mas Info</button>
          <ModalRegalo isOpen={modalOpen} onRequestClose={closeModal} />
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
