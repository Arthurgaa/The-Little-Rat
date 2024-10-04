import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isShopButtonHovered, setIsShopButtonHovered] = useState(false);

  return (
    <div style={styles.homeContainer}>
      {/* Seção de Destaque */}
      <section style={styles.heroSection}>
        <div style={styles.overlay}></div>
        <img
          src="/banner5.jpg"
          alt="Main Banner"
          style={styles.mainBannerImage}
        />
        <div style={styles.heroText}>
          <h1 style={styles.heroTitle}>Welcome to The Little Rat!</h1>
          <p style={styles.heroSubtitle}>
            Designed to help you face the pressures of modern life with confidence and style.
          </p>
        </div>
      </section>

      {/* Galeria de Banners */}
      <section style={styles.bannerGallery}>
        <h2 style={styles.sectionTitle}>Explore Our Collection</h2>
        <div style={styles.imageContainer}>
          <img src="/banner2.jpg" alt="Banner 2" style={styles.bannerImage} />
          <img src="/banner3.jpg" alt="Banner 3" style={styles.bannerImage} />
          <img src="/banner4.jpg" alt="Banner 4" style={styles.bannerImage} />
        </div>

        {/* Espaçamento entre galeria e botão "Shop Now" */}
        <div style={styles.shopNowSection}>
          <Link to="/shop" style={styles.shopLink}>
            <button
              style={{
                ...styles.shopButton,
                ...(isShopButtonHovered ? styles.shopButtonHover : {}),
              }}
              onMouseEnter={() => setIsShopButtonHovered(true)}
              onMouseLeave={() => setIsShopButtonHovered(false)}
            >
              Shop Now
            </button>
          </Link>
        </div>
      </section>

      {/* Seção de Logo */}
      <section style={styles.logoSection}>
        <img
          src="/logo2.png"
          alt="The Little Rat Logo"
          style={styles.logoImage}
        />
      </section>
    </div>
  );
};

const styles = {
  homeContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
    color: '#fff',
    overflowX: 'hidden',
  },
  heroSection: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#dfa54b',
    width: '100%',
    height: '80vh', // Mantém inalterado
    marginBottom: '40px', // Reduzido de 50px
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1,
  },
  mainBannerImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center top',
    zIndex: 0,
  },
  heroText: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '500px', // Reduzido de 600px
  },
  heroTitle: {
    fontSize: '2.5rem', // Reduzido de 3rem
    color: '#fff',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
    letterSpacing: '1.5px', // Reduzido de 2px
    margin: '0', // Remove margem extra
  },
  heroSubtitle: {
    fontSize: '1.2rem', // Reduzido de 1.5rem
    color: '#f0f0f0',
    marginTop: '10px', // Reduzido de 15px
    textShadow: '1px 1px 6px rgba(0, 0, 0, 0.7)',
    margin: '0', // Remove margem extra
  },
  bannerGallery: {
    padding: '30px 15px', // Reduzido de 50px 20px
    textAlign: 'center',
    backgroundColor: '#111',
    borderRadius: '20px 20px 0 0', // Reduzido de 30px
    width: '100%',
  },
  sectionTitle: {
    fontSize: '2rem', // Reduzido de 2.5rem
    color: '#dfa54b',
    marginBottom: '20px', // Reduzido de 30px
    letterSpacing: '1px', // Reduzido de 1.5px
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px', // Reduzido de 20px
    flexWrap: 'wrap',
  },
  bannerImage: {
    width: '300px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '20px',
    transition: 'transform 0.3s, box-shadow 0.3s',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  },
  bannerImageHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
  },
  shopNowSection: {
    marginTop: '30px', // Reduzido de 40px
  },
  shopLink: {
    textDecoration: 'none',
  },
  shopButton: {
    padding: '10px 22px', // Reduzido de 12px 28px
    backgroundColor: '#dfa54b',
    color: '#000',
    border: '2px solid transparent', // Mantém borda transparente
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1.1rem', // Reduzido de 1.2rem
    transition:
      'background-color 0.3s ease, transform 0.3s ease, border-color 0.3s ease',
    boxSizing: 'border-box',
  },
  shopButtonHover: {
    backgroundColor: '#fff',
    color: '#dfa54b',
    borderColor: '#dfa54b',
    transform: 'translateY(-2px)',
  },
  logoSection: {
    marginTop: '30px', // Reduzido de 50px
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '30px', // Reduzido de 50px
  },
  logoImage: {
    width: '120px', // Reduzido de 150px
    height: '120px', // Reduzido de 150px
    filter: 'drop-shadow(0 3px 8px rgba(0, 0, 0, 0.3))', // Reduzido de 0 4px 10px
  },
  // Media queries for responsiveness
  '@media (max-width: 768px)': {
    heroTitle: {
      fontSize: '1.8rem', // Reduzido de 2rem
    },
    heroSubtitle: {
      fontSize: '0.9rem', // Reduzido de 1rem
    },
    mainBannerImage: {
      height: '400px', // Mantém inalterado
    },
    bannerImage: {
      width: '100%', // Mantém inalterado
      height: '150px', // Mantém inalterado
    },
    shopButton: {
      fontSize: '1rem', // Mantém inalterado
      padding: '8px 18px', // Mantém inalterado
    },
  },
};

export default Home;
