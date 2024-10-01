import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Simulação de obtenção dos itens do carrinho armazenados no localStorage (ou outro lugar)
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  // Verificação para garantir que cart seja sempre um array válido
  const totalPrice = cart.length > 0 ? cart.reduce((total, item) => total + item.price, 0) : 0;

  return (
    <div style={cartStyle}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul style={cartListStyle}>
            {cart.map((item, index) => (
              <li key={index} style={cartItemStyle}>
                {item.name} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
          <button style={checkoutButtonStyle}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

// Estilos
const cartStyle = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#111',
  color: '#fff',
  padding: '20px',
};

const cartListStyle = {
  listStyleType: 'none',
  padding: 0,
};

const cartItemStyle = {
  marginBottom: '10px',
  fontSize: '18px',
  color: '#daa520',
};

const checkoutButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#daa520',
  color: '#000',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Cart;


