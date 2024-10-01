import React, { useState, useEffect } from 'react';

const Shop = () => {
  const [cart, setCart] = useState([]);

  // Carregar o carrinho do localStorage quando o componente é montado
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Lista de produtos com exemplo de roupas
  const products = [
    { id: 1, name: 'Black T-shirt', price: 49.90, img: '/camiseta-preta.jpg' },
    { id: 2, name: 'Jeans', price: 89.90, img: '/calca-jeans.jpg' },
    { id: 3, name: 'Leather Jacket', price: 199.90, img: '/jaqueta-couro.jpg' },
    { id: 4, name: 'White Sneakers', price: 159.90, img: '/tenis-branco.jpg' },
  ];

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Armazena o carrinho no localStorage
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="shop-container">
      <h1 className="title">Our Products</h1>

      <div className="products-list">
        {/* Exibir os produtos */}
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-img-container">
              <img
                src={product.img || 'https://via.placeholder.com/150'}
                alt={product.name}
                className="product-img"
              />
            </div>
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <button className="add-to-cart-button" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        * {
          font-family: 'Arial', sans-serif;
        }

        .shop-container {
          width: 100%;
          margin: 0;
          padding: 100px 20px 20px;
          text-align: center;
          background-color: #111;
          color: #fff;
          min-height: 100vh;
        }

        .title {
          font-size: 32px;
          font-weight: bold;
          color: #daa520;
          margin-bottom: 40px;
        }

        .products-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          justify-items: center;
        }

        .product-card {
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          width: 100%;
          max-width: 300px;
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(218, 165, 32, 0.7);
        }

        .product-img-container {
          height: 200px;
          background-color: #f4f4f4;
          cursor: pointer;
          transition: box-shadow 0.3s ease;
        }

        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .product-info {
          padding: 15px;
        }

        .product-name {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 10px;
          color: #333;
        }

        .product-price {
          font-size: 16px;
          color: #666;
        }

        .add-to-cart-button {
          padding: 10px 20px;
          background-color: #daa520;
          color: #000;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          margin-top: 10px;
        }

        .add-to-cart-button:hover {
          background-color: #fff;
          color: #000;
        }
      `}</style>
    </div>
  );
};

export default Shop;







