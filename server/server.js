const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

const db = new sqlite3.Database(':memory:');  // Utilizamos una base de datos en memoria para este ejemplo.

app.use('/styles.css', (req, res, next) => {
    res.setHeader('Content-Type', 'text/css');
    next();
  });
  
  app.use(express.static('public')); // Asegúrate de que tus archivos CSS estén en una carpeta "public"
// Configuración de rutas y controladores aquí.unabase de datos

app.listen(port,()=>{
    console.log ('El servidor esta escuchando en el puerto ${port}');

});