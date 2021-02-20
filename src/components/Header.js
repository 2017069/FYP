import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SortIcon from '@material-ui/icons/Sort';
import { AppBar, IconButton, Toolbar, Collapse,Tab,Tabs } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll} from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Nunito',
    },
    appbar: {
      background: 'none',
    },
    appbarWrapper: {
      width: '80%',
      margin: '0 auto',
    },
    appbarTitle: {
      flexGrow: '1',
      
    },
    icon: {
      color: '#000000',
      fontSize: '2rem',
      
    },
    colorText: {
      color:'#000000',
      fontSize: '4 rem',
    },
    container: {
        textAlign: 'center',
      },
      title: {
        color: '#fff',
        fontSize: '4rem',
      },
      goDown: {
        color: '#000000',
        fontSize: '3rem',
      },
}));


function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
      }, []);

    return(

       
        

        <div className={classes.root} id="header">
      <AppBar  className={classes.appbar} elevation={0}>



        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
        <span className={classes.colorText}>Rently</span>
          </h1>
        </Toolbar>
      </AppBar>

      <Collapse in={checked}
        {...(checked ? { timeout: 4000 } : {})}
        collapsedHeight={50}>
      <div className={classes.container}>
          <h1 className={classes.title}>
          <span className={classes.colorText}>Welcome to</span>
            <br />
            <span className={classes.colorText}>Rently</span>
          </h1>
          <IconButton>
              <Scroll to="Our-Services" smooth={true}>
              <ExpandMoreIcon className={classes.goDown}/> 
              </Scroll>
            </IconButton>
          </div>
      </Collapse>
      



          </div>
        
      

    );
}

export default Header;

