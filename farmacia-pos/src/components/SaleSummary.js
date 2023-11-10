// src/components/SaleSummary.js
import React from 'react';

const SaleSummary = ({ cart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Resumen de la Venta</h2>
      <p>Total: ${total}</p>
    </div>
  );
};

export default SaleSummary;
