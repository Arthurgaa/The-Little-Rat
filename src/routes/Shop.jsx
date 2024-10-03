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
    { id: 1, name: 'Graffiti T-shirt', price: 59.9, img: '/banner3.jpg' },
    { id: 2, name: 'Urban Jeans', price: 120.9, img: '/banner4.jpg' },
    { id: 3, name: 'Street Leather Jacket', price: 299.9, img: '/banner8.jpg' },
    { id: 4, name: 'Classic Sneakers', price: 159.9, img: '/banner9.jpg' },
  ];

  const addToCart = (product) => {
    // Verificar se o produto já está no carrinho
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    let updatedCart;

    if (existingProductIndex !== -1) {
      // Se o produto já estiver no carrinho, incrementar a quantidade
      updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
    } else {
      // Se não, adicionar o produto com quantidade 1
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Armazena o carrinho no localStorage

    // Dispatch custom event
    const event = new Event('cartUpdated');
    window.dispatchEvent(event);

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
              <button
                className="add-to-cart-button"
                onClick={() => addToCart(product)}
              >
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
          font-size: 36px;
          font-weight: bold;
          color: #dfa54b;
          margin-bottom: 40px;
        }

        .products-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px; /* Espaçamento entre as caixas */
          justify-items: center;
        }

        .product-card {
          background-color: #fff;
          border: 2px solid #dfa54b; /* Borda dourada em volta das caixas */
          border-radius: 15px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          width: 100%;
          max-width: 300px;
          box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2); /* Sombra nas caixas */
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(218, 165, 32, 0.7); /* Efeito de hover */
        }

        .product-img-container {
          height: 250px;
          background-color: #f4f4f4;
        }

        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .product-info {
          padding: 20px;
          background-color: #fff; /* Branco para contraste com a imagem */
        }

        .product-name {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 10px;
          color: #333;
        }

        .product-price {
          font-size: 18px;
          color: #666;
        }

        .add-to-cart-button {
          margin-top: 15px;
          padding: 10px 20px;
          background-color: #dfa54b;
          color: #000;
          border: 2px solid transparent; /* Borda transparente para manter o tamanho */
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
          box-sizing: border-box; /* Inclui borda e padding no tamanho total */
        }

        .add-to-cart-button:hover {
          background-color: #fff;
          color: #dfa54b;
          border-color: #dfa54b; /* Altera apenas a cor da borda */
          transform: translateY(-2px); /* Pequeno efeito de hover */
        }
      `}</style>
    </div>
  );
};

export default Shop;
