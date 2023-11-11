// src/db.js
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./src/inventory.db', (err) => {
  if (err) {
    console.error('Error al abrir la base de datos:', err.message);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

db.serialize(() => {
  // Crear la tabla de productos
  db.run(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      price REAL NOT NULL
    )
  `);

  // Crear la tabla de inventario
  db.run(`
    CREATE TABLE IF NOT EXISTS inventory (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product_id INTEGER,
      quantity INTEGER NOT NULL,
      FOREIGN KEY (product_id) REFERENCES products(id)
    )
  `);
});

module.exports = db;
