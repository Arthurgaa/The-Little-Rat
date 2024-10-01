import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '/logo.png'; // Caminho para a imagem da logo
import cart from '/cart.png'; // Caminho para a imagem do cart

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000;
    padding: 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: relative;
`;

const Logo = styled.img`
    object-fit: contain;
`;

const NavLinks = styled.div`
    display: flex;
    gap: 2rem;  /* Espaçamento entre os links */
    justify-content: center;
    flex: 1;  /* Faz os links ocuparem o centro */

    /* Esconde os links em telas menores */
    @media (max-width: 768px) {
        display: none;
    }
`;

const NavLink = styled(Link)`
    font-family: "Orbitron", sans-serif;
    color: #dfa54b;
    text-decoration: none;
    font-size: 1.2rem;
    padding: 0.5rem 0.7rem;
    position: relative;

    &:hover {
        color: #fff;
    }

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #dfa54b;
        left: 0;
        bottom: -6px;
        transform: scaleX(0);
        transition: transform 0.3s ease;
    }

    &:hover::after {
        transform: scaleX(1);
    }
`;

const LogoutButton = styled.button`
    background-color: transparent;
    color: #dfa54b;
    border: 2px solid #dfa54b;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 1.1rem;
    transition: all 0.3s ease;

    &:hover {
        background-color: #dfa54b;
        color: #fff;
        border-color: #dfa54b;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

const CartIcon = styled.img`
    vertical-align: middle;
    @media (max-width: 768px) {
        display: none;
    }
`;

const HamburgerMenu = styled.div`
    display: none;
    font-size: 30px;
    cursor: pointer;
    color: #dfa54b;

    @media (max-width: 768px) {
        display: block;
    }
`;

const Sidebar = styled.div`
    position: fixed;
    top: 0;
    right: ${(props) => (props.isOpen ? '0' : '-250px')};  /* Mover a sidebar para a direita */
    width: 250px;
    height: 100%;
    background-color: #000;
    color: #fff;
    transition: right 0.3s ease;
    z-index: 1000;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const CloseButton = styled.button`
    background: none;
    color: #dfa54b;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    align-self: flex-end;
`;

const SidebarLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const SidebarLogoutButton = styled(LogoutButton)`
    display: block;
    width: 100%;
`;

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const getUsuario = sessionStorage.getItem('usuario');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('usuario');
    sessionStorage.removeItem('senha');
    alert('Saindo da Sessão !!!');
    navigate('/');
  };

  return (
    <>
      <NavContainer>
        <Link to="/">
          <Logo src={logo} alt="PowerRide Logo" width={80} />
        </Link>

        {/* Links de navegação centralizados */}
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/login">Login</NavLink>
        </NavLinks>

        {/* Esconde carrinho e logout em telas menores */}
        <div className="right-section" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Link to="/cart">
            <CartIcon src={cart} alt="Cart" />
          </Link>
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </div>

        {/* Hamburger Menu para abrir a sidebar em telas menores */}
        <HamburgerMenu onClick={toggleSidebar}>&#9776;</HamburgerMenu>
      </NavContainer>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen}>
        <CloseButton onClick={toggleSidebar}>X</CloseButton>
        <SidebarLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/login">Login</NavLink>
          <Link to="/cart">
            <Logo src={cart} alt="Cart" />
          </Link>
          {/* Botão de logout na sidebar */}
          <SidebarLogoutButton onClick={handleLogout}>Logout</SidebarLogoutButton>
        </SidebarLinks>
      </Sidebar>
    </>
  );
};

export default Nav;
