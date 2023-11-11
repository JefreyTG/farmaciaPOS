// src/components/Inventory.js
import React from 'react';

const Inventory = ({ inventory, removeFromInventory }) => {
  const handleRemoveFromInventory = (productId) => {
    removeFromInventory(productId);
  };

  return (
    <div>
      <h2>Inventario</h2>
      <ul>
        {inventory.map(item => (
          <li key={item.id}>
            {item.name} - Cantidad: {item.quantity} -
            <button onClick={() => handleRemoveFromInventory(item.id)}>Quitar del Inventario</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;
