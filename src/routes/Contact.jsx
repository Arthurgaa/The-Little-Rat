import React, { useState } from 'react';

const Contact = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

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
      <h1>Contact Us</h1>
      <form style={{ width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Your Name"
          required
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          required
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
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
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
