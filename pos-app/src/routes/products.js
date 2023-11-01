import React from 'react';
import { useInventory, addToCart, editProduct, deleteProduct, setCart, setTotal, lowInventoryProducts, products } from '../components/inventory';
import '../routes/products'; // Importa el archivo de estilos CSS
function Products() {

  const {
    products,
    setProducts,
    newProduct,
    setNewProduct,
    // Otras variables de estado y funciones desde el hook
  } = useInventory();



  return (
    <div className="products-container">
      <h1 className="products-title">Lista de Productos</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li className="product-item" key={product.id}>
            {product.name} - Precio: ${product.price} - Existencia: {product.stock}
            <div className="product-actions">
              <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
              <button onClick={() => editProduct(product)}>Editar</button>
              <button onClick={() => deleteProduct(product.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// En tu componente Products.js
function handleDeleteProduct(productId) {
  // Pregunta al usuario si está seguro de eliminar el producto (puedes usar una ventana modal de confirmación).
  const isConfirmed = window.confirm('¿Seguro que deseas eliminar este producto?');

  if (isConfirmed) {
    // Llama a la función deleteProduct para eliminar el producto
    deleteProduct(productId, products, setProducts);
  }
}



export default Products;
