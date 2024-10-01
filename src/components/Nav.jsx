import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '/logo.png'; // Caminho para a imagem da logo
import cart from '/cart.png'; // Caminho para a imagem do cart
import user from '/user.png'; // Caminho para o ícone de usuário

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000;
    padding: 1rem 2rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: relative;
`;

const Logo = styled.img`
    object-fit: contain;
    width: 80px;
`;

const NavLinks = styled.div`
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex: 1;

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

const CartIcon = styled.img`
    vertical-align: middle;
    width: 30px;
    height: 30px;
    @media (max-width: 768px) {
        display: none;
    }
`;

const UserIcon = styled.img`
    vertical-align: middle;
    cursor: pointer;
    width: 30px;
    height: 30px;
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
    right: ${(props) => (props.isOpen ? '0' : '-250px')};
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
    align-items: center;
`;

const SidebarIcon = styled.img`
    width: 30px;
    height: 30px;
`;

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <NavContainer>
        <Link to="/">
          <Logo src={logo} alt="Logo" />
        </Link>

        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavLinks>

        {/* Ícones de carrinho e usuário */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Link to="/cart">
            <CartIcon src={cart} alt="Cart" />
          </Link>
          <Link to="/user">
            <UserIcon src={user} alt="User" />
          </Link>
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
          {/* Ícones de carrinho e usuário na sidebar */}
          <Link to="/cart">
            <SidebarIcon src={cart} alt="Cart" />
          </Link>
          <Link to="/user">
            <SidebarIcon src={user} alt="User" />
          </Link>
        </SidebarLinks>
      </Sidebar>
    </>
  );
};

export default Nav;



