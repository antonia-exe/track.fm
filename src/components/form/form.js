import React from "react";
import "./form.css"; 

function Form({
  handleSubmit, 
  handleEmailChange, 
  handlePasswordChange, 
  email, 
  password, 
  emailError, 
  passwordError, 
  formSubmitted
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="email" className="input-label">Usuário</label>
        <input
          type="text"
          id="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={handleEmailChange}
          className="input-field"
        />
        {formSubmitted && emailError && <p className="error-message">{emailError}</p>}
      </div>

      <div className="input-container">
        <label htmlFor="password" className="input-label">Senha</label>
        <input
          type="password"
          id="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={handlePasswordChange}
          className="input-field"
        />
        {formSubmitted && passwordError && <p className="error-message">{passwordError}</p>}
      </div>

      <div className="forgot-password">
        <a href="#">Esqueceu sua senha?</a>
      </div>
    </form>
  );
}

export default Form;
