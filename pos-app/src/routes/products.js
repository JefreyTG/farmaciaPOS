import React from 'react';
import '../routes/Products.css'; // Importa el archivo de estilos CSS
import { AddToCart, DeleteProduct, EditProduct, useInventory } from '../components/inventory';




function Products() {

const{products, setProducts}=useInventory();


    return (

    <div className="products-container">
      <h1 className="products-title">Lista de Productos</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li className="product-item" key={product.id}>
            {product.name} - Precio: ${product.price} - Existencia: {product.stock}
            <div className="product-actions">
              <button onClick={() => AddToCart(product)}>Agregar al Carrito</button>
              <button onClick={() => EditProduct(product)}>Editar</button>
              <button onClick={() => DeleteProduct(product.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// En tu componente Products.js
function HandleDeleteProduct(productId) {
  const {setProducts}=useInventory();
  const isConfirmed = window.confirm('¿Seguro que deseas eliminar este producto?');

  if (isConfirmed) {
    // Llama a la función deleteProduct para eliminar el producto
    DeleteProduct(productId, Products, setProducts);
  }
}



export default Products;
