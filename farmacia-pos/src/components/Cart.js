// src/components/Cart.js
import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item)}>Quitar del carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
