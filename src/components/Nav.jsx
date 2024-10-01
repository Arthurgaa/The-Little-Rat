import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <header style={headerStyle}>
      <div style={navBarStyle}>
        {/* Logo */}
        <div className="logo">
          <img src="/logo.png" alt="Logo" style={{ maxWidth: '100px' }} />
        </div>

        {/* Menu Desktop */}
        <ul className="nav-list" style={desktopMenuStyle}>
          <li><Link to="/" style={linkStyle}>Home</Link></li>
          <li><Link to="/shop" style={linkStyle}>Shop</Link></li>
          <li><Link to="/about" style={linkStyle}>About</Link></li>
          <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
        </ul>

        {/* Botões de Login e Sign Up */}
        <div className="buttons" style={buttonContainerStyle}>
          <button onClick={() => navigate('/login')} style={buttonStyle}>Login</button>
          <button onClick={() => navigate('/register')} style={buttonStyle}>Sign Up</button>
        </div>
      </div>
    </header>
  );
};

// Estilos
const headerStyle = {
  width: '100%',
  position: 'relative',  // Não usa mais position: fixed
  top: 0,
  left: 0,
  zIndex: 1000,
  backgroundColor: '#000',
  padding: '10px 0',
};

const navBarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 40px',
  backgroundColor: '#000',
  color: '#daa520',
  width: '100%',
};

const desktopMenuStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  listStyle: 'none',
  gap: '40px',
  flexGrow: 1,
  margin: 0,
};

const linkStyle = {
  color: '#daa520',
  textDecoration: 'none',
  fontSize: '1.2rem',
  transition: 'all 0.2s ease',
};

const buttonContainerStyle = {
  display: 'flex',
  gap: '10px',
};

const buttonStyle = {
  backgroundColor: '#daa520',
  color: '#000',
  border: '2px solid #daa520',
  padding: '8px 16px',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default Nav;

