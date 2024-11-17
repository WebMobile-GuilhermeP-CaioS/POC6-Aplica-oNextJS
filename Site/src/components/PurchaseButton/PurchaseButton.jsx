import React from 'react';

const PurchaseButton = ({ selectedSeats, seatPrice }) => {
  const totalPrice = selectedSeats.length * seatPrice;

  const handlePurchase = () => {
    alert('Compra realizada com sucesso');
  };

  return (
    <button onClick={handlePurchase}>
      Comprar R$ {totalPrice.toFixed(2)}
    </button>
  );
};