// src/components/InventoryService.js
import db from './Database';

const InventoryService = {
  getAllProducts: () => {
    return db.get('products').value();
  },
  addProduct: (name, price) => {
    const newProduct = { name, price };
    db.get('products').push(newProduct).write();
    return newProduct;
  },
  // Agrega otras funciones para el inventario y operaciones CRUD según tus necesidades
};

export default InventoryService;
