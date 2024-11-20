import React, { useState, useEffect } from 'react';

const Counter = () => {
  
  const [count, setCount] = useState(0);
  const [isRunning,setIsRunning]=useState(false);
  

  useEffect(()=>{
    let intervalId;
    if(isRunning){
      intervalId = setInterval(() => {
          setCount(C => C + 1);
        }, 1000); 
        
       
   } 
   return()=>{
    if(intervalId){
      clearInterval(intervalId);
    }
   };
  },[isRunning]);
 
   

const Start=()=>{
     setIsRunning(true)
  }
  const Stop=()=>{
    setIsRunning(false)
  }
  const Clear=()=>{
    setCount(0);
    setIsRunning(false);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter</h1>
      <div style={{ fontSize: '3em' }}>{count}</div>
      <button onClick={Start} style={{backgroundColor:'yellow'}}>Start</button>
      <button onClick={Stop} style={{backgroundColor:'Red'}}>Stop</button>
      <button onClick={Clear} style={{backgroundColor:'Green'}}>Clear</button>
    </div>
  );
};

export default Counter;
