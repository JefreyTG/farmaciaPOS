// src/components/AddProductForm.js
import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct }) => {
  const [productName, setProductName] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleAddClick = () => {
    if (productName && productQuantity && productPrice) {
      const newProduct = {
        name: productName,
        quantity: parseInt(productQuantity, 10),
        price: parseFloat(productPrice),
      };

      onAddProduct(newProduct);

      // Limpiar los campos después de agregar el producto
      setProductName('');
      setProductQuantity('');
      setProductPrice('');
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <div>
      <h2>Añadir Nuevo Producto</h2>
      <div>
        <label>Nombre del Producto:</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div>
        <label>Cantidad en Inventario:</label>
        <input
          type="number"
          value={productQuantity}
          onChange={(e) => setProductQuantity(e.target.value)}
        />
      </div>
      <div>
        <label>Precio del Producto:</label>
        <input
          type="number"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
      </div>
      <button onClick={handleAddClick}>Agregar Producto</button>
    </div>
  );
};

export default AddProductForm;
