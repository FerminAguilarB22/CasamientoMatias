import React from "react";
import Modal from "react-modal";
import "../styles/modalRegalo.css";

Modal.setAppElement("#root"); // Necesario para la accesibilidad

const ModalRegalo = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal modal-overlay"
    >
      <div className="modal-content">
        <button className="close-button" onClick={onRequestClose}>
        
        </button>
        <section className="text-center mt-5">
            <div>
                <h4>Transferencias</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, dolorem?</p>
            </div>
            <div>
                <h4>Casas de decoracion</h4>
                <p>Lorem ipsum dolor</p>
            </div>
            <div>
                <h4>Buzon en el salon</h4>
                
            </div>
        </section>
      </div>
    </Modal>
  );
};

export default ModalRegalo;