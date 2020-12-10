import { React, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CssBaseline } from '@material-ui/core';
import { SvgIcon } from '@material-ui/icons';
import Header from './components/Header';
import ComposerChoices from './components/ComposerChoices';
import Store from './components/Store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Biography from './components/Biography';
import Footer from '../src/components/Footer';

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
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <Switch>
          <Route path="/" exact component={ComposerChoices} />
          <Route path="/store" component={Store} />
          <Route path="/shostakovich" component={Biography} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
