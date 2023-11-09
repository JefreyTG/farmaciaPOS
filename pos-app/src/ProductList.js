import React from 'react';

const ProductList = ({ products, addToCart }) => (
  <div>
    <h2>Lista de Productos</h2>
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name} - ${product.price}{' '}
          <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
        </li>
      ))}
    </ul>
  </div>
);

export default ProductList;
