import React from 'react';

const Contact = () => {
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
        <button type="submit" style={{
          backgroundColor: '#daa520',
          color: '#000',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '4px',
          cursor: 'pointer',
        }}>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;

