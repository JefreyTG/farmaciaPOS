// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ products, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    setSearchTerm(searchText);
    onSearch(searchText);
  };

  return (
    <div>
      <label>Buscar Productos:</label>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
