var age = 10; // int
var salary = 15.00; // double
// console.log(`The variable type of age is ${typeof age}`);
// console.log(`The variable type of salary is ${typeof salary}`);

// var name = 'John Smith';
// console.log(`The variable type of name is ${typeof name}`);

const displayGreetings = function(name,year){
    console.log(`Happy new year ${year} ${name}`)
}
// console.log(`The variable type of displayGreetings is ${typeof displayGreetings}`);

const displayGreetingswithEmoji = function(name,year){
    console.log(`😊 😊 Happy new year ${year} ${name} 😊 😊`)
}

var greet = {};

if(age > 10){
    greet = displayGreetings;
}
else{
    greet = displayGreetingswithEmoji;
}

greet('Sam', 2022);