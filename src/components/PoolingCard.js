import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
  },
  media: {
    height: 240,
  },
  title: {
    fontFamily: 'Nunito',
    //fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
  },
  desc: {
    fontFamily: 'Nunito',
    //fontSize: '1.1rem',
    color: '#ddd',
  },
});

export default function ImgMediaCard(checked) {
  const classes = useStyles();

  return (

    <Collapse in={checked} {...(checked ? { timeout: 4000 } : {})}>
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={'/images/bg1.jpg'}
          title="Rental"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            Car Pooling
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
          Our Company allows you to use this service, either to pool a car or to pool out your car.
          </Typography>
        </CardContent>
    </Card>
    </Collapse>
  );
}