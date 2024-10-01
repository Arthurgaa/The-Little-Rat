import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    cardHolderName: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('creditCard'); // Credit Card, Debit Card ou PIX
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({
      ...paymentDetails,
      [name]: value,
    });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    if (paymentMethod === 'creditCard' || paymentMethod === 'debitCard') {
      // Simulação de processamento de pagamento com cartão
      setTimeout(() => {
        alert('Payment successful! Thank you for your purchase.');
        setIsProcessing(false);
        navigate('/'); // Redireciona para a página inicial ou outra de sua escolha
      }, 2000);
    } else if (paymentMethod === 'pix') {
      // Simulação de redirecionamento para pagamento com PIX
      setTimeout(() => {
        navigate('/pix'); // Redireciona para a página de QR code
      }, 500);
    }
  };

  return (
    <div style={styles.paymentContainer}>
      <h1 style={styles.title}>Payment Information</h1>
      <form onSubmit={handlePayment} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="paymentMethod" style={styles.label}>Payment Method</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            style={styles.select}
          >
            <option value="creditCard">Credit Card</option>
            <option value="debitCard">Debit Card</option>
            <option value="pix">PIX</option>
          </select>
        </div>

        {(paymentMethod === 'creditCard' || paymentMethod === 'debitCard') && (
          <>
            <div style={styles.inputGroup}>
              <label htmlFor="cardNumber" style={styles.label}>Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={paymentDetails.cardNumber}
                onChange={handleInputChange}
                placeholder="1234 5678 9012 3456"
                style={styles.input}
                required
              />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="cardHolderName" style={styles.label}>Cardholder Name</label>
              <input
                type="text"
                id="cardHolderName"
                name="cardHolderName"
                value={paymentDetails.cardHolderName}
                onChange={handleInputChange}
                placeholder="John Doe"
                style={styles.input}
                required
              />
            </div>
            <div style={styles.row}>
              <div style={styles.inputGroup}>
                <label htmlFor="expirationDate" style={styles.label}>Expiration Date</label>
                <input
                  type="text"
                  id="expirationDate"
                  name="expirationDate"
                  value={paymentDetails.expirationDate}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.inputGroup}>
                <label htmlFor="cvv" style={styles.label}>CVV</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={paymentDetails.cvv}
                  onChange={handleInputChange}
                  placeholder="123"
                  style={styles.input}
                  required
                />
              </div>
            </div>
          </>
        )}

        <button type="submit" style={styles.checkoutButton} disabled={isProcessing}>
          {isProcessing ? 'Processing...' : paymentMethod === 'pix' ? 'Pay with PIX' : 'Complete Payment'}
        </button>
      </form>
    </div>
  );
};

// Estilos
const styles = {
  paymentContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
    color: '#fff',
    padding: '40px',
  },
  title: {
    fontSize: '2.5rem',
    color: '#dfa54b',
    marginBottom: '40px',
  },
  form: {
    width: '100%',
    maxWidth: '500px',
    backgroundColor: '#333',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    fontSize: '1rem',
    marginBottom: '8px',
    color: '#dfa54b',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #555',
    backgroundColor: '#444',
    color: '#fff',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  select: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #555',
    backgroundColor: '#444',
    color: '#fff',
  },
  checkoutButton: {
    width: '100%',
    padding: '15px',
    fontSize: '1.2rem',
    backgroundColor: '#dfa54b',
    color: '#000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Payment;


