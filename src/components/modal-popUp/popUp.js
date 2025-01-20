import React from "react";
import "./popUp.css";

function ModalPopup({ showSuccessModal, closeModal }) {
  if (!showSuccessModal) return null;  // Se showSuccessModal for false, o modal não será exibido

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <img src="/check-circle.svg" alt="Ícone de sucesso" className="success-icon" />
        </div>
        <p>Formulário enviado com sucesso!</p>
        <button className="modal-button" onClick={closeModal}>Voltar</button>
      </div>
    </div>
  );
}

export default ModalPopup;
