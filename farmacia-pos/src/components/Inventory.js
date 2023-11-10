// src/components/Inventory.js
import React from 'react';

const Inventory = ({ inventory }) => {
  return (
    <div>
      <h2>Inventario</h2>
      <ul>
        {inventory.map(item => (
          <li key={item.id}>
            {item.name} - Cantidad: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;
