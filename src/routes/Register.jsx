import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert('Please fill out all fields.');
      return;
    }

    // Verifica se o navegador suporta localStorage
    if (typeof Storage !== "undefined") {
      // Salva a conta do usuário no localStorage
      localStorage.setItem('user', JSON.stringify({ name, email, password }));

      // Alerta de sucesso e redirecionamento para a página Home
      alert('Account created successfully! You are now logged in.');
      navigate('/');
    } else {
      alert('Your browser does not support localStorage.');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#111',
      color: '#fff',
      paddingBottom: '20px',
    }}>
      <h1>Create Your Account</h1>
      <form onSubmit={handleRegister} style={{ width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
          required
        />
        <input
          type="password"
          placeholder="Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
          required
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#dfa54b',
            color: '#000',
            border: '2px solid transparent', // Borda transparente para manter o tamanho
            padding: '10px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, transform 0.3s ease, border-color 0.3s ease',
            boxSizing: 'border-box', // Inclui borda e padding no tamanho total
            ...(isButtonHovered ? {
              backgroundColor: '#fff',
              color: '#dfa54b',
              borderColor: '#dfa54b', // Altera a cor da borda no hover
              transform: 'translateY(-2px)', // Efeito de movimento no hover
            } : {})
          }}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
