// src/components/ProductList.js
import React from 'react';
import Inventory from './Inventory';

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Productos Disponibles</h2>
      <ul>
        {Inventory.map(product =>(
            <li>
                {product.name} -Cantidad en inventario: {product.quantity} - Precio: ${product.price} - 
                <button onClick={()=> addToCart(product)}>Agregar al Carrito</button>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
