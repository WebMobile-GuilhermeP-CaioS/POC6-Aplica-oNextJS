'use client'

import React, { useContext } from 'react';
import ClickContext from "../../app/globais";

export default function PurchaseButton ({ contador, seatPrice }) {
  const { clickCount } = useContext(ClickContext);

  const totalPrice = clickCount * seatPrice;

  const handlePurchase = () => {
    alert('Compra realizada com sucesso');
  };

  return (
    <button onClick={handlePurchase}>
      Comprar R$ {totalPrice.toFixed(2)}
    </button>
  );
};