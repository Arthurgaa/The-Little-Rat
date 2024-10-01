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

        {/* Menu Centralizado */}
        <ul className="nav-list" style={centeredMenuStyle}>
          <li><Link to="/" style={linkStyle}>Home</Link></li>
          <li><Link to="/shop" style={linkStyle}>Shop</Link></li>
          <li><Link to="/about" style={linkStyle}>About</Link></li>
          <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
        </ul>

        {/* Ícone do Carrinho e Botões de Login e Sign Up */}
        <div style={navRightContainerStyle}>
          {/* Ícone do Carrinho */}
          <button onClick={() => navigate('/cart')} style={cartButtonStyle}>
            <img src="/cart.png" alt="Cart" style={{ maxWidth: '30px' }} />
          </button>

          <div className="buttons" style={buttonContainerStyle}>
            <button onClick={() => navigate('/login')} style={buttonStyle}>Sign In</button>
            <button onClick={() => navigate('/register')} style={buttonStyle}>Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Estilos
const headerStyle = {
  width: '100%',
  position: 'relative',
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
  color: '#dfa54b',
  width: '100%',
};

// Centraliza os itens do menu horizontalmente
const centeredMenuStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  listStyle: 'none',
  gap: '40px',
  margin: 0,
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
};

const linkStyle = {
  color: '#dfa54b',
  textDecoration: 'none',
  fontSize: '1.2rem',
  transition: 'all 0.2s ease',
};

const buttonContainerStyle = {
  display: 'flex',
  gap: '10px',
};

const navRightContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
};

const cartButtonStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
};

const buttonStyle = {
  backgroundColor: '#dfa54b',
  color: '#000',
  border: '2px solid #dfa54b',
  padding: '8px 16px',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default Nav;


