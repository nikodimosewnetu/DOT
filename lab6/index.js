let counter = 0;

document.getElementById("increment").onclick = () =>{
    counter += 1;
    updateCounter();
};

document.getElementById("decrement").onclick = ()=>{
   
   if(counter<=0) {
    alert("we can't count below zero");
   }
   else{
    counter -= 1;
    updateCounter();
   }
    
};

let updateCounter=() =>{
    document.getElementById("counter").innerHTML = counter;
}
