import { React, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import ComposerChoices from './components/pages/ComposerChoices';
import Store from './components/pages/Store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import shostaBiography from './components/pages/shostaBiography';
import Footer from '../src/components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Products from './components/products/Products';
import Resources from './components/pages/Resources';

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
          <Route path="/" exact component={Home} />
          <Route path="/composers" exact component={ComposerChoices} />
          <Route path="/store" component={Store} />
          <Route path="/about" component={About} />
          <Route path="/resources" component={Resources} />
          <Route path="/shostakovich" component={shostaBiography} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
