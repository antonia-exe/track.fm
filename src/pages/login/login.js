import React, { useState } from "react";
import Form from "../../components/form/form";
import Logo from "../../components/logo/logo";
import Button from "../../components/button/button";
import ModalPopup from "../../components/modal-popUp/popUp";
import './login.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (formSubmitted) setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (formSubmitted) setPasswordError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    let valid = true;

    if (!email || !email.includes("@")) {
      setEmailError("Digite um e-mail válido.");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password || password.length < 6) {
      setPasswordError("A senha deve ter pelo menos 6 caracteres.");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      setShowSuccessModal(true);
      setEmail("");
      setPassword("");
      setEmailError("");
      setPasswordError("");
      setFormSubmitted(false);
    }
  };

  const closeModal = () => {
    setShowSuccessModal(false);
  };

  const isButtonDisabled = !email || !password;

  return (
    <div className="login-container">
      <div className="login-box">
        <Logo />
        <p className="login-welcome">Olá, seja bem-vindo de volta!</p>

        <form onSubmit={handleSubmit}>
          <Form
            email={email}
            password={password}
            handleEmailChange={handleEmailChange}
            handlePasswordChange={handlePasswordChange}
            emailError={emailError}
            passwordError={passwordError}
            formSubmitted={formSubmitted}
          />
          <Button type="submit" disabled={isButtonDisabled}>
            Entrar
          </Button>
        </form>
      </div>

      <ModalPopup showSuccessModal={showSuccessModal} closeModal={closeModal} />
    </div>
  );
}

export default Login;
