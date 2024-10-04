import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Componentes Estilizados

const ShopContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 80px 20px 60px; /* Ajustado para adicionar mais padding-bottom */
  text-align: center;
  background-color: #111;
  color: #fff;
  min-height: 100vh;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 32px; /* Reduzido de 36px */
  font-weight: bold;
  color: #dfa54b;
  margin-bottom: 30px; /* Reduzido de 40px */
`;

const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Reduzido de 250px */
  gap: 30px; /* Reduzido de 40px */
  justify-items: center;
`;

const ProductCard = styled.div`
  background-color: #fff;
  border: 2px solid #dfa54b; /* Borda dourada em volta das caixas */
  border-radius: 12px; /* Reduzido de 15px */
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  max-width: 250px; /* Reduzido de 300px */
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2); /* Sombra nas caixas */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(218, 165, 32, 0.7); /* Efeito de hover */
  }
`;

const ProductImgContainer = styled.div`
  height: 200px; /* Reduzido de 250px */
  background-color: #f4f4f4;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 15px; /* Reduzido de 20px */
  background-color: #fff; /* Branco para contraste com a imagem */
`;

const ProductName = styled.h2`
  font-size: 18px; /* Reduzido de 20px */
  font-weight: bold;
  margin-bottom: 8px; /* Reduzido de 10px */
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 16px; /* Reduzido de 18px */
  color: #666;
`;

const AddToCartButton = styled.button`
  margin-top: 10px; /* Reduzido de 15px */
  padding: 8px 18px; /* Reduzido de 10px 20px */
  background-color: #dfa54b;
  color: #000;
  border: 2px solid transparent; /* Mantém borda transparente para manter o tamanho */
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem; /* Reduzido de 1.2rem */
  transition: background-color 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
  box-sizing: border-box; /* Garante que o padding e a borda sejam incluídos no tamanho total */

  &:hover {
    background-color: #fff;
    color: #dfa54b;
    border-color: #dfa54b; /* Altera apenas a cor da borda */
    transform: translateY(-2px); /* Pequeno efeito de hover */
  }
`;

// Componente Shop

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
    <ShopContainer>
      <Title>Our Products</Title>

      <ProductsList>
        {/* Exibir os produtos */}
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImgContainer>
              <ProductImg
                src={product.img || 'https://via.placeholder.com/150'}
                alt={product.name}
              />
            </ProductImgContainer>
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
              <AddToCartButton onClick={() => addToCart(product)}>
                Add to Cart
              </AddToCartButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductsList>

    </ShopContainer>
  );
};

export default Shop;
