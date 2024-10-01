import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      {/* Seção Principal */}
      <section style={styles.aboutSection}>
        <h1 style={styles.title}>The Little Rat: A Story of Brotherhood, Tennis, and Timeless Style</h1>

        {/* Galeria de Imagens abaixo do título */}
        <div style={styles.imageContainer}>
          <img src="/banner1.jpg" alt="Banner 1" style={styles.image} />
          <img src="/banner4.jpg" alt="Banner 2" style={styles.image} />
          <img src="/banner8.jpg" alt="Banner 3" style={styles.image} />
        </div>

        <div style={styles.textContainer}>
          <p>
            In the bustling heart of a city known for its fast pace and cutting-edge fashion, two brothers, Thomas and Pedro Kramer, embarked on a journey that would redefine men's clothing. Growing up, the Kramer brothers shared a passion for tennis, a sport that taught them invaluable lessons about life, competition, and perseverance.
          </p>
          <p>
            Their story began on the courts of their local tennis club, where they spent countless hours perfecting their serves and strategizing their next move. Tennis, with its demand for both mental and physical agility, instilled in them a deep understanding that pressure is a privilege. It was on those courts that they learned how to thrive under pressure, transforming challenges into opportunities.
          </p>
          <p>
            As they grew older, their paths diverged—Pedro pursued a career in finance, while Thomas explored the world of design. Despite their different trajectories, they remained close, often reminiscing about their childhood and the lessons learned on the tennis court. One evening, after a particularly fun match between both, an idea sparked between them. They realized that the same principles they cherished in tennis could be translated into a business—a clothing store that would combine comfort, style, and the resilience they valued.
          </p>
          <p>
            Thus, "The Little Rat" was born. The name, inspired by their childhood nickname for each other, symbolized their shared roots and the tenacity of a small but determined animal. The Little Rat would be a men's clothing store like no other—a place where minimalism met elegance, and where every piece of clothing was designed to withstand the pressures of modern life while offering unparalleled comfort.
          </p>
          <p>
            Thomas and Pedro poured their hearts into creating a store that reflected their vision. They meticulously curated a collection of minimalist yet sophisticated clothing, focusing on high-quality materials and timeless designs. Their goal was simple: to make each day better for their customers by providing clothing that exuded confidence and ease.
          </p>
          <p>
            The brothers' competitive spirit, honed through years of tennis, drove them to excel in the fashion industry. They understood that in a crowded market, standing out required more than just great products; it demanded a unique philosophy. At The Little Rat, they championed the idea that comfort and style should never be compromised. They wanted their customers to feel as if they were stepping into the start of a long weekend, every single day.
          </p>
        </div>
      </section>
    </div>
  );
};

// Estilos
const styles = {
  container: {
    minHeight: '100vh',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#111',
    color: '#fff',
    fontFamily: "'Arial', sans-serif",
  },
  aboutSection: {
    maxWidth: '1000px',
    textAlign: 'justify',
    lineHeight: '1.6',
    fontSize: '18px',
    color: '#ddd',
    marginBottom: '50px',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#dfa54b',
    marginBottom: '20px',
    textAlign: 'center',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px',
    flexWrap: 'wrap',  // Responsivo: as imagens serão organizadas em várias linhas, se necessário
  },
  image: {
    width: '300px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    '@media (max-width: 768px)': {
      width: '100%',  // As imagens ocuparão 100% da largura em telas pequenas
      height: 'auto',
    }
  },
  textContainer: {
    maxWidth: '800px',
    margin: '0 auto',
  },
};

export default About;

