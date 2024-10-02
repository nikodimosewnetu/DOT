function multi(event){
    event.preventDefault();
var int1=document.getElementById("int1").value;
var int2=document.getElementById("int2").value;

if(int1===int2){
var a= 3*(parseInt(int1)+parseInt(int2));
  var result = document.getElementById("3x")
  result.innerText = a;
  console.log(parseInt(int1) === parseInt(int2))
}else {
    var result = document.getElementById("3x");
      var b=parseInt(int1)+parseInt(int2);
      result.innerText = b;
};
};

let randomNumber;
let attempts = 0;

function startGame() {
    randomNumber = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    attempts = 0; // Reset attempts
    document.getElementById("result").innerText = "Guess a number between 1 and 10!";
    document.getElementById("guessInput").value = "";
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById("guessInput").value);
    attempts++;

    if (userGuess < 1 || userGuess > 10) {
        document.getElementById("result").innerText = "Please enter a number between 1 and 10.";
    } else if (userGuess === randomNumber) {
        document.getElementById("result").innerText = `Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts!`;
    } else if (userGuess < randomNumber) {
        document.getElementById("result").innerText = "Too low! Try again.";
    } else {
        document.getElementById("result").innerText = "Too high! Try again.";
    }
}
function comparee(){
    var a= document.getElementById("num1").value;
    var b= document.getElementById("num2").value;
    if ((a>=50 && a<=90)&&(b>=50 && b<=90)){
        var re= document.getElementById("boom");
        re.innerHTML="True";
    }
    else{
        document.getElementById("boom").innerHTML="false";
    }
}


function closestTo100() {
  var number1= document.getElementById("number1").value;
  var number2= document.getElementById("number2").value;
    const target = 100;
    const diff1 = Math.abs(target - number1);
    const diff2 = Math.abs(target - number2);

    if (diff1 < diff2) {
        document.getElementById("close").innerHTML=number1;
    } else if (diff2 < diff1) {
        document.getElementById("close").innerHTML=number2;
    } else {
        document.getElementById("close").innerHTML="both are close";
    }
}

let numbersArray = [];


const numberInput = document.getElementById('numberInput');
const addButton = document.getElementById('addButton');
const numberList = document.getElementById('numberList');

function addNumber() {
    const number = Number(numberInput.value); 
    
    if (!isNaN(number)) {
        numbersArray.push(number); 
        displayNumbers(); 
        numberInput.value = ''; 
    } else {
        alert("Please enter a valid number."); 
    }
}


let itemsArray = [];


function addItem() {
    
    const itemInput = document.getElementById('itemInput');
    const itemValue = itemInput.value;

    
    if (itemValue) {
       
        itemsArray.push(itemValue);

        itemInput.value = '';

        displayItems();
    } else {
        alert("Please enter an item.");
    }
}

function displayItems() {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = ''; 
    itemsArray.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `Element ${index + 1}: ${item}`;
        itemList.appendChild(li);
    });
}




