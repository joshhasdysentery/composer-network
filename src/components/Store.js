import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {};
  return (
    <div>
      <h1>Composer Store</h1>
    </div>
  );
}

export default Shop;
