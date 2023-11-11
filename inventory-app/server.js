const express = require('express');
const { Low, SyncAdapter } = require('lowdb/lib');
const { FileSync } = require('lowdb/adapters/FileSync');
const bodyParser = require('body-parser');

const app = express();
const adapter = new FileSync('./db.json');
const db = new Low(new SyncAdapter(adapter));

app.use(bodyParser.json());

// Configurar rutas CRUD aquí...
app.get('/api/products', (req, res) => {
  const products = db.get('products').value();
  res.json(products);
});

app.post('/api/products', (req, res) => {
  const { name, quantity, price } = req.body;

  if (!name || !quantity || !price) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
  }

  const newProduct = { name, quantity, price };
  db.get('products').push(newProduct).write();
  res.json(newProduct);
});

// Puedes agregar más rutas CRUD aquí...

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor backend en http://localhost:${PORT}`);
});
