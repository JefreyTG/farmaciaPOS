import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import InventoryService from './InventoryService';

const ProductList = ({ addToCart, removeFromInventory }) => {
  const [inventory, setInventory] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Obtener la lista de productos desde la API al montar el componente
    InventoryService.getAllProducts()
      .then(products => setInventory(products))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleRemoveFromInventory = (productId) => {
    InventoryService.removeFromInventory(productId)
      .then(() => {
        setFilteredProducts(filteredProducts.filter(product => product.id !== productId));
      })
      .catch(error => console.error('Error:', error));
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    handleRemoveFromInventory(product.id);
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm.toLowerCase());
    const filtered = inventory.filter(product =>
      product.name.toLowerCase().includes(searchTerm)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <h2>Productos Disponibles</h2>
      <SearchBar products={inventory} onSearch={handleSearch} />
      <ul>
        {(searchTerm === '' ? inventory : filteredProducts).map(product => (
          <li key={product.id}>
            {product.name} - Cantidad en inventario: {product.quantity} - Precio: ${product.price} -
            <button onClick={() => handleAddToCart(product)}>Agregar al Carrito</button>
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
