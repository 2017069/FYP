import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import PoolingCard from './PoolingCard';
import useWindowPosition from '../hook/useWindowPosition';
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

  export default function () {
    const classes = useStyles();
    
    return (
      <div className={classes.root} id="Our-Services">
        <ImageCard />
        <PoolingCard/>
      </div>
    );
  }