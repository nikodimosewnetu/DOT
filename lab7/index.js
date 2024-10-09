const colors=["red","green","blue"];
let [firstColor,secondColor,thirdColor] =colors;
console.log(`firstColor:${firstColor } `);
console.log(`secondColor:${secondColor } `);
console.log(`thirdColor:${thirdColor } `);


 // question 2
 const person = { name: 'Alice', age: 25, city: 'Wonderland'};
 let {name,age,city}=person;
 console.log(`name:${name } `);
 console.log(`age:${age } `);
 console.log(`city:${city } `);

 //q3
 const settings = { theme: 'dark', language: 'en' };
 let {theme,language,property="light"}=settings;
 console.log(`theme:${theme } `);
 console.log(`language:${language } `);
 console.log(`property:${property } `);
