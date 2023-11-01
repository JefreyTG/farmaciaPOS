import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/components/home';
import Products from '../src/routes/products';

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>Aplicación POS</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            {/* Agrega rutas para otras secciones de la aplicación aquí */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
