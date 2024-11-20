import React,{useContext} from 'react';
import { MyContext } from './Parent';

function Child(){
    const name= useContext(MyContext)
return(
    <div style={{border:"black 5px solid",width:"150px",height:"100px",marginLeft:"27%"}}>
        <h2>child:{name}</h2>
    </div>
)
}
export default Child;