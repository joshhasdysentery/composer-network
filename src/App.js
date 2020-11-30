import { React, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import ComposerChoices from './components/ComposerChoices';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <ComposerChoices />
    </div>
  );
}
