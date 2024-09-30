import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Validação para garantir que o formulário só pode ser enviado se ambos os campos estiverem preenchidos
  const isFormValid = email !== '' && password !== '';

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulação de autenticação simples
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && password === 'password123') {
      alert('Login successful! Welcome back.');
      navigate('/');
    } else {
      alert('Invalid email or password.');
    }
  };

  return (
    <div style={modalOverlayStyle}>
      <div style={modalContentStyle}>
        {/* Botão de fechar o modal */}
        <button onClick={() => navigate(-1)} style={modalCloseButtonStyle}>
          &times;
        </button>

        {/* Título */}
        <h2 style={modalTitleStyle}>Login</h2>

        {/* Formulário */}
        <form onSubmit={handleLogin} style={formStyle}>
          {/* Campo de email */}
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            required
          />
          {/* Campo de senha */}
          <input
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            required
          />
          {/* Botão de Login */}
          <button
            type="submit"
            style={isFormValid ? buttonStyle : disabledButtonStyle}
            disabled={!isFormValid}
          >
            Login
          </button>
        </form>

        {/* Link para cadastro */}
        <p style={signupTextStyle}>
          Don't have an account?{' '}
          <span
            onClick={() => navigate('/register')}
            style={signupLinkStyle}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

// Estilos do modal
const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.8)', // Fundo semitransparente
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center', // Centraliza verticalmente e horizontalmente
  zIndex: 1000,
};

const modalContentStyle = {
  backgroundColor: '#fff',
  padding: '40px',
  borderRadius: '10px',
  width: '100%',
  maxWidth: '400px',
  textAlign: 'center',
  position: 'relative',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Sombra suave para destacar o modal
};

const modalCloseButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  fontSize: '24px',
  color: '#000',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontWeight: 'bold',
};

const modalTitleStyle = {
  marginBottom: '20px',
  fontSize: '24px',
  color: '#333',
};

const formStyle = {
  width: '100%',
  textAlign: 'center',
};

const inputStyle = {
  width: '85%', // Diminui a largura dos inputs para 85% do contêiner
  padding: '10px', // Ajusta o padding para não exagerar o tamanho dos campos
  marginBottom: '15px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '16px',
};

const buttonStyle = {
  backgroundColor: '#daa520',
  color: '#000',
  border: 'none',
  padding: '12px 20px',
  borderRadius: '4px',
  cursor: 'pointer',
  width: '85%', // Faz o botão ter a mesma largura que os campos de input
  fontSize: '16px',
};

const disabledButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#ddd', // Cor diferente para o botão desabilitado
  color: '#aaa',
  cursor: 'not-allowed',
};

const signupTextStyle = {
  marginTop: '20px',
  color: '#333',
};

const signupLinkStyle = {
  color: '#daa520',
  cursor: 'pointer',
  textDecoration: 'underline',
};

export default Login;


