 function delay(ms){
    return new Promise(resolve=> setTimeout(resolve,ms));

 }

 function fetchData(){
    return delay(2000).then(()=>{
        const randomData= Math.floor(Math.random()*100)+1;
        console.log(`fetched data:${randomData}`);
        return randomData;

    });
   
 }
  function processData(data){
      return delay(1000).then(()=>{
        const output= data*2;
        console.log(`processed data: ${output}`);
        return output;
    })
  }

  fetchData()
        .then(processData)
        .then(finalResult=>{
            console.log(`final result:${finalResult}`);

        })
        .catch(error=>{
            console.log(`Error:${error}`);
        });
