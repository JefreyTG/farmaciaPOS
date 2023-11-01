import React, { useState, useEffect } from 'react';

export function useInventory() {
  
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: 0,
    stock: 0,
  });
  const [cart, setCart] = useState([]); // Define el estado del carrito
  const [total, setTotal] = useState(0); // Define el estado del total

  const [lowInventoryProducts, setLowInventoryProducts] = useState([]);

     const loadProducts = () => {
      const mockProducts = [
          { id: 1, name: 'Producto 1', price: 10.99, stock: 50 },
          { id: 2, name: 'Producto 2', price: 19.99, stock: 10 },
          { id: 3, name: 'Producto 3', price: 5.99, stock: 5 },
        ];
        setProducts(mockProducts);
      };

      const checkLowInventory = () => {
        // Filtra los productos con existencias bajas.
    const lowInventory = products.filter((product) => product.stock < 10);
    setLowInventoryProducts(lowInventory);
  };

  useEffect(()=> {
    loadProducts();
    checkLowInventory();
  }, []);

  return {
    products,
    setProducts,
    newProduct,
    setNewProduct,
    cart,
    total,
    // Otras variables de estado y funciones
  };
}
export function addToCart(product, cart, setCart, total, setTotal) {
  // Lógica para agregar un producto al carrito.
  const existingItem = cart.find((item) => item.product.id === product.id);
  
  if (existingItem) {
  // Si el producto ya está en el carrito, incrementa la cantidad.
  existingItem.quantity += 1;
  setCart([...cart]);
  } else {
  // Si el producto no está en el carrito, agrégalo.
  setCart([...cart, { product, quantity: 1 }]);
  }
  setTotal(total + product.price);
  
  }

  export function editProduct (product, products, setProducts){
    //Encuentra el indice del producto en la lista y crea copia del producto a editar 
  
  const index=products.findIndex((p)=> p.id === product.id);
  const updatedProduct = {  ...product  };
  const updatedProducts=[...products];

  updatedProducts[index] = updatedProduct;

  setProducts(updatedProducts);
  }

  export function deleteProduct(productId, products, setProducts){
    // Filtra los productos para eliminar el producto con el ID proporcionado
    const updatedProducts = products.filter((product) => product.id !== productId);
    
    // Actualiza la lista de productos
    setProducts(updatedProducts);
    }





export default function Inventory(){

  const {
  products,
  setProducts,
  newProduct,
  setNewProduct,
  cart,
  total, 
  } = useInventory();

  const processSale = () => {
    // Lógica para procesar la venta.
    // Realiza una solicitud al backend para registrar la venta y actualizar el inventario.
    const saleItems = cart.map((item) => ({
      productId: item.product.id,
      quantity: item.quantity,
    }));

    fetch('/api/sales', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(saleItems),
    })
      .then((response) => {
        if (response.ok) {
          // Venta procesada con éxito, actualiza el inventario y el carrito de compras.
          setCart([]);
          setTotal(0);
          // Puedes cargar nuevamente el inventario después de la venta si es necesario.
        }
      })
      .catch((error) => {
        console.error('Error al procesar la venta:', error);
      });
    };

  return (
    
    <div>
      <h1>Gestión de Inventario</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Existencia</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>
                <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
                <button onClick={() => editProduct(product)}>Editar</button>
                <button onClick={() => deleteProduct(product.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="low-inventory-notification">
        <h2>Productos con Existencias Bajas</h2>
        <ul>
          {lowInventoryProducts.map((product) => (
            <li key={product.id}>
              {product.name} - {product.stock} en existencia
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Carrito de Compras</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.product.id}>
              {item.product.name} - Cantidad: {item.quantity} - Subtotal: ${(item.quantity * item.product.price).toFixed(2)}
            </li>
          ))}
        </ul>
        <p>Total: ${total.toFixed(2)}</p>
        <button onClick={processSale}>Procesar Venta</button>
      </div>
    </div>
  );
}
   
export { products, setProducts, setCart, setTotal, lowInventoryProducts };
      
  

 
  


  

