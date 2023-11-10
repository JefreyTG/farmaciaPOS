// src/components/AddProductForm.js
import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct }) => {
  const [newProduct, setNewProduct] = useState({ name: '', quantity: 0 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(newProduct);
    setNewProduct({ name: '', quantity: 0 });
  };

  return (
    <div>
      <h2>Agregar Nuevo Producto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre del Producto:
          <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} required />
        </label>
        <label>
          Cantidad:
          <input type="number" name="quantity" value={newProduct.quantity} onChange={handleInputChange} required />
        </label>
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  );
};

export default AddProductForm;
