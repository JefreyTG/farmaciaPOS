import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/components/home';
import Products from './routes/Products';
import { Inventory } from './components/inventory';



function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>POS APP</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Inventory" element={<Inventory />} />
            <Route path="/Products" element={<Products />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;