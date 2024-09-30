import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();  // Usando o hook de navegação

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header style={{ width: '100%', position: 'fixed', top: 0, left: 0, zIndex: 1000 }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 40px',
        backgroundColor: '#000',
        color: '#daa520',
      }}>
        <div className="logo">
          <img src="/logo.png" alt="Logo" style={{ maxWidth: '100px' }} />
        </div>

        {/* Menu Desktop */}
        <ul style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          listStyle: 'none',
          gap: '40px',
          flexGrow: 1,
        }}>
          <li><Link to="/" style={linkStyle}>Home</Link></li>
          <li><Link to="/shop" style={linkStyle}>Shop</Link></li>
          <li><Link to="/about" style={linkStyle}>About</Link></li>
          <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
        </ul>

        {/* Botões de Login e Sign Up */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => navigate('/login')} style={buttonStyle}>Login</button>
          <button onClick={() => navigate('/register')} style={buttonStyle}>Sign Up</button>
        </div>

        {/* Menu Mobile */}
        <div style={{ display: 'none' }} className="mobile-menu-icon">
          <button onClick={toggleMenu} style={{ backgroundColor: 'transparent', border: 'none' }}>
            <img src={isOpen ? "/close.png" : "/menu.png"} alt="Menu Icon" style={{ maxWidth: '40px' }} />
          </button>
        </div>
      </div>

    </header>
  );
};

const linkStyle = {
  color: '#daa520',
  textDecoration: 'none',
  fontSize: '1.2rem',
  transition: 'all 0.2s ease',
};

const buttonStyle = {
  backgroundColor: '#daa520',
  color: '#000',
  border: '2px solid #daa520',
  padding: '8px 16px',
  borderRadius: '4px',
  cursor: 'pointer',
};

const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalContentStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  width: '300px',
  textAlign: 'center',
};

const modalCloseButton = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  cursor: 'pointer',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '10px 0',
  border: '1px solid #ddd',
  borderRadius: '4px',
};

export default Nav;






