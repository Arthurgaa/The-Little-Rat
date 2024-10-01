import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Obtenção dos itens do carrinho armazenados no localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  // Cálculo do preço total
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  // Função para remover itens do carrinho
  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Atualiza o localStorage
  };

  return (
    <div style={cartStyle}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div style={cartContainerStyle}>
          <ul style={cartListStyle}>
            {cart.map((item, index) => (
              <li key={index} style={cartItemStyle}>
                <img src={item.img} alt={item.name} style={productImageStyle} />
                <div style={productDetailsStyle}>
                  <span style={productNameStyle}>{item.name}</span>
                  <span style={productPriceStyle}>${item.price.toFixed(2)}</span>
                  <button
                    onClick={() => removeFromCart(index)}
                    style={removeButtonStyle}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div style={totalContainerStyle}>
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
            <button style={checkoutButtonStyle}>Proceed to Checkout</button>
          </div>
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

const cartContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '800px',
};

const cartListStyle = {
  listStyleType: 'none',
  padding: 0,
  width: '100%',
};

const cartItemStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#333',
  padding: '10px',
  borderRadius: '8px',
  marginBottom: '10px',
};

const productImageStyle = {
  width: '80px',
  height: '80px',
  objectFit: 'cover',
  borderRadius: '8px',
};

const productDetailsStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  flex: '1',
  paddingLeft: '20px',
};

const productNameStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#daa520',
};

const productPriceStyle = {
  marginTop: '5px',
  fontSize: '16px',
  color: '#fff',
};

const removeButtonStyle = {
  marginTop: '10px',
  backgroundColor: '#ff4d4f',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  padding: '5px 10px',
};

const totalContainerStyle = {
  marginTop: '20px',
  textAlign: 'center',
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


