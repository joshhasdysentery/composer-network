import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import Products from '../products/Products';
//import StoreNavbar from '../Navbar/StoreNavbar';

import { Products, StoreNavbar } from '../../components';

const Store = () => {
  return (
    <div>
      <Products />
    </div>
  );
};

export default Store;
