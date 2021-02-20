//import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards.jsx"
import Sdata from "./Sdata.jsx"
import App from './App.jsx';



//ReactDOM.render(<App/>,document.getElementById("root")); CAlculator
//---------------------------------------------------------------------------------------------


//Lecture 22-24
/*ReactDOM.render(
<>
<Card
imgsrc="https://miro.medium.com/max/1400/1*izQM9tV99trvG3aeqzpDeQ.jpeg"
title="A Netflix Original Series"
link="https://www.netflix.com/title/80100172"
series='DARK'
/>
<Card
imgsrc="https://m.media-amazon.com/images/M/MV5BZDcxOGI0MDYtNTc5NS00NDUzLWFkOTItNDIxZjI0OTllNTljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
title="A Netflix Original Series"
link="https://www.netflix.com/title/80192098"
series='Money heist'
/>

</>,document.getElementById("root"));*/


/*ReactDOM.render(<Card
imgsrc={Sdata[0].imgsrc}
title={Sdata[0].title}
link={Sdata[0].link}
name={Sdata[0].name}
/>,document.getElementById("root"));*/

/*function ncard(val){

    return(
        <Card
imgsrc={val.imgsrc}
title={val.title}
link={val.link}
name={val.name}
/>
    );
}
ReactDOM.render(<>{Sdata.map(ncard)}</>,document.getElementById("root"));*/

//SLOT MAchine game

ReactDOM.render(<App/>,document.getElementById("root")); 


