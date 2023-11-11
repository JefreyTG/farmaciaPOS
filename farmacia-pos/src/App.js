// src/App.js
import React, { useState, useEffect } from 'react';
import bcrypt from "bcryptjs-react";
import './styles.css';

import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import SaleSummary from './components/SaleSummary';
import Inventory from './components/Inventory';
import AddProductForm from './components/AddProductForm';
import InventoryService from './components/InventoryService';


const initialInventory = [
  { id: 1, name: 'Medicina 1', quantity: 50, price: 10 },
  { id: 2, name: 'Medicina 2', quantity: 30, price: 15 },
  // ... otros elementos del inventario
];

const App = () => {
  const [cart, setCart] = useState([]);
  const [inventory, setInventory] = useState(initialInventory);

  useEffect(() => {
    // Cargar productos al montar el componente
    InventoryService.getAllProducts((data) => {
      setInventory(data);
    });
  }, []);

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
    // Añadir el nuevo producto a la base de datos utilizando InventoryService
    InventoryService.addProduct(newProduct.name, newProduct.price, (data) => {
      if (data) {
        // Actualizar el estado del inventario con el nuevo producto
        setInventory([...inventory, data]);
      }
    });
  };

  const removeFromInventory = (productId) => {
    // Eliminar el producto de la base de datos utilizando InventoryService
    InventoryService.removeProduct(productId, () => {
      // Actualizar el estado del inventario al completar la eliminación
      setInventory(prevInventory => prevInventory.filter(item => item.id !== productId));
    });
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
      <Inventory inventory={inventory} removeFromInventory={removeFromInventory} />
      <AddProductForm onAddProduct={handleAddProduct} />
    </div>
  );
};

export default App;
