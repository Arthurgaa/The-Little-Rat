import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import backgroundImage from '/banner11.jpg'; // Substitua pelo caminho correto da sua imagem

// Componentes Estilizados

const RegisterContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #111;
  color: #fff;
  padding: 80px 20px 60px; /* Aumentado o padding-bottom para espaçamento */
  box-sizing: border-box;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  position: relative;

  /* Overlay para melhorar a legibilidade do texto */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
`;

const RegisterContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 500px;
  background-color: rgba(17, 17, 17, 0.85);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #dfa54b;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
  color: #fff;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #dfa54b;
    box-shadow: 0 0 5px rgba(223, 165, 75, 0.5);
  }
`;

const SubmitButton = styled.button`
  background-color: #dfa54b;
  color: #000;
  border: 2px solid transparent;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
  box-sizing: border-box;

  &:hover {
    background-color: #fff;
    color: #dfa54b;
    border-color: #dfa54b;
    transform: translateY(-2px);
  }
`;

const FeedbackMessage = styled.p`
  margin-top: 15px;
  font-size: 16px;
  color: #4CAF50; /* Cor verde para sucesso */
  text-align: center;
`;



// Componente Register

const Register = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert('Please fill out all fields.');
      return;
    }

    // Verifica se o navegador suporta localStorage
    if (typeof Storage !== "undefined") {
      // Salva a conta do usuário no localStorage
      localStorage.setItem('user', JSON.stringify({ name, email, password }));

      // Alerta de sucesso e redirecionamento para a página Home
      setFeedback('Account created successfully! You are now logged in.');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } else {
      alert('Your browser does not support localStorage.');
    }
  };

  return (
    <RegisterContainer>
      <RegisterContent>
        <Title>Create Your Account</Title>
        <Form onSubmit={handleRegister}>
          <Label htmlFor="name">Your Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <Label htmlFor="email">Your Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Label htmlFor="password">Your Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <SubmitButton
            type="submit"
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            Sign Up
          </SubmitButton>

          {feedback && <FeedbackMessage>{feedback}</FeedbackMessage>}
        </Form>
      </RegisterContent>
    </RegisterContainer>
  );
};

export default Register;
