import React from 'react';

const Cart = ({ cartItems }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.img} alt={item.name} style={{ width: '50px', marginRight: '10px' }} />
                <span>{item.name} - ${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
          <button className="checkout-button">Proceed to Payment</button>
        </>
      )}

      <style jsx>{`
        .cart-container {
          padding: 50px;
          color: #fff;
          background-color: #111;
          min-height: 100vh;
        }

        .cart-items {
          list-style: none;
          padding: 0;
        }

        .cart-item {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }

        .checkout-button {
          background-color: #daa520;
          color: #000;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .checkout-button:hover {
          background-color: #fff;
          color: #000;
        }
      `}</style>
    </div>
  );
};

export default Cart;

