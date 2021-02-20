import React, { useState } from 'react';
import * as get from './Calc';
import { CssBaseline, makeStyles } from '@material-ui/core';
import Header from './components/Header';
import Services from './components/Services';
/*function App(){ LECTURE CALC
return(

    <>
    <h1>sum is {get.sum(3,4)} </h1>
    <h2>Product is {get.mult(3,4)}</h2>
    <h3>Division result is {get.divide(4,3)}</h3> 
    </>
);
}*/

//-----------------------------------------------------------------//


/*const App=() =>{ -------------------------HOOOKSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
    
    
    const [count,setCount]=useState(0);

    function Increment() {
        setCount(count+1);
        console.log("clicked");
    }
return(
    <>
    <h1>{count}</h1>
    <button onClick={Increment}> Click Me </button>
    </>
)

}*/
//**********************HOOKS TIME MACHINE********************* */
/*const App=() =>{

    let current= new Date().toLocaleTimeString();

    const [datee, setDate] = useState(current);

    

    const setTime=()=>{
        
        let current1= new Date().toLocaleTimeString();
        setDate(current1);
    }

    return(
        <>
        <h1>{datee}</h1>
        <button onClick={setTime}>Get time</button>
        </>
    );
}*/
/*const App=() =>{

    let current= new Date().toLocaleTimeString();

    const [datee, setDate] = useState(current);
    const setTime=()=>{
        
        let current1= new Date().toLocaleTimeString();
        setDate(current1);
    }
    setInterval(setTime,1000)
    return(
        <>
        <h1>{datee}</h1>
        </>
    );
}*/






  const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '100vh',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/images/bg1.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  }));
  function App() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <CssBaseline/>
        <Header/>
        <Services/>
      </div>
    );
  }



export default App;