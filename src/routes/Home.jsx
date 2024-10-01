import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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
            <button style={styles.shopButton}>Shop Now</button>
          </Link>
        </div>
      </section>

      {/* Seção de Logo */}
      <section style={styles.logoSection}>
        <img src="/logo2.png" alt="The Little Rat Logo" style={styles.logoImage} />
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
    height: '80vh',
    marginBottom: '50px',
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
    maxWidth: '600px',
  },
  heroTitle: {
    fontSize: '3rem',
    color: '#fff',
    textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)',
    letterSpacing: '2px',
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    color: '#f0f0f0',
    marginTop: '15px',
    textShadow: '1px 1px 8px rgba(0, 0, 0, 0.7)',
  },
  bannerGallery: {
    padding: '50px 20px',
    textAlign: 'center',
    backgroundColor: '#111',
    borderRadius: '30px 30px 0 0',
    width: '100%',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    color: '#dfa54b',
    marginBottom: '30px',
    letterSpacing: '1.5px',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
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
    marginTop: '40px',
  },
  shopLink: {
    textDecoration: 'none',
  },
  shopButton: {
    padding: '12px 28px',
    backgroundColor: '#dfa54b',
    color: '#000',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.2rem',
    transition: 'background-color 0.3s ease, transform 0.3s',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
  },
  shopButtonHover: {
    backgroundColor: '#fff',
    color: '#dfa54b',
    transform: 'scale(1.05)',
  },
  logoSection: {
    marginTop: '50px',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '50px',
  },
  logoImage: {
    width: '150px',
    height: '150px',
    filter: 'drop-shadow(0 4px 10px rgba(0, 0, 0, 0.3))',
  },
  // Media queries for responsiveness
  '@media (max-width: 768px)': {
    heroTitle: {
      fontSize: '2rem',
    },
    heroSubtitle: {
      fontSize: '1rem',
    },
    mainBannerImage: {
      height: '400px',
    },
    bannerImage: {
      width: '100%',
      height: '150px',
    },
    shopButton: {
      fontSize: '1rem',
      padding: '10px 20px',
    },
  },
};

export default Home;






