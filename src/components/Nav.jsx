import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '/logo.png'; // Caminho para a imagem da logo
import cartIcon from '/cart.png'; // Caminho para a imagem do carrinho
import defaultUserIcon from '/user.png'; // Caminho para o ícone padrão de usuário

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
  font-family: 'Orbitron', sans-serif;
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

  &:hover {
    filter: brightness(0) invert(1);
  }
`;

const UserIcon = styled.img`
  vertical-align: middle;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50%; /* Para tornar a imagem circular */
  object-fit: cover;

  @media (max-width: 768px) {
    display: none;
  }

  /* Aplicar hover apenas se isDefaultIcon for verdadeiro */
  &:hover {
    ${(props) =>
      props.isDefaultIcon &&
      `
      filter: brightness(0) invert(1);
    `}
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
  right: ${(props) => (props.isOpen ? '0' : '-300px')};
  width: 300px;
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

  ${(props) =>
    props.isPersonalizedImage &&
    `
    border-radius: 50%;
    object-fit: cover;
  `}

  /* Aplicar hover branco nos ícones padrão */
  &:hover {
    ${(props) =>
      props.isDefaultIcon &&
      `
      filter: brightness(0) invert(1);
    `}
  }
`;

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

    // Limpa o listener quando o componente é desmontado
    return () => {
      window.removeEventListener('cartUpdated', updateCartItemCount);
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
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Link to="/cart" style={{ position: 'relative' }}>
            <CartIcon src={cartIcon} alt="Cart" />
            {cartItemCount > 0 && (
              <div style={badgeStyle}>{cartItemCount}</div>
            )}
          </Link>
          <Link to="/user">
            {user && user.profilePicture ? (
              <UserIcon
                src={user.profilePicture}
                alt="User"
                isDefaultIcon={false}
              />
            ) : (
              <UserIcon
                src={defaultUserIcon}
                alt="User"
                isDefaultIcon={true}
              />
            )}
          </Link>
        </div>

        {/* Hamburger Menu para abrir a sidebar em telas menores */}
        <HamburgerMenu onClick={toggleSidebar}>&#9776;</HamburgerMenu>
      </NavContainer>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen}>
        <CloseButton onClick={toggleSidebar}>X</CloseButton>
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
          <Link to="/cart" onClick={closeSidebar}>
            <SidebarIcon
              src={cartIcon}
              alt="Cart"
              isDefaultIcon={true}
              isPersonalizedImage={false}
            />
          </Link>
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

// Estilo para o badge de contagem do carrinho
const badgeStyle = {
  position: 'absolute',
  top: '-5px',
  right: '-10px',
  backgroundColor: 'red',
  color: 'white',
  borderRadius: '50%',
  padding: '2px 6px',
  fontSize: '12px',
};

export default Nav;
