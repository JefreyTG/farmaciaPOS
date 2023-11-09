import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/components/home';
import { Inventory } from '../src/components/inventory';
import {Products} from './routes/Products'

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>POS APP</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />,
            <Route path="/Products" element={<Products />} />,
            <Route path="/inventory" element={<Inventory />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
