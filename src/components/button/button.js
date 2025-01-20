// src/components/Button/Button.js
import React from "react";
import "./button.css"; // Importando o CSS específico para o Botão

function Button({ isButtonDisabled }) {
  return (
    <button type="submit" className="login-button" disabled={isButtonDisabled}>
      Entrar
    </button>
  );
}

export default Button;
