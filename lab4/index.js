function leapYear(){
    var leap= document.getElementById("leap").value;
    if(leap % 4==0){
        var res=document.getElementById("res");
        res.innerHTML=`${leap} is leap year`;
    }
    else{
        var res=document.getElementById("res");
        res.innerHTML=`${leap} is not leap year`;
    }
}


function isJanuaryFirstSunday() {
    const year= document.getElementById("isFirstJan" ).value;
    var result= document.getElementById("result" );
   
        if ( year <2014 || year > 2050 || isNaN(year)) {
            result.innerHTML = "Please enter a valid year between 2014 and 2050.";
            return;

            }

        const date =new Date(year,0,1);
        const D= date.getDay();
        if(D===0){
            result.innerHTML=`January 1st, ${year} is a sunday.`;
        }

        else{
            result.innerHTML=`January 1st, ${year} is not a sunday. it is ${D===1? 'monday' : D===2? 'Tuesday' : D === 3 ? 'Wednesday' : D === 4 ? 'Thursday' : D === 5 ? 'Friday' : 'Saturday'}.`;
            }
        }



    function calculateEvenOdd(){
       let even ="";
       let odd="";
         for(let i=0;i<=15;i++){
         if(i % 2===0){
            even += `${i}`;
     
         }
         else{
            odd += `${i}`;
         }
      }
       document.getElementById("even").innerHTML=`Even numbers: ${even}` ;
       document.getElementById("odd").innerHTML=`Odd numbers: ${odd}` ;
    }





function palindrome(){
    var str=document.getElementById("revers").value;
    var newstr='';
    for(var i=str.length -1;i>=0;i--){
        newstr +=str[i];
        if(newstr==str){
            var confirm=document.getElementById("confirm");
            confirm.innerHTML=`${newstr} is palindrom.`;
        }
        else{
             var confirm=document.getElementById("confirm");
            confirm.innerHTML=`${newstr} is not palindrom.`;
    }
}
}

//method 2
/*function palindrome(){
        
        var str=document.getElementById("revers").value;
        var splitString = str.split(""); 
        var reverseArray = splitString.reverse(); 
        var joinArray = reverseArray.join(""); 
        if(joinArray==str){
            var confirm=document.getElementById("confirm");
            confirm.innerHTML=`${joinArray} is palindrom.`;
        }
        else{
             var confirm=document.getElementById("confirm");
            confirm.innerHTML=`${joinArray} is not palindrom.`;
        }
    } */

    


