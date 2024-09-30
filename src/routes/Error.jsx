import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#111',
      color: '#fff',
    }}>
      <h1>Oops!</h1>
      <p>Desculpe, algo deu errado.</p>
      <p>{error?.statusText || error?.message}</p>
      <Link to="/" style={{
        backgroundColor: '#daa520',
        color: '#000',
        padding: '10px 20px',
        borderRadius: '5px',
        textDecoration: 'none',
      }}>
        Voltar para Home
      </Link>
    </div>
  );
};

export default Error;


