import { createContext, useState } from "react";
import Child from "./Child";
export const MyContext = createContext();

function Parent(){
const [name,setName]=useState([
    {id:1,name:"abel"}
   
]);
return(
    <MyContext.Provider value={name[0].name} >
     <div style={{border:"black 5px solid",width:"300px",height:"300px",}}>
      <h1>parent:{name[0].name}</h1>
      <Child/>
    </div>
</MyContext.Provider>
    
)

}
export default Parent;