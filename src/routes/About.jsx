import React from 'react';
import styled from 'styled-components';

// Componentes Estilizados

const AboutContainer = styled.div`
  min-height: 100vh;
  padding: 60px 20px 80px; /* Ajustado para criar mais espaço antes do Footer */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #111;
  color: #fff;
  font-family: 'Arial', sans-serif;
  box-sizing: border-box;
`;

const AboutSection = styled.section`
  max-width: 900px;
  width: 100%;
  text-align: justify;
  line-height: 1.6;
  font-size: 16px;
  color: #ddd;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #dfa54b;
  margin-bottom: 20px;
  text-align: center;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
  flex-wrap: wrap; /* Responsivo: as imagens serão organizadas em várias linhas, se necessário */
`;

const Image = styled.img`
  width: 280px; /* Reduzido de 300px */
  height: 180px; /* Reduzido de 200px */
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    width: 100%; /* As imagens ocuparão 100% da largura em telas pequenas */
    height: auto;
  }
`;

const TextContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Paragraph = styled.p`
  margin-bottom: 15px;
`;

const Divider = styled.hr`
  margin: 40px auto;
  border: none;
  border-top: 1.5px solid #fff;
  width: 80%;
`;

const About = () => {
  return (
    <AboutContainer>
      {/* Seção Principal */}
      <AboutSection>
        <Title>The Little Rat: A Story of Brotherhood, Tennis, and Timeless Style</Title>

        {/* Galeria de Imagens abaixo do título */}
        <ImageContainer>
          <Image src="/banner1.jpg" alt="Banner 1" />
          <Image src="/banner4.jpg" alt="Banner 2" />
          <Image src="/banner8.jpg" alt="Banner 3" />
        </ImageContainer>

        <TextContainer>
          <Paragraph>
            In the bustling heart of a city known for its fast pace and cutting-edge fashion, two brothers, Thomas and Pedro Kramer, embarked on a journey that would redefine men's clothing. Growing up, the Kramer brothers shared a passion for tennis, a sport that taught them invaluable lessons about life, competition, and perseverance.
          </Paragraph>
          <Paragraph>
            Their story began on the courts of their local tennis club, where they spent countless hours perfecting their serves and strategizing their next move. Tennis, with its demand for both mental and physical agility, instilled in them a deep understanding that pressure is a privilege. It was on those courts that they learned how to thrive under pressure, transforming challenges into opportunities.
          </Paragraph>
          <Paragraph>
            As they grew older, their paths diverged—Pedro pursued a career in finance, while Thomas explored the world of design. Despite their different trajectories, they remained close, often reminiscing about their childhood and the lessons learned on the tennis court. One evening, after a particularly fun match between both, an idea sparked between them. They realized that the same principles they cherished in tennis could be translated into a business—a clothing store that would combine comfort, style, and the resilience they valued.
          </Paragraph>
          <Paragraph>
            Thus, "The Little Rat" was born. The name, inspired by their childhood nickname for each other, symbolized their shared roots and the tenacity of a small but determined animal. The Little Rat would be a men's clothing store like no other—a place where minimalism met elegance, and where every piece of clothing was designed to withstand the pressures of modern life while offering unparalleled comfort.
          </Paragraph>
          <Paragraph>
            Thomas and Pedro poured their hearts into creating a store that reflected their vision. They meticulously curated a collection of minimalist yet sophisticated clothing, focusing on high-quality materials and timeless designs. Their goal was simple: to make each day better for their customers by providing clothing that exuded confidence and ease.
          </Paragraph>
          <Paragraph>
            The brothers' competitive spirit, honed through years of tennis, drove them to excel in the fashion industry. They understood that in a crowded market, standing out required more than just great products; it demanded a unique philosophy. At The Little Rat, they championed the idea that comfort and style should never be compromised. They wanted their customers to feel as if they were stepping into the start of a long weekend, every single day.
          </Paragraph>
        </TextContainer>
      </AboutSection>

      {/* Linha Divisória */}
      <Divider />

      {/* Seção Final */}
      <AboutSection>
        <Title>Our Commitment</Title>
        <TextContainer>
          <Paragraph>
            At The Little Rat, we believe that fashion is not just about what you wear but how it makes you feel. Our commitment is to provide you with clothing that not only looks good but also feels good, empowering you to navigate the complexities of modern life with ease and style.
          </Paragraph>
          <Paragraph>
            We are dedicated to sustainability, ensuring that our materials are sourced responsibly and our manufacturing processes minimize environmental impact. Every piece in our collection is a testament to our dedication to quality, comfort, and timeless design.
          </Paragraph>
          <Paragraph>
            Join us on this journey and experience the perfect blend of brotherhood, tennis-inspired resilience, and unparalleled fashion. Welcome to The Little Rat—where every day feels like the start of a long weekend.
          </Paragraph>
        </TextContainer>
      </AboutSection>
    </AboutContainer>
  );
};

export default About;
