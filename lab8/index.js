let arr = [12, 13, 14, 15];
let newarr = [];
for (let num of arr) {
    newarr.push(double(num));
}
newarr.forEach(print);

function double(num) {
    return num * 2;
}

function print(value) {
    console.log(value);
}
//q2
let Obj = { name: "niko", age: 25 };
function printObject(obje) {
    for (let key in obje) {

        let value = obje[key];
        console.log(`${key}: ${value}`);

    }
}

printObject(Obj);
 //q3
 let cook=[
    "abel",
    "niko",
    "yab"
 ]

 function delayer(){
    for(let i of cook){
        console.log(i);
    };
 }

setTimeout(delayer,1000);

 