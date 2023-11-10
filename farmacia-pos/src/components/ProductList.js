// src/components/ProductList.js
import React, { useState } from 'react';
import SearchBar from './SearchBar';

const ProductList = ({ inventory, addToCart, removeFromInventory }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm.toLowerCase());
    const filtered = inventory.filter(product =>
      product.name.toLowerCase().includes(searchTerm)
    );
    setFilteredProducts(filtered);
  };

  const handleRemoveFromInventory = (productId) => {
    removeFromInventory(productId);
    setFilteredProducts(filteredProducts.filter(product => product.id !== productId));
  };

  return (
    <div>
      <h2>Productos Disponibles</h2>
      <SearchBar products={inventory} onSearch={handleSearch} />
      <ul>
        {(searchTerm === '' ? inventory : filteredProducts).map(product => (
          <li key={product.id}>
            {product.name} - Cantidad en inventario: {product.quantity} - Precio: ${product.price} -
            <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
            {inventory.includes(product) && (
              <button onClick={() => handleRemoveFromInventory(product.id)}>Quitar del Inventario</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
