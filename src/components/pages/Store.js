import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { commerce } from '../../lib/commerce';
//import Products from '../products/Products';
//import StoreNavbar from '../Navbar/StoreNavbar';

import { Products, StoreNavbar } from '../../components';

const Store = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div>
      <StoreNavbar totalItems={cart.total_items} />
      <Products products={products} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default Store;
