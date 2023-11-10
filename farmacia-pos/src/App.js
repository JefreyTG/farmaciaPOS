// src/App.js
import React, { useState } from 'react';
import './styles.css';

import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import SaleSummary from './components/SaleSummary';
import Inventory from './components/Inventory';
import AddProductForm from './components/AddProductForm';

const initialInventory = [
  { id: 1, name: 'Medicina 1', quantity: 50, price: 10 },
  { id: 2, name: 'Medicina 2', quantity: 30, price: 15 },
  // ... otros elementos del inventario
];

const App = () => {
  const [cart, setCart] = useState([]);
  const [inventory, setInventory] = useState(initialInventory);

  const addToCart = (product) => {
    setCart([...cart, product]);
    updateInventory(product.id, -1); // Restar 1 a la cantidad del inventario
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter(item => item.id !== product.id);
    setCart(updatedCart);
    updateInventory(product.id, 1); // Sumar 1 a la cantidad del inventario
  };

  const handleAddProduct = (newProduct) => {
    setInventory([...inventory, { ...newProduct, id: inventory.length + 1 }]);
  };

  const removeFromInventory = (productId) => {
    setInventory(prevInventory => prevInventory.filter(item => item.id !== productId));
  };

  const updateInventory = (productId, quantityChange) => {
    setInventory(prevInventory =>
      prevInventory.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity + quantityChange }
          : item
      )
    );
  };

  return (
    <div className="main-container">
      <Header />
      <ProductList
        inventory={inventory}
        addToCart={addToCart}
        removeFromInventory={removeFromInventory}
      />
      <Cart cart={cart} removeFromCart={removeFromCart} />
      <SaleSummary cart={cart} />
      <Inventory inventory={inventory} />
      <AddProductForm onAddProduct={handleAddProduct} />
    </div>
  );
};

export default App;
