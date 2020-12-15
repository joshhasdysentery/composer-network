import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { commerce } from '../../lib/commerce';
//import Products from '../products/Products';
//import StoreNavbar from '../Navbar/StoreNavbar';

import { Products, StoreNavbar } from '../../components';

const Store = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
  return (
    <div>
      <StoreNavbar />
      <Products />
    </div>
  );
};

export default Store;
