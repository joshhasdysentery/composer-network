import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import composers from '../static/composers';
import useWindowPosition from '../hook/useWindowPosition';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="composer-choice">
      <Link to="/shostakovich">
        <ImageCard composer={composers[0]} checked={checked} />
      </Link>
      <ImageCard composer={composers[1]} checked={checked} />
    </div>
  );
}
