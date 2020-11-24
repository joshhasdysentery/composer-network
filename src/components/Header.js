import { React } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
const useStyles = makeStyles((theme) => ({
  appbar: {
    background: 'none',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <h1 className={classes.appbarTitle}>Composer Network</h1>
          <IconButton>
            <SortIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
