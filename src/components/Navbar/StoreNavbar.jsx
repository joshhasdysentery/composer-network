import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import useStyles from './styles';

const StoreNavbar = ({ totalItems }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            exact
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            Composer Store
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button} />
          <IconButton
            component={Link}
            to="/store/cart"
            aria-label="Show Cart Items"
            color="inherit"
          >
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default StoreNavbar;
