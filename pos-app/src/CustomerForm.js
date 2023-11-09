import React, { useState } from 'react';

const CustomerForm = ({ onSubmit }) => {
  const [customerName, setCustomerName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(customerName);
    setCustomerName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre del Cliente:
        <input
          type="text"
          value={customerName}
          onChange={e => setCustomerName(e.target.value)}
        />
      </label>
      <button type="submit">Guardar Cliente</button>
    </form>
  );
};

export default CustomerForm;
