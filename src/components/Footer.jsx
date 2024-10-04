import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Ícones de redes sociais

const FooterContainer = styled.footer`
  font-family: "Orbitron", sans-serif;
  background-color: #000;
  color: #fff;
  padding: 1rem 1rem; /* Reduzido de 2rem 1rem */
  text-align: center;
`;

const SocialIcons = styled.div`
  margin: 0.5rem 0; /* Reduzido de 1rem 0 */
  display: flex;
  justify-content: center;
  gap: 1.5rem; /* Reduzido de 2rem */
`;

const IconLink = styled.a`
  color: #dfa54b;
  font-size: 1.2rem; /* Reduzido de 1.5rem */
  transition: color 0.3s;
  &:hover {
    color: #fff;
  }
`;

const FooterLink = styled.a`
  color: #dfa54b;
  text-decoration: none;
  margin: 0 0.5rem; /* Reduzido de 1rem */
  font-size: 0.9rem; /* Adicionado para reduzir o tamanho da fonte */
  &:hover {
    color: white;
  }
`;

const FooterBottom = styled.div`
  color: #dfa54b;
  font-size: 0.9rem; /* Reduzido de 1rem */
  margin-top: 0.5rem; /* Reduzido de 1rem */
`;

const CheeseIconContainer = styled.div`
  margin-top: 0.5rem; /* Reduzido de 1rem */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheeseIcon = styled.img`
  width: 40px; /* Reduzido de 50px */
  height: 40px; /* Reduzido de 50px */
  margin-right: 8px; /* Reduzido de 10px */
`;

const CheeseText = styled.p`
  font-size: 1rem; /* Reduzido de 1.2rem */
  font-style: italic;
  color: #dfa54b;
`;

const Divider = styled.hr`
  margin: 1rem auto; /* Reduzido de 1.5rem */
  border: none;
  border-top: 1.5px solid #fff; /* Reduzido de 2px */
  width: 100%; 
`;

const Footer = () => {
  return (
    <FooterContainer>
      {/* Ícones de redes sociais */}
      <SocialIcons>
        <IconLink href="#" target="_blank" aria-label="Facebook">
          <FaFacebook />
        </IconLink>
        <IconLink href="#" target="_blank" aria-label="Twitter">
          <FaTwitter />
        </IconLink>
        <IconLink href="#" target="_blank" aria-label="Instagram">
          <FaInstagram />
        </IconLink>
      </SocialIcons>

      {/* Links adicionais */}
      <div>
        <FooterLink href="#">Terms of Service</FooterLink> | 
        <FooterLink href="#">Privacy Policy</FooterLink> | 
        <FooterLink href="/contact">Contact</FooterLink>
      </div>

      {/* Ícone do Queijo e texto */}
      <CheeseIconContainer>
        <CheeseIcon src="/queijo.png" alt="Cheese" />
        <CheeseText>Cheese for Thought!</CheeseText>
      </CheeseIconContainer>

      {/* Linha branca após o "Cheese for Thought" */}
      <Divider />

      {/* Direitos autorais */}
      <FooterBottom>
        © 2024 The Little Rat. All rights reserved.
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
