import React, { useState } from 'react';
import ProductList from '../ProductList'
import ShoppingCart from '../ShoppingCart';
import CustomerForm from '../CustomerForm';
import { db } from '../firebase';

const Pos = () => {
  const [products, setProducts] = useState(/* Obtener productos de la base de datos */);
  const [cart, setCart] = useState([]);
  const [customer, setCustomer] = useState(null);

  // Obtener productos de la base de datos (puedes usar useEffect para esto)

  const addToCart = product => {
    const existingItem = cart.find(item => item.product.id === product.id);

    if (existingItem) {
      setCart(
        cart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const checkout = () => {
    // Guardar la venta en la base de datos (puedes usar db.collection('sales').add())

    setCart([]);
    setCustomer(null);
  };

  const saveCustomer = customerName => {
    // Guardar el cliente en la base de datos (puedes usar db.collection('customers').add())

    setCustomer({ id: 'ID_GENERADO', name: customerName });
  };

  return (
    <div>
      <h1>Punto de Venta - Farmacia</h1>
      <CustomerForm onSubmit={saveCustomer} />
      <ProductList products={products} addToCart={addToCart} />
      <ShoppingCart cart={cart} checkout={checkout} />
    </div>
  );
};

export default Pos;
