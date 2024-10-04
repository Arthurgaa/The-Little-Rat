// src/components/Nav.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '/logo.png'; // Caminho para a imagem da logo
import cartIcon from '/cart.png'; // Caminho para a imagem do carrinho
import defaultUserIcon from '/user.png'; // Caminho para o ícone padrão de usuário
import { FaBars, FaTimes } from 'react-icons/fa'; // Ícones para o menu

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  padding: 0.75rem 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

const Logo = styled.img`
  object-fit: contain;
  width: 70px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.75rem;
  justify-content: center;
  flex: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-family: 'Orbitron', sans-serif;
  color: #dfa54b;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.4rem 0.6rem;
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
    bottom: -5px;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const CartIconWrapper = styled(Link)`
  position: relative;
`;

const CartIconStyled = styled.img`
  vertical-align: middle;
  width: 26px;
  height: 26px;

  @media (max-width: 768px) {
    display: none;
  }

  &:hover {
    filter: brightness(0) invert(1);
  }
`;

const UserIconStyled = styled.img`
  vertical-align: middle;
  cursor: pointer;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    display: none;
  }

  &:hover {
    ${(props) =>
      props.isDefaultIcon &&
      `
      filter: brightness(0) invert(1);
    `}
  }
`;

// Badge para o contador no navbar
const NavBadge = styled.div`
  position: absolute;
  top: -4px;
  right: -7px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 0.6px 2.5px;
  font-size: 9px;

  @media (max-width: 768px) {
    display: none;
  }
`;

// Hamburger Menu
const HamburgerMenu = styled.div`
  display: none;
  font-size: 26px;
  cursor: pointer;
  color: #dfa54b;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Sidebar
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
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

const CloseButton = styled.button`
  background: none;
  color: #dfa54b;
  border: none;
  font-size: 1.75rem;
  cursor: pointer;
  align-self: flex-end;
`;

const SidebarLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  align-items: center;
`;

const SidebarIcon = styled.img`
  width: 26px;
  height: 26px;

  ${(props) =>
    props.isPersonalizedImage &&
    `
    border-radius: 50%;
    object-fit: cover;
  `}

  &:hover {
    ${(props) =>
      props.isDefaultIcon &&
      `
      filter: brightness(0) invert(1);
    `}
  }
`;

// Badge para o contador na sidebar
const SidebarBadge = styled.div`
  position: absolute;
  top: -4px;
  right: -7px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 0.6px 2.5px;
  font-size: 9px;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Nav = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [user, setUser] = useState(null); // Estado para armazenar o usuário logado
  const [cartItemCount, setCartItemCount] = useState(0); // Contador de itens no carrinho

  // Função para atualizar a contagem de itens no carrinho
  const updateCartItemCount = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemCount = storedCart.reduce(
      (total, item) => total + (item.quantity || 1),
      0
    );
    setCartItemCount(itemCount);
  };

  // Função para atualizar o usuário
  const handleUserUpdate = () => {
    const updatedUser = JSON.parse(localStorage.getItem('user'));
    setUser(updatedUser);
  };

  useEffect(() => {
    // Carrega os dados do usuário ao montar o componente
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }

    // Atualiza a contagem de itens no carrinho
    updateCartItemCount();

    // Adiciona um listener para o evento personalizado 'cartUpdated'
    window.addEventListener('cartUpdated', updateCartItemCount);

    // Adiciona um listener para o evento personalizado 'userUpdated'
    window.addEventListener('userUpdated', handleUserUpdate);

    // Limpa os listeners quando o componente é desmontado
    return () => {
      window.removeEventListener('cartUpdated', updateCartItemCount);
      window.removeEventListener('userUpdated', handleUserUpdate);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Função para fechar a sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
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
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center', position: 'relative' }}>
          <CartIconWrapper to="/cart">
            <CartIconStyled src={cartIcon} alt="Cart" />
            {cartItemCount > 0 && <NavBadge>{cartItemCount}</NavBadge>}
          </CartIconWrapper>
          <Link to="/user">
            {user && user.profilePicture ? (
              <UserIconStyled
                src={user.profilePicture}
                alt="User"
                isDefaultIcon={false}
              />
            ) : (
              <UserIconStyled
                src={defaultUserIcon}
                alt="User"
                isDefaultIcon={true}
              />
            )}
          </Link>
        </div>

        {/* Hamburger Menu para abrir a sidebar em telas menores */}
        <HamburgerMenu onClick={toggleSidebar}>
          <FaBars />
        </HamburgerMenu>
      </NavContainer>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen}>
        <CloseButton onClick={toggleSidebar}>
          <FaTimes />
        </CloseButton>
        <SidebarLinks>
          <NavLink to="/" onClick={closeSidebar}>
            Home
          </NavLink>
          <NavLink to="/shop" onClick={closeSidebar}>
            Shop
          </NavLink>
          <NavLink to="/about" onClick={closeSidebar}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={closeSidebar}>
            Contact
          </NavLink>
          {/* Ícones de carrinho e usuário na sidebar */}
          <CartIconWrapper to="/cart" onClick={closeSidebar}>
            <SidebarIcon src={cartIcon} alt="Cart" isDefaultIcon={true} isPersonalizedImage={false} />
            {cartItemCount > 0 && <SidebarBadge>{cartItemCount}</SidebarBadge>}
          </CartIconWrapper>
          <Link to="/user" onClick={closeSidebar}>
            {user && user.profilePicture ? (
              <SidebarIcon
                src={user.profilePicture}
                alt="User"
                isDefaultIcon={false}
                isPersonalizedImage={true}
              />
            ) : (
              <SidebarIcon
                src={defaultUserIcon}
                alt="User"
                isDefaultIcon={true}
                isPersonalizedImage={false}
              />
            )}
          </Link>
        </SidebarLinks>
      </Sidebar>
    </>
  );
};

export default Nav;
