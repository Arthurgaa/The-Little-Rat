// src/components/FixedCartLink.jsx
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FixedCartLink = styled(Link)`
  position: fixed;
  bottom: 30px; /* Ajustado para ficar acima do Footer */
  right: 30px;
  background-color: #dfa54b;
  color: #000;
  padding: 10px 20px;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease, transform 0.3s ease;
  z-index: 1000;

  &:hover {
    background-color: #fff;
    color: #dfa54b;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    padding: 8px 16px;
    font-size: 0.9rem;
  }
`;

export default FixedCartLink;
