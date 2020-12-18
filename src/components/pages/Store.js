import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { commerce } from '../../lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Products, StoreNavbar, Cart } from '../../components';

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
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };

  const handleupdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <div>
        <StoreNavbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/store/products">
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/store/cart">
            <Cart
              cart={cart}
              onupdateCartQty={handleupdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
              onEmptyCart={handleEmptyCart}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Store;
