import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Collapse from '@material-ui/core/Collapse';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: 'Merriweather',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
  },
  desc: {
    fontFamily: 'Merriweather',
    fontSize: '1.1rem',
    color: '#fff',
  },
});

export default function ImageCard({ composer, checked }) {
  const classes = useStyles();
  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={composer.imageUrl}
          title="Dmitri Shostakovich"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.title}
          >
            {composer.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {composer.description}
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
}
