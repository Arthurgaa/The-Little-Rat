import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #111;
  padding: 40px;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  text-align: center;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  color: #dfa54b;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #fff;
`;

const Form = styled.form`
  width: 100%;
`;

const Input = styled.input`
  width: 85%;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
  background-color: #222;
  color: #fff;

  &:focus {
    border-color: #dfa54b;
    outline: none;
  }
`;

const Button = styled.button`
  background-color: #dfa54b;
  color: #000;
  border: none;
  padding: 12px 20px;
  border-radius: 4px;
  cursor: pointer;
  width: 85%;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #dfa54b;
  }
`;

const SignupText = styled.p`
  margin-top: 20px;
  color: #fff;
`;

const SignupLink = styled.span`
  color: #dfa54b;
  cursor: pointer;
  text-decoration: underline;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const isFormValid = email !== '' && password !== '';

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && password === 'password123') {
      alert('Login successful! Welcome back.');
      localStorage.setItem('isLoggedIn', true);
      navigate('/user');
    } else {
      alert('Invalid email or password.');
    }
  };

  const closeModal = () => {
    navigate('/');
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={closeModal}>&times;</CloseButton>
        <Title>Login</Title>
        <Form onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" disabled={!isFormValid}>
            Login
          </Button>
        </Form>
        <SignupText>
          Don't have an account?{' '}
          <SignupLink onClick={() => navigate('/register')}>Sign Up</SignupLink>
        </SignupText>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Login;




