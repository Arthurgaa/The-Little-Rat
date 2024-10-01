import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Obtenção dos itens do carrinho armazenados no localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const updateQuantity = (index, newQuantity) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Atualiza o localStorage
  };

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Atualiza o localStorage
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

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
                  <span style={productPriceStyle}>${(item.price * item.quantity).toFixed(2)}</span>
                  <label htmlFor="quantity" style={quantityLabelStyle}>Quantity:</label>
                  <input
                    type="number"
                    id="quantity"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                    style={quantityInputStyle}
                  />
                  <button onClick={() => removeFromCart(index)} style={removeButtonStyle}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div style={totalContainerStyle}>
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
            <button onClick={() => navigate('/payment')} style={checkoutButtonStyle}>
              Proceed to Checkout
            </button>
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
  color: '#dfa54b',
};

const productPriceStyle = {
  marginTop: '5px',
  fontSize: '16px',
  color: '#fff',
};

const quantityLabelStyle = {
  marginTop: '10px',
  fontSize: '16px',
  color: '#fff',
};

const quantityInputStyle = {
  width: '50px',
  marginTop: '5px',
  padding: '5px',
  borderRadius: '5px',
  border: '1px solid #555',
  backgroundColor: '#444',
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
  backgroundColor: '#dfa54b',
  color: '#000',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Cart;



