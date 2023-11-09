import React from 'react';

const ShoppingCart = ({ cart, checkout }) => (
  <div>
    <h2>Carrito de Compras</h2>
    <ul>
      {cart.map(item => (
        <li key={item.product.id}>
          {item.product.name} x{item.quantity}
        </li>
      ))}
    </ul>
    <button onClick={checkout}>Pagar</button>
  </div>
);

export default ShoppingCart;
