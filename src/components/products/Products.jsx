import React from 'react';
import { Grid } from '@material-ui/core';

import Product from '../product/Product';
import useStyles from './styles';
import StoreNavbar from '../Navbar/StoreNavbar';

const products = [
  {
    id: 1,
    name: 'Valve Oil',
    description: 'make your instrument unstuck',
    price: '$3',
  },
  {
    id: 2,
    name: 'Conducting Baton',
    description: 'you use this everyday, never hurts for a spare',
    price: '$50',
  },
];

const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
      <StoreNavbar />
    </main>
  );
};

export default Products;
