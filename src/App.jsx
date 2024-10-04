// src/App.jsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import FixedCartLink from './components/FixedCartLink'; // Importe o FixedCartLink

const App = () => {
  const location = useLocation();
  
  // Defina as rotas onde o botão fixo NÃO deve aparecer
  const hideCartButtonOn = ['/login', '/cart']; // Adicione outras rotas se necessário
  
  const shouldHideCartButton = hideCartButtonOn.includes(location.pathname);

  return (
    <div>
      {/* Componente Nav */}
      <Nav />
      
      {/* Outlet para carregar as páginas */}
      <Outlet />

      {/* Componente Footer */}
      <Footer />

      {/* Botão fixo para acessar o carrinho, exceto em rotas específicas */}
      {!shouldHideCartButton && (
        <FixedCartLink to="/cart" aria-label="View Cart">
          🛒 View Cart
        </FixedCartLink>
      )}

      {/* Estilos Globais */}
      <style jsx="true" global="true">{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body, html {
          width: 100%;
          overflow-x: hidden; /* Previne o scroll horizontal */
          background-color: #111; /* Fundo padrão */
          color: #fff; /* Cor do texto padrão */
          font-family: 'Arial', sans-serif;
        }

        a {
          text-decoration: none;
          color: inherit; /* Assegura que links mantenham a cor definida */
        }

        ul {
          list-style: none; /* Remove bullets das listas */
        }

        button {
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default App;
