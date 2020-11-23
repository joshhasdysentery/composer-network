import { React, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
const useStyles = makeStyles((theme) => ({}));

export default function Header() {
  const classes = useStyles();
  return (
    <div>
      <AppBar>
        <h1>Dmitri Shostakovich</h1>
        <IconButton>
          <SortIcon />
        </IconButton>
      </AppBar>
    </div>
  );
}
