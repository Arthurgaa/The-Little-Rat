import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import banner12 from '/banner12.jpg'; // Exemplo de uso de uma imagem

// Componentes Estilizados

const ContactContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #111;
  color: #fff;
  padding: 80px 20px 60px; /* Aumentado o padding-bottom para espaçamento */
  box-sizing: border-box;
  background-image: url(${banner12});
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

const ContactContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 600px;
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

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
  resize: vertical;
  
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

const Contact = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    setFeedback('Thank you for your message! We will get back to you soon.');
    e.target.reset();
  };

  return (
    <ContactContainer>
      <ContactContent>
        <Title>Contact Us</Title>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="name">Your Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
          
          <Label htmlFor="email">Your Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          
          <Label htmlFor="message">Your Message</Label>
          <TextArea
            id="message"
            name="message"
            placeholder="Enter your message"
            rows="5"
            required
          />
          
          <SubmitButton
            type="submit"
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            Send Message
          </SubmitButton>
          
          {feedback && <FeedbackMessage>{feedback}</FeedbackMessage>}
        </Form>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
