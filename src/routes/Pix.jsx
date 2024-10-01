import React from 'react';

const PixQRCode = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Scan this QR Code to Pay with PIX</h1>
      <img src="/pix-qr-code.png" alt="PIX QR Code" style={styles.qrCode} />
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
    color: '#fff',
  },
  title: {
    fontSize: '2rem',
    color: '#dfa54b',
    marginBottom: '20px',
  },
  qrCode: {
    width: '300px',
    height: '300px',
    objectFit: 'cover',
  },
};

export default PixQRCode;
