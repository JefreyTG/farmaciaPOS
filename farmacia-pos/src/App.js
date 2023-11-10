// src/App.js
import React, { useState } from 'react';

import Header from './components/Header';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import SaleSummary from './components/SaleSummary';
import Inventory from './components/Inventory';
import AddProductForm from './components/AddProductForm';

const products = [
  { id: 1, name: 'Medicina 1', price: 10 },
  { id: 2, name: 'Medicina 2', price: 15 },
  // ... otros productos
];

const initialInventory = [
  { id: 1, name: 'Medicina 1', quantity: 50 },
  { id: 2, name: 'Medicina 2', quantity: 30 },
  // ... otros elementos del inventario
];

const App = () => {
  const [cart, setCart] = useState([]);
  const [inventory, setInventory] = useState(initialInventory);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter(item => item.id !== product.id);
    setCart(updatedCart);
  };

  const handleAddProduct = (newProduct) => {
    // Añade el nuevo producto al inventario
    setInventory([...inventory, { ...newProduct, id: inventory.length + 1 }]);
  };

  return (
    <div>
      <Header />
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
      <SaleSummary cart={cart} />
      <Inventory inventory={inventory} />
      <AddProductForm onAddProduct={handleAddProduct} />
    </div>
  );
};

export default App;
