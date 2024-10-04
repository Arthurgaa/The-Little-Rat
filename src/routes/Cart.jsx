import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Obtenção dos itens do carrinho armazenados no localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    // Definir quantidade padrão de 1 para itens sem quantidade
    const initializedCart = storedCart.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
    }));
    setCart(initializedCart);
  }, []);

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return; // Evitar quantidades negativas ou zero
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Atualiza o localStorage

    // Dispatch custom event
    const event = new Event('cartUpdated');
    window.dispatchEvent(event);
  };

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Atualiza o localStorage

    // Dispatch custom event
    const event = new Event('cartUpdated');
    window.dispatchEvent(event);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={styles.cartContainer}>
      <h1 style={styles.title}>Your Cart</h1>
      {cart.length === 0 ? (
        <p style={styles.emptyCartMessage}>
          Your cart is empty.{' '}
          <Link to="/shop" style={styles.goShoppingLink}>
            Go Shopping!
          </Link>
        </p>
      ) : (
        <div style={styles.cartContent}>
          <ul style={styles.cartList}>
            {cart.map((item, index) => (
              <li key={index} style={styles.cartItem}>
                <img
                  src={item.img || 'https://via.placeholder.com/100'}
                  alt={item.name}
                  style={styles.productImage}
                />
                <div style={styles.productDetails}>
                  <span style={styles.productName}>{item.name}</span>
                  <span style={styles.productPrice}>
                    Price: ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <div style={styles.quantityContainer}>
                    <label
                      htmlFor={`quantity-${index}`}
                      style={styles.quantityLabel}
                    >
                      Quantity:
                    </label>
                    <input
                      type="number"
                      id={`quantity-${index}`}
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        updateQuantity(index, parseInt(e.target.value))
                      }
                      style={styles.quantityInput}
                    />
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  style={styles.removeButton}
                  aria-label={`Remove ${item.name} from cart`}
                >
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>
          <div style={styles.totalContainer}>
            <h2 style={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</h2>
            <button
              onClick={() => navigate('/payment')}
              style={styles.checkoutButton}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Estilos melhorados
const styles = {
  cartContainer: {
    minHeight: '100vh',
    padding: '40px 20px',
    backgroundColor: '#111',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },
  title: {
    fontSize: '2.5rem',
    color: '#dfa54b',
    marginBottom: '30px',
    textAlign: 'center',
  },
  emptyCartMessage: {
    fontSize: '1.2rem',
    color: '#fff',
    textAlign: 'center',
    marginTop: '20px',
  },
  goShoppingLink: {
    color: '#dfa54b',
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
  cartContent: {
    width: '100%',
    maxWidth: '900px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cartList: {
    listStyleType: 'none',
    padding: 0,
    width: '100%',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#222',
    padding: '15px',
    borderRadius: '10px',
    marginBottom: '15px',
    transition: 'background-color 0.3s ease',
  },
  productImage: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginRight: '20px',
  },
  productDetails: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
  },
  productName: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#dfa54b',
  },
  productPrice: {
    marginTop: '5px',
    fontSize: '1rem',
    color: '#fff',
  },
  quantityContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
  },
  quantityLabel: {
    fontSize: '1rem',
    color: '#fff',
    marginRight: '10px',
  },
  quantityInput: {
    width: '60px',
    padding: '5px',
    borderRadius: '5px',
    border: '1px solid #555',
    backgroundColor: '#444',
    color: '#fff',
    fontSize: '1rem',
  },
  removeButton: {
    backgroundColor: '#ff4d4f',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    padding: '8px 12px',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.9rem',
  },
  totalContainer: {
    width: '100%',
    maxWidth: '900px',
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalPrice: {
    fontSize: '1.8rem',
    color: '#dfa54b',
  },
  checkoutButton: {
    padding: '12px 25px',
    backgroundColor: '#dfa54b',
    color: '#000',
    border: '2px solid transparent',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease, transform 0.3s ease, border-color 0.3s ease',
  },
  
};

export default Cart;
