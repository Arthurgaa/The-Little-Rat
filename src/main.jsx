import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './routes/Home.jsx';
import Register from './routes/Register.jsx'; // Certifique-se que o Register está importado
import Login from './routes/Login.jsx'; // Certifique-se que o Login está importado
import Shop from './routes/Shop.jsx';
import About from './routes/About.jsx';
import Contact from './routes/Contact.jsx';
import Cart from './routes/Cart.jsx'; 
import Error from './routes/Error.jsx';
import Payment from './routes/Payment.jsx';
import Pix from './routes/Pix.jsx'

// Configuração das rotas
const router = createBrowserRouter([
  {
    path: '/', 
    element: <App />, // Carrega o layout base do App (Nav + Footer)
    errorElement: <Error />, // Página de erro
    children: [
      { path: '/', element: <Home /> }, // Home
      { path: '/login', element: <Login /> }, // Login
      { path: '/shop', element: <Shop /> }, // Shop (Produtos)
      { path: '/about', element: <About /> }, // About (Sobre)
      { path: '/contact', element: <Contact /> }, // Contact (Contato)
      { path: '/register', element: <Register /> }, // Register (Cadastro)
      { path: '/cart', element: <Cart /> }, // Cart (Carrinho)
      { path: '/payment', element: <Payment /> },
      { path: '/pix', element: <Pix /> }

    ]
  }
]);

// Renderiza o aplicativo
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

